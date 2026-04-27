import { useState } from "react";
import { Paper, Typography, Box, Avatar, Stack } from "@mui/material";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";

export default function ChatWindow() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello, is this service available tomorrow?", mine: false },
    { id: 2, text: "Yes, 10 AM is available.", mine: true },
  ]);

  const getAIReply = (message) => {
    const msg = message.toLowerCase();

    if (msg.includes("hello") || msg.includes("hi")) {
      return "Hello! How can I help you with your booking today?";
    }
    if (msg.includes("available")) {
      return "Yes, the service is available. Please tell me your preferred date and time.";
    }
    if (msg.includes("book")) {
      return "Sure! You can confirm your booking from the booking page.";
    }
    if (msg.includes("price") || msg.includes("cost")) {
      return "The service price depends on the category. You can check the details on the service page.";
    }
    if (msg.includes("thanks")) {
      return "You're welcome! Let me know if you need anything else.";
    }

    return "I understand. Please share more details so I can help you better.";
  };

  const handleSend = (newMessage) => {
    if (!newMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: newMessage,
      mine: true,
    };

    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const aiReply = {
        id: Date.now() + 1,
        text: getAIReply(newMessage),
        mine: false,
      };

      setMessages((prev) => [...prev, aiReply]);
    }, 700);
  };

  return (
    <Paper
      elevation={0}
      sx={{
        p: 2.5,
        minHeight: 500,
        borderRadius: 5,
        border: "1px solid #eee4f3",
        boxShadow: "0 8px 20px rgba(0,0,0,0.03)",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Stack
        direction="row"
        spacing={1.5}
        alignItems="center"
        sx={{
          pb: 2,
          borderBottom: "1px solid #f1e8ef",
        }}
      >
        <Avatar
          sx={{
            bgcolor: "#ead7f7",
            color: "#5c5470",
            fontWeight: 700,
          }}
        >
          AI
        </Avatar>

        <Box>
          <Typography sx={{ color: "#5C5470", fontWeight: 700 }}>
            Service Assistant
          </Typography>
          <Typography variant="body2" sx={{ color: "#7A708A" }}>
            Online now
          </Typography>
        </Box>
      </Stack>

      <Box
        sx={{
          flexGrow: 1,
          py: 1,
          overflowY: "auto",
          maxHeight: 380,
        }}
      >
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg.text} mine={msg.mine} />
        ))}
      </Box>

      <MessageInput onSend={handleSend} />
    </Paper>
  );
}