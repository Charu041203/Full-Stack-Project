const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");

// Create a Razorpay order
router.post("/create-order", paymentController.createOrder);

// Verify payment and store in DB
router.post("/verify", paymentController.verifyAndStore);

// Refund a payment
router.post("/refund", paymentController.refund);

// Razorpay webhook
router.post("/webhook", paymentController.webhook);

module.exports = router;
