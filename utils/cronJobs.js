const cron = require("node-cron");
const { prisma } = require("../config/db");

// Runs every day at midnight
// Updates trust score based on user activity
cron.schedule("0 0 * * *", async () => {
  console.log("Running trust score update job...");
  try {
    const users = await prisma.user.findMany();
    for (const user of users) {
      // Simple trust score logic — adjust as needed
      await prisma.user.update({
        where: { id: user.id },
        data: {
          trustScore: Math.min(100, user.trustScore + 1),
        },
      });
    }
    console.log("Trust score update complete ✅");
  } catch (err) {
    console.error("Trust score job error:", err.message);
  }
});

// Runs every hour
// Fraud scan — flags users with suspicious activity
cron.schedule("0 * * * *", async () => {
  console.log("Running fraud scan job...");
  try {
    // Find users with very low trust score
    await prisma.user.updateMany({
      where: { trustScore: { lt: 20 } },
      data: { isFlagged: true },
    });
    console.log("Fraud scan complete ✅");
  } catch (err) {
    console.error("Fraud scan job error:", err.message);
  }
});
