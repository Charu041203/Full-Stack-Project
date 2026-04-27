const { prisma } = require("../config/db");

// Add cash to user's wallet
exports.addCashBalance = async (userId, amount) => {
  const user = await prisma.user.update({
    where: { id: userId },
    data: { cashBalance: { increment: amount } },
  });
  return user;
};

// Add credits to user's wallet
exports.addCreditBalance = async (userId, credits) => {
  const user = await prisma.user.update({
    where: { id: userId },
    data: { creditBalance: { increment: credits } },
  });
  return user;
};

// Get current wallet balance
exports.getBalance = async (userId) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      cashBalance: true,
      creditBalance: true,
    },
  });
  if (!user) throw new Error("User not found");
  return user;
};

// Hybrid payment — use credits first, then cash for the rest
exports.hybridDeduct = async (userId, totalAmount) => {
  // Step 1 — Find the user
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });
  if (!user) throw new Error("User not found");

  // Step 2 — Calculate how much credits and cash to use
  let creditsToUse = 0;
  let cashToUse = 0;

  if (user.creditBalance >= totalAmount) {
    // User has enough credits to pay everything
    creditsToUse = totalAmount;
    cashToUse = 0;
  } else {
    // Use all credits first, pay remaining with cash
    creditsToUse = user.creditBalance;
    cashToUse = totalAmount - creditsToUse;
  }

  // Step 3 — Check if user has enough cash for the remainder
  if (user.cashBalance < cashToUse) {
    throw new Error("Insufficient balance");
  }

  // Step 4 — Deduct balances and create ledger entry together
  const [updatedUser, ledgerEntry] = await prisma.$transaction([
    // Deduct credits and cash from user
    prisma.user.update({
      where: { id: userId },
      data: {
        creditBalance: { decrement: creditsToUse },
        cashBalance: { decrement: cashToUse },
      },
    }),
    // Record the credit deduction in ledger
    prisma.creditLedger.create({
      data: {
        userId,
        amount: creditsToUse,
        type: "debit",
      },
    }),
  ]);

  // Step 5 — Return everything
  return {
    updatedUser,
    ledgerEntry,
    creditsUsed: creditsToUse,
    cashUsed: cashToUse,
  };
};