import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import HomeRepairServiceRoundedIcon from "@mui/icons-material/HomeRepairServiceRounded";
import BookOnlineRoundedIcon from "@mui/icons-material/BookOnlineRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

export const sidebarWidth = 290;

export default function Sidebar({ type = "user" }) {
  const navigate = useNavigate();
  const location = useLocation();

  const userMenu = [
    { icon: <DashboardRoundedIcon />, label: "Dashboard", path: "/user/dashboard" },
    { icon: <PersonRoundedIcon />, label: "Profile", path: "/user/profile" },
    { icon: <HomeRepairServiceRoundedIcon />, label: "Browse Services", path: "/services" },
    { icon: <BookOnlineRoundedIcon />, label: "Bookings", path: "/bookings" },
    { icon: <AccountBalanceWalletRoundedIcon />, label: "Wallet", path: "/wallet" },
    { icon: <ChatRoundedIcon />, label: "Chat", path: "/chat" },
  ];

  const providerMenu = [
    { icon: <DashboardRoundedIcon />, label: "Dashboard", path: "/provider/dashboard" },
    { icon: <PersonRoundedIcon />, label: "Profile", path: "/provider/profile" },
    { icon: <StorefrontRoundedIcon />, label: "My Services", path: "/provider/services" },
    { icon: <AddCircleRoundedIcon />, label: "Create Service", path: "/provider/create" },
    { icon: <BookOnlineRoundedIcon />, label: "Bookings", path: "/provider/bookings" },
    { icon: <PaymentsRoundedIcon />, label: "Earnings", path: "/provider/earnings" },
    { icon: <ChatRoundedIcon />, label: "Chat", path: "/provider/chat" },
    { icon: <SettingsRoundedIcon />, label: "Settings", path: "/provider/settings" },
  ];

  const adminMenu = [
    { icon: <DashboardRoundedIcon />, label: "Dashboard", path: "/admin" },
    { icon: <GroupRoundedIcon />, label: "Users", path: "/admin/users" },
    { icon: <HomeRepairServiceRoundedIcon />, label: "Services", path: "/admin/services" },
    { icon: <BookOnlineRoundedIcon />, label: "Bookings", path: "/admin/bookings" },
    { icon: <PaymentsRoundedIcon />, label: "Payments", path: "/admin/payments" },
    { icon: <ChatRoundedIcon />, label: "Support", path: "/admin/support" },
  ];

  const menuMap = {
    user: userMenu,
    provider: providerMenu,
    admin: adminMenu,
  };

  const menuItems = menuMap[type] || userMenu;

  return (
    <Box
      sx={{
        width: sidebarWidth,
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        p: 2.2,
        zIndex: 20,
        overflowY: "auto",
        bgcolor: "rgba(255,255,255,0.74)",
        backdropFilter: "blur(18px)",
        borderRight: "1px solid #EEE6F5",
        boxShadow: "10px 0 30px rgba(120,100,160,0.06)",
      }}
    >
      <Typography
        sx={{
          fontSize: "2.3rem",
          fontWeight: 900,
          color: "#5B4B8A",
          px: 1,
          pt: 2,
          pb: 3,
          letterSpacing: "-0.8px",
        }}
      >
        SkillSwap
      </Typography>

      <Stack spacing={1.2}>
        {menuItems.map((item, index) => {
          const isActive =
            location.pathname === item.path ||
            (item.path !== "/" && location.pathname.startsWith(item.path + "/"));

          return (
            <Box
              key={index}
              onClick={() => navigate(item.path)}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.6,
                px: 2,
                py: 1.55,
                borderRadius: "22px",
                cursor: "pointer",
                color: isActive ? "#6B4FD3" : "#645C78",
                bgcolor: isActive ? "#E9DFFC" : "transparent",
                fontWeight: isActive ? 700 : 500,
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: "#F3ECFB",
                  color: "#6B4FD3",
                  transform: "translateX(4px)",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>{item.icon}</Box>
              <Typography sx={{ fontSize: "1rem" }}>{item.label}</Typography>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
}