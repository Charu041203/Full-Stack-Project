const getRazorpay = require("../config/razorpay");
const { prisma } = require("../config/db");

// Step 1 — Create Razorpay order
exports.createOrder = async (amount) => {
  const options = {
    amount: amount * 100, // Razorpay needs paise
    currency: "INR",
    receipt: `receipt_${Date.now()}`,
  };
  const order = await razorpay.orders.create(options);
  return order;
};

// Step 2 — Store payment after verification
exports.storeTransaction = async (userId, amount, razorpayOrderId, razorpayPaymentId) => {
  // Calculate commission
  let commissionRate = 0.05;
  if (amount > 1000) commissionRate = 0.06;
  if (amount > 5000) commissionRate = 0.08;
  const commissionAmount = amount * commissionRate;

  // Create booking and payment together in one transaction
  const [booking, payment] = await prisma.$transaction(async (tx) => {
    // First update user cash balance
    await tx.user.update({
      where: { id: userId },
      data: { cashBalance: { increment: amount } },
    });

    // Create a booking record
    const newBooking = await tx.booking.create({
      data: {
        serviceId: razorpayOrderId, // temporary placeholder
        requesterId: userId,
        providerId: userId, // temporary placeholder
        paymentMethod: "cash",
        cashAmount: amount,
        status: "completed",
        escrowStatus: "released",
      },
    });

    // Create payment record
    const newPayment = await tx.payment.create({
      data: {
        bookingId: newBooking.id,
        razorpayOrderId,
        razorpayPaymentId,
        amount,
        commission: commissionAmount,
        status: "success",
      },
    });

    return [newBooking, newPayment];
  });

  return { booking, payment };
};

// Step 3 — Refund a payment
exports.refundTransaction = async (paymentId) => {
  const payment = await prisma.payment.findUnique({
    where: { id: paymentId },
  });

  if (!payment) throw new Error("Payment not found");
  if (payment.status === "refunded") throw new Error("Already refunded");

  // Process refund via Razorpay
  const refund = await razorpay.payments.refund(
    payment.razorpayPaymentId,
    { amount: payment.amount * 100 }
  );

  // Update payment status
  await prisma.payment.update({
    where: { id: paymentId },
    data: { status: "refunded" },
  });

  // Deduct from user's cash balance
  const booking = await prisma.booking.findUnique({
    where: { id: payment.bookingId },
  });

  await prisma.user.update({
    where: { id: booking.requesterId },
    data: { cashBalance: { decrement: payment.amount } },
  });

  return refund;
};