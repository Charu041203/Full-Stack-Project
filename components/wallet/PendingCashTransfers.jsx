import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
  Stack,
} from "@mui/material";

export default function PendingCashTransfers() {
  const pendingTransfers = [
    { id: 1, booking: "Booking #101", amount: "₹400 pending" },
    { id: 2, booking: "Booking #102", amount: "₹250 pending" },
  ];

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 5,
        backgroundColor: "#FFF8FB",
        border: "1px solid #F2E3EA",
        boxShadow: "0 8px 20px rgba(0,0,0,0.03)",
      }}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        sx={{ color: "#5C5470", mb: 2 }}
      >
        Pending Cash Transfers
      </Typography>

      <Stack spacing={2}>
        {pendingTransfers.map((item) => (
          <Paper
            key={item.id}
            elevation={0}
            sx={{
              p: 2,
              borderRadius: 4,
              backgroundColor: "#fff",
              border: "1px solid #f3e7ee",
            }}
          >
            <List disablePadding>
              <ListItem disableGutters>
                <ListItemText
                  primary={item.booking}
                  secondary={item.amount}
                  primaryTypographyProps={{
                    sx: { color: "#5C5470", fontWeight: 600 },
                  }}
                  secondaryTypographyProps={{
                    sx: { color: "#7A708A" },
                  }}
                />
                <Chip
                  label="Pending"
                  size="small"
                  sx={{
                    backgroundColor: "#FFF3D6",
                    color: "#7a5e2c",
                    fontWeight: 600,
                  }}
                />
              </ListItem>
            </List>
          </Paper>
        ))}
      </Stack>
    </Paper>
  );
}