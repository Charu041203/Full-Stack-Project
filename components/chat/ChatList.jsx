import {
  Paper,
  List,
  ListItemButton,
  Typography,
  Avatar,
  Box,
  Stack,
} from "@mui/material";

const chats = [
  { id: 1, name: "Rohit Sharma", lastMessage: "Is 10 AM available?", initial: "R" },
  { id: 2, name: "Anjali Verma", lastMessage: "I will reach by noon.", initial: "A" },
  { id: 3, name: "Surbhi", lastMessage: "Your booking is confirmed.", initial: "S" },
];

export default function ChatList() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        borderRadius: 5,
        border: "1px solid #eee4f3",
        boxShadow: "0 8px 20px rgba(0,0,0,0.03)",
        height: "100%",
      }}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        sx={{ color: "#5C5470", mb: 2 }}
      >
        Chats
      </Typography>

      <List sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {chats.map((chat) => (
          <ListItemButton
            key={chat.id}
            sx={{
              borderRadius: 4,
              alignItems: "flex-start",
              "&:hover": {
                backgroundColor: "#faf5ff",
              },
            }}
          >
            <Stack direction="row" spacing={1.5} alignItems="center" width="100%">
              <Avatar
                sx={{
                  bgcolor: "#ead7f7",
                  color: "#5c5470",
                  fontWeight: 700,
                }}
              >
                {chat.initial}
              </Avatar>

              <Box>
                <Typography sx={{ color: "#5C5470", fontWeight: 600 }}>
                  {chat.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "#7A708A" }}>
                  {chat.lastMessage}
                </Typography>
              </Box>
            </Stack>
          </ListItemButton>
        ))}
      </List>
    </Paper>
  );
}