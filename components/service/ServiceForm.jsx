import { Paper, Stack, Typography } from "@mui/material";
import InputField from "../common/InputField";
import Button from "../common/Button";

export default function ServiceForm({ title = "Create Service" }) {
  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h6" mb={2}>{title}</Typography>
      <Stack spacing={2}>
        <InputField label="Service Title" />
        <InputField label="Description" multiline rows={4} />
        <InputField label="Cash Rate" type="number" />
        <InputField label="Credit Rate" type="number" />
        <Button>Save Service</Button>
      </Stack>
    </Paper>
  );
}