const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Links to the User model
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      default: "INR",
    },
    type: {
      type: String,
      enum: ["credit", "debit"], // Only these two values allowed
      required: true,
    },
    method: {
      type: String,
      enum: ["cash", "credits", "hybrid"], // How was it paid?
      default: "cash",
    },
    status: {
      type: String,
      enum: ["pending", "success", "failed", "refunded"],
      default: "pending",
    },
    razorpayOrderId: {
      type: String, // Stored after creating Razorpay order
    },
    razorpayPaymentId: {
      type: String, // Stored after payment is verified
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Transaction", transactionSchema);