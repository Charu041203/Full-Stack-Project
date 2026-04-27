import React from "react";
import ProviderSidebar, { providerSidebarWidth } from "./ProviderSidebar";
import LOGO from "../../assets/LOGO.png";

const ProviderLayout = ({ children }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8f3ff 0%, #f4efff 45%, #eef3ff 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <img
        src={LOGO}
        alt="SkillSwap Logo Background"
        style={{
          position: "fixed",
          right: "-60px",
          bottom: "-30px",
          width: "500px",
          opacity: 0.07,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "fixed",
          top: "80px",
          right: "120px",
          width: "260px",
          height: "260px",
          borderRadius: "50%",
          background: "rgba(193, 161, 255, 0.18)",
          filter: "blur(90px)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "fixed",
          bottom: "40px",
          left: "350px",
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          background: "rgba(255, 195, 220, 0.18)",
          filter: "blur(90px)",
          zIndex: 0,
        }}
      />

      <ProviderSidebar />

      <div
        style={{
          marginLeft: providerSidebarWidth,
          minHeight: "100vh",
          padding: "22px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ProviderLayout;