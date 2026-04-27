import { Paper, Typography, Box, Stack } from "@mui/material";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";

export default function WalletBalanceCard() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 5,
        background: "linear-gradient(135deg, #fdf4ff 0%, #eef7ff 100%)",
        border: "1px solid #ebe2f3",
        boxShadow: "0 8px 20px rgba(0,0,0,0.03)",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography
            variant="body1"
            sx={{ color: "#7A708A", fontWeight: 600, mb: 1 }}
          >
            Current Balance
          </Typography>

          <Typography
            variant="h3"
            fontWeight={700}
            sx={{ color: "#5C5470" }}
          >
            250 Credits
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "#8c819b", mt: 1 }}
          >
            Use credits for bookings and hybrid payments
          </Typography>
        </Box>

        <Box
          sx={{
            width: 72,
            height: 72,
            borderRadius: 4,
            backgroundColor: "#ffffffaa",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#7b6d8d",
          }}
        >
          <AccountBalanceWalletRoundedIcon sx={{ fontSize: 34 }} />
        </Box>
      </Stack>
    </Paper>
  );
}