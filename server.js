const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");

// Load environment variables from .env file
dotenv.config();

// Connect to PostgreSQL
connectDB();

const app = express();

// This lets your server understand JSON data sent from frontend
app.use(express.json());

// Routes
const paymentRoutes = require("./routes/paymentRoutes");
const walletRoutes = require("./routes/walletRoutes");

app.use("/api/payments", paymentRoutes);
app.use("/api/wallet", walletRoutes);

// Test route — just to check server is running
app.get("/", (req, res) => {
  res.send("Server is running!");
});


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Start background jobs
require("./utils/cronJobs");