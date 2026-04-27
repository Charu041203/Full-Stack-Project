import { Box, Paper, Typography } from "@mui/material";

export default function MessageBubble({ message, mine }) {
  return (
    <Box
      display="flex"
      justifyContent={mine ? "flex-end" : "flex-start"}
      mb={1.5}
    >
      <Paper
        elevation={0}
        sx={{
          px: 2,
          py: 1.5,
          maxWidth: "70%",
          borderRadius: 4,
          backgroundColor: mine ? "#ead7f7" : "#fff7fb",
          border: "1px solid #f0e5f5",
        }}
      >
        <Typography sx={{ color: "#5C5470", lineHeight: 1.7 }}>
          {message}
        </Typography>
      </Paper>
    </Box>
  );
}