import { Paper, Stack, MenuItem } from "@mui/material";
import InputField from "../common/InputField";

export default function ServiceFilters() {
  return (
    <Paper sx={{ p: 2, mb: 3 }}>
      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
        <InputField label="Search service" size="small" />
        <InputField select label="Category" defaultValue="all" size="small">
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="cleaning">Cleaning</MenuItem>
          <MenuItem value="repair">Repair</MenuItem>
        </InputField>
      </Stack>
    </Paper>
  );
}