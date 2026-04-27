import { AppBar, Toolbar, Typography, Box, Button, Avatar } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#ead7f7",
        color: "#5c5470",
        boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
        borderBottom: "1px solid #e8dff1",
        zIndex: 1201,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight="bold">
          Service Marketplace
        </Typography>

        <Box display="flex" alignItems="center" gap={1.5}>
          {user && (
            <>
              <Avatar
                sx={{
                  width: 34,
                  height: 34,
                  bgcolor: "#cdb4db",
                  color: "#4b4453",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                {user.name?.charAt(0)?.toUpperCase() || "U"}
              </Avatar>

              <Typography
                variant="body2"
                sx={{ color: "#6d6875", mr: 1, fontWeight: 500 }}
              >
                Hi, {user.name}
              </Typography>
            </>
          )}

          <Button
            color="inherit"
            component={Link}
            to="/dashboard"
            sx={{
              textTransform: "none",
              borderRadius: 3,
              px: 2,
              color: "#5c5470",
              fontWeight: 600,
            }}
          >
            Dashboard
          </Button>

          <Button
            color="inherit"
            component={Link}
            to="/profile"
            sx={{
              textTransform: "none",
              borderRadius: 3,
              px: 2,
              color: "#5c5470",
              fontWeight: 600,
            }}
          >
            Profile
          </Button>

          <Button
            onClick={handleLogout}
            sx={{
              textTransform: "none",
              borderRadius: 3,
              px: 2.2,
              backgroundColor: "#ffdce5",
              color: "#5c5470",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#fbcfd8",
              },
            }}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}