import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Button,
  Avatar,
  Box,
} from "@mui/material";

import CleaningServicesRoundedIcon from "@mui/icons-material/CleaningServicesRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import { useNavigate } from "react-router-dom";

export default function ServiceCard({ service }) {
  const navigate = useNavigate();

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 5,
        border: "1px solid #E9D5FF",
        background: "linear-gradient(135deg,#FDF4FF,#ECFEFF)",
        boxShadow: "0 10px 25px rgba(167,139,250,0.10)",
        transition: "all 0.35s ease",
        overflow: "hidden",

        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 18px 35px rgba(167,139,250,0.18)",
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Avatar
            sx={{
              bgcolor: "#F3E8FF",
              color: "#6D28D9",
              width: 54,
              height: 54,
            }}
          >
            <CleaningServicesRoundedIcon />
          </Avatar>

          <Chip
            label={service.category || "Home Service"}
            sx={{
              backgroundColor: "#fff",
              color: "#7C3AED",
              fontWeight: 700,
              border: "1px solid #DDD6FE",
            }}
          />
        </Stack>

        <Typography
          variant="h5"
          fontWeight={700}
          sx={{
            color: "#1F2937",
            mb: 1,
          }}
        >
          {service.title}
        </Typography>

        <Typography
          sx={{
            color: "#6B7280",
            mb: 2.5,
            lineHeight: 1.7,
            minHeight: 60,
          }}
        >
          {service.description}
        </Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
          <Chip
            icon={<PaidRoundedIcon />}
            label={`₹${service.cashRate || 300}`}
            sx={{
              backgroundColor: "#FFF7ED",
              fontWeight: 700,
            }}
          />

          <Chip
            icon={<AccessTimeRoundedIcon />}
            label={`${service.creditRate || 2} Credits`}
            sx={{
              backgroundColor: "#EEF2FF",
              fontWeight: 700,
            }}
          />
        </Stack>

        {service.date && (
          <Box
            sx={{
              p: 1.5,
              mb: 2,
              borderRadius: 3,
              backgroundColor: "#F5F3FF",
            }}
          >
            <Typography
              variant="body2"
              fontWeight={600}
              sx={{ color: "#6D28D9" }}
            >
              📅 {service.date} • ⏰ {service.time}
            </Typography>
          </Box>
        )}

        <Button
          fullWidth
          variant="contained"
          endIcon={<ArrowForwardRoundedIcon />}
          onClick={() => navigate(`/services/${service.id}`)}
          sx={{
            mt: 1,
            borderRadius: 3,
            py: 1.2,
            textTransform: "none",
            fontWeight: 700,
            background: "linear-gradient(90deg,#A78BFA,#F472B6)",

            "&:hover": {
              background: "linear-gradient(90deg,#8B5CF6,#EC4899)",
            },
          }}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}