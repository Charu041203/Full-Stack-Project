import React from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, logoutUser } from "../../utils/auth";
import UserSidebar, { userSidebarWidth } from "./UserSidebar";
import ProviderSidebar, { providerSidebarWidth } from "./ProviderSidebar";

export default function DashboardShell({ role, title, subtitle, children }) {
  const navigate = useNavigate();
  const user = getCurrentUser();

  const sidebar =
    role === "provider" ? <ProviderSidebar /> : <UserSidebar />;

  const sidebarWidth =
    role === "provider" ? providerSidebarWidth : userSidebarWidth;

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #fdf7ff 0%, #f5f2ff 35%, #eef4ff 100%)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {sidebar}

      <div
        style={{
          width: `calc(100% - ${sidebarWidth}px)`,
          padding: "24px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.75)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(255,255,255,0.6)",
            borderRadius: "26px",
            boxShadow: "0 16px 50px rgba(108,76,207,0.12)",
            padding: "22px 26px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
            marginBottom: "22px",
          }}
        >
          <div>
            <h1 style={{ margin: 0, color: "#4e3794" }}>{title}</h1>
            <p style={{ margin: "8px 0 0", color: "#776aa1" }}>{subtitle}</p>
          </div>

          <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
            <div
              style={{
                padding: "12px 16px",
                borderRadius: "16px",
                background: "#f7f2ff",
                color: "#654ab5",
                fontWeight: 700,
              }}
            >
              {user?.name || "User"}
            </div>

            <button
              onClick={handleLogout}
              style={{
                border: "none",
                padding: "12px 18px",
                borderRadius: "16px",
                background: "linear-gradient(135deg, #a986ff, #6c4ccf)",
                color: "#fff",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </div>
        </div>

        {children}
      </div>
    </div>
  );
}