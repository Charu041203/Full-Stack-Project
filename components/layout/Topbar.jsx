import React from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, logoutUser } from "../../utils/auth";

export default function Topbar() {
  const navigate = useNavigate();
  const user = getCurrentUser();

  const basePath = user?.role === "provider" ? "/provider" : "/user";

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <div
      style={{
        background: "#fff",
        padding: "20px 28px",
        borderRadius: "24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "24px",
      }}
    >
      <h2 style={{ margin: 0, color: "#5b3f93" }}>
        Hi, {user?.name || "User"}
      </h2>

      <div style={{ display: "flex", gap: "18px", alignItems: "center" }}>
        <button onClick={() => navigate(`${basePath}/dashboard`)}>
          Dashboard
        </button>
        <button onClick={() => navigate(`${basePath}/profile`)}>
          Profile
        </button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}