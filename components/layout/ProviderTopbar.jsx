import React from "react";
import { Paper, Typography, Box, Avatar, Button, Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

export default function ProviderTopbar({ title = "Provider Dashboard" }) {
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem("user")) || {
    name: "Provider",
    role: "provider",
    profileImage: "",
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <Paper
      elevation={0}
      sx={{
        mb: 3,
        px: 3,
        py: 2.2,
        borderRadius: "32px",
        bgcolor: "rgba(255,255,255,0.76)",
        backdropFilter: "blur(18px)",
        border: "1px solid #EEE6F5",
        boxShadow: "0 12px 26px rgba(150,120,180,0.06)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "1.8rem", md: "2.2rem" },
            fontWeight: 900,
            color: "#514074",
            letterSpacing: "-0.7px",
          }}
        >
          {title}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
          <Box sx={{ textAlign: "center" }}>
            <Avatar
              src={storedUser.profileImage || ""}
              sx={{
                width: 54,
                height: 54,
                mx: "auto",
                mb: 0.5,
                bgcolor: "#CDB5F1",
                color: "#4B3F63",
                fontWeight: 800,
                fontSize: "1.3rem",
              }}
            >
              {!storedUser.profileImage
                ? (storedUser.name || "P").charAt(0).toUpperCase()
                : ""}
            </Avatar>

            <Typography sx={{ color: "#665B83", fontSize: "0.96rem" }}>
              Hi, {storedUser.name || "Provider"}
            </Typography>
          </Box>

          <Chip
            label="Provider"
            sx={{
              bgcolor: "#F3E8FF",
              color: "#6B4FD3",
              fontWeight: 700,
            }}
          />

          <Button
            onClick={() => navigate("/provider/dashboard")}
            sx={{
              color: "#4F4662",
              textTransform: "none",
              fontWeight: 700,
              fontSize: "1rem",
            }}
          >
            Dashboard
          </Button>

          <Button
            onClick={() => navigate("/provider/profile")}
            sx={{
              color: "#4F4662",
              textTransform: "none",
              fontWeight: 700,
              fontSize: "1rem",
            }}
          >
            Profile
          </Button>

          <Button
            variant="contained"
            startIcon={<LogoutRoundedIcon />}
            onClick={handleLogout}
            sx={{
              bgcolor: "#F2C8D0",
              color: "#5A4452",
              textTransform: "none",
              fontWeight: 700,
              borderRadius: "18px",
              px: 3,
              py: 1.15,
              boxShadow: "none",
              "&:hover": {
                bgcolor: "#EBBBC6",
              },
            }}
          >
            Logout
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}