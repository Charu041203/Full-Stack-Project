import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export default function TimeSlotPicker() {
  return (
    <FormControl fullWidth>
      <InputLabel>Time Slot</InputLabel>
      <Select label="Time Slot" defaultValue="10:00 AM">
        <MenuItem value="10:00 AM">10:00 AM</MenuItem>
        <MenuItem value="12:00 PM">12:00 PM</MenuItem>
        <MenuItem value="03:00 PM">03:00 PM</MenuItem>
      </Select>
    </FormControl>
  );
}