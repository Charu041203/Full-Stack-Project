import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export default function PaymentModeSelector() {
  return (
    <FormControl fullWidth>
      <InputLabel>Payment Mode</InputLabel>
      <Select label="Payment Mode" defaultValue="cash">
        <MenuItem value="cash">Cash</MenuItem>
        <MenuItem value="credits">Credits</MenuItem>
        <MenuItem value="hybrid">Hybrid</MenuItem>
      </Select>
    </FormControl>
  );
}