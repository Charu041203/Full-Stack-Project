const express = require("express");
const router = express.Router();
const walletController = require("../controllers/walletController");

// Get wallet balance
router.get("/balance/:userId", walletController.getBalance);

// Add cash balance
router.post("/add-cash", walletController.addCash);

// Add credits
router.post("/add-credits", walletController.addCredits);

// Hybrid payment
router.post("/pay", walletController.hybridPay);

module.exports = router;