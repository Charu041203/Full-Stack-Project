import { useState } from "react";
import { Stack, TextField, Button } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

export default function MessageInput({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!message.trim()) return;

    onSend(message);
    setMessage("");
  };

  return (
    <Stack direction="row" spacing={1.5}>
      <TextField
        fullWidth
        size="small"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 4,
            backgroundColor: "#fff",
          },
        }}
      />

      <Button
        variant="contained"
        endIcon={<SendRoundedIcon />}
        onClick={handleSubmit}
        sx={{
          borderRadius: 4,
          px: 2.5,
          backgroundColor: "#cdb4db",
          textTransform: "none",
          fontWeight: 600,
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#bfa2d2",
            boxShadow: "none",
          },
        }}
      >
        Send
      </Button>
    </Stack>
  );
}