const mongoose = require("mongoose");

const disputeSchema = new mongoose.Schema(
  {
    raisedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    transaction: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Transaction",
      required: true,
    },
    reason: {
      type: String,
      required: true, // Why is the user disputing?
    },
    status: {
      type: String,
      enum: ["open", "under_review", "resolved", "rejected"],
      default: "open",
    },
    resolution: {
      type: String, // Admin notes on how it was resolved
      default: "",
    },
    refundAmount: {
      type: Number,
      default: 0, // How much was refunded (if any)
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Dispute", disputeSchema);