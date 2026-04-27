const walletService = require("../services/walletService");

// GET /api/wallet/balance/:userId
// Get the current wallet balance of a user
exports.getBalance = async (req, res) => {
  try {
    const { userId } = req.params; // Get userId from URL
    const balance = await walletService.getBalance(userId);
    res.json(balance);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /api/wallet/add-cash
// Add cash balance after Razorpay payment
exports.addCash = async (req, res) => {
  try {
    const { userId, amount } = req.body; // Get data from request body

    // Basic validation
    if (!userId || !amount) {
      return res.status(400).json({ error: "userId and amount are required" });
    }
    if (amount <= 0) {
      return res.status(400).json({ error: "Amount must be greater than 0" });
    }

    const user = await walletService.addCashBalance(userId, amount);
    res.json({
      success: true,
      message: "Cash added successfully",
      cashBalance: user.cashBalance,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /api/wallet/add-credits
// Add credits when user gives their time
exports.addCredits = async (req, res) => {
  try {
    const { userId, credits } = req.body;

    if (!userId || !credits) {
      return res.status(400).json({ error: "userId and credits are required" });
    }
    if (credits <= 0) {
      return res.status(400).json({ error: "Credits must be greater than 0" });
    }

    const user = await walletService.addCreditBalance(userId, credits);
    res.json({
      success: true,
      message: "Credits added successfully",
      creditBalance: user.creditBalance,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /api/wallet/pay
// Hybrid payment — uses credits first, then cash
exports.hybridPay = async (req, res) => {
  try {
    const { userId, amount } = req.body;

    if (!userId || !amount) {
      return res.status(400).json({ error: "userId and amount are required" });
    }
    if (amount <= 0) {
      return res.status(400).json({ error: "Amount must be greater than 0" });
    }

    const result = await walletService.hybridDeduct(userId, amount);
 res.json({
  success: true,
  message: "Payment successful",
  creditsUsed: result.creditsUsed,
  cashUsed: result.cashUsed,
  ledgerEntryId: result.ledgerEntry.id,  // ✅ fixed
});
  } catch (err) {
    // Handle insufficient balance specifically
    if (err.message === "Insufficient balance") {
      return res.status(400).json({ error: "Insufficient balance" });
    }
    res.status(500).json({ error: err.message });
  }
};