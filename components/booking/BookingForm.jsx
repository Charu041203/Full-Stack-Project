import { Paper, Stack, Typography, MenuItem } from "@mui/material";
import InputField from "../common/InputField";
import Button from "../common/Button";

export default function BookingForm() {
  return (
    <Paper sx={{ p: 4, maxWidth: 600 }}>
      <Typography variant="h6" mb={2}>
        Booking Form
      </Typography>

      <Stack spacing={2}>
        <InputField
          label="Select Date"
          type="date"
          InputLabelProps={{ shrink: true }}
        />

        <InputField select label="Time Slot" defaultValue="10:00 AM">
          <MenuItem value="10:00 AM">10:00 AM</MenuItem>
          <MenuItem value="12:00 PM">12:00 PM</MenuItem>
          <MenuItem value="03:00 PM">03:00 PM</MenuItem>
        </InputField>

        <InputField select label="Payment Mode" defaultValue="cash">
          <MenuItem value="cash">Cash</MenuItem>
          <MenuItem value="credits">Credits</MenuItem>
          <MenuItem value="hybrid">Hybrid</MenuItem>
        </InputField>

        <Button>Confirm Booking</Button>
      </Stack>
    </Paper>
  );
}