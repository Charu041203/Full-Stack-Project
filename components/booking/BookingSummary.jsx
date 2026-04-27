import { Paper, Typography, Stack } from "@mui/material";

export default function BookingSummary() {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" mb={2}>Booking Summary</Typography>
      <Stack spacing={1}>
        <Typography>Service: Home Cleaning</Typography>
        <Typography>Date: 12 Apr 2026</Typography>
        <Typography>Time: 10:00 AM</Typography>
        <Typography>Payment: Hybrid</Typography>
      </Stack>
    </Paper>
  );
}