import { useEffect, useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Paper,
} from "@mui/material";

import ServiceCard from "./ServiceCard";

export default function ServiceList() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const savedServices =
      JSON.parse(localStorage.getItem("services")) || [];

    setServices(savedServices);
  }, []);

  return (
    <Box
      sx={{
        p: 3,
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#fdf4ff 0%, #f8fafc 45%, #ecfeff 100%)",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 4,
          mb: 4,
          borderRadius: 6,
          background:
            "linear-gradient(135deg,#ede9fe,#fae8ff,#ecfeff)",
          border: "1px solid #E9D5FF",
        }}
      >
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{
            color: "#4C1D95",
            mb: 1,
          }}
        >
          Service Marketplace
        </Typography>

        <Typography
          sx={{
            color: "#6B7280",
          }}
        >
          Browse available services in your neighbourhood.
        </Typography>
      </Paper>

      {services.length === 0 ? (
        <Paper
          elevation={0}
          sx={{
            p: 5,
            textAlign: "center",
            borderRadius: 5,
            backgroundColor: "#FAF5FF",
            border: "1px solid #E9D5FF",
          }}
        >
          <Typography
            variant="h5"
            fontWeight={700}
            sx={{ color: "#7C3AED" }}
          >
            No services found
          </Typography>

          <Typography sx={{ color: "#6B7280", mt: 1 }}>
            Create a service first and it will appear here.
          </Typography>
        </Paper>
      ) : (
        <Grid container spacing={3}>
          {services.map((service) => (
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              key={service.id}
            >
              <ServiceCard service={service} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}