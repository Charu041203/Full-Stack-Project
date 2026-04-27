import React from "react";
import { NavLink } from "react-router-dom";

export const sidebarWidth = 280;
export const userSidebarWidth = 280;

const baseStyle = {
  display: "block",
  padding: "14px 16px",
  borderRadius: "16px",
  textDecoration: "none",
  fontWeight: 700,
  marginBottom: "10px",
};

export default function UserSidebar() {
  return (
    <div
      style={{
        width: sidebarWidth,
        minHeight: "100vh",
        background: "rgba(255,255,255,0.78)",
        borderRight: "1px solid #efe9ff",
        padding: "24px 18px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          fontSize: "28px",
          fontWeight: 800,
          color: "#6c4ccf",
          marginBottom: "24px",
        }}
      >
        SkillSwap
      </div>

      <NavLink
        to="/user/dashboard"
        style={({ isActive }) => ({
          ...baseStyle,
          background: isActive ? "#f3ecff" : "transparent",
          color: "#5e44b1",
        })}
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/user/profile"
        style={({ isActive }) => ({
          ...baseStyle,
          background: isActive ? "#f3ecff" : "transparent",
          color: "#5e44b1",
        })}
      >
        Profile
      </NavLink>

      <NavLink
        to="/user/services"
        style={({ isActive }) => ({
          ...baseStyle,
          background: isActive ? "#f3ecff" : "transparent",
          color: "#5e44b1",
        })}
      >
        Browse Services
      </NavLink>

      <NavLink
        to="/user/bookings"
        style={({ isActive }) => ({
          ...baseStyle,
          background: isActive ? "#f3ecff" : "transparent",
          color: "#5e44b1",
        })}
      >
        Bookings
      </NavLink>

      <NavLink
        to="/user/wallet"
        style={({ isActive }) => ({
          ...baseStyle,
          background: isActive ? "#f3ecff" : "transparent",
          color: "#5e44b1",
        })}
      >
        Wallet
      </NavLink>

      <NavLink
        to="/user/chat"
        style={({ isActive }) => ({
          ...baseStyle,
          background: isActive ? "#f3ecff" : "transparent",
          color: "#5e44b1",
        })}
      >
        Chat
      </NavLink>
    </div>
  );
}