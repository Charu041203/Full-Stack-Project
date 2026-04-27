import { Card, CardContent, Typography, Chip, Stack } from "@mui/material";

export default function BookingCard({ booking }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{booking.service}</Typography>
        <Typography color="text.secondary" mb={1}>
          {booking.date}
        </Typography>

        <Stack direction="row" spacing={1}>
          <Chip label={booking.status} color="primary" />
          <Chip label={booking.paymentMode} variant="outlined" />
        </Stack>
      </CardContent>
    </Card>
  );
}