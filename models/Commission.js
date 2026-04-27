const mongoose = require("mongoose");

const commissionSchema = new mongoose.Schema(
  {
    transaction: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Transaction", // Links to the Transaction model
      required: true,
    },
    amount: {
      type: Number,
      required: true, // The actual commission amount in ₹
    },
    rate: {
      type: Number,
      required: true, // e.g. 0.06 means 6%
    },
    status: {
      type: String,
      enum: ["pending", "settled"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Commission", commissionSchema);