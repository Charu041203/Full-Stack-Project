const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    creditBalance: {
      type: Number,
      default: 0, // Credits earned by giving time (not purchasable)
    },
    cashBalance: {
      type: Number,
      default: 0, // Real money balance (via Razorpay)
    },
    trustScore: {
      type: Number,
      default: 100, // Starts at 100, updated by background jobs
    },
    isFlagged: {
      type: Boolean,
      default: false, // Fraud detection flag
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

module.exports = mongoose.model("User", userSchema);