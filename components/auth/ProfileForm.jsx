import { useState } from "react";
import {
  Box,
  Paper,
  Grid,
  Typography,
  TextField,
  Button,
  Stack,
  InputAdornment,
  IconButton,
} from "@mui/material";
import {
  EmailRounded,
  LockRounded,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import logo from "../../assets/LOGO.png";
import sideImage from "../../assets/images/logo1.jpeg";

export default function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    login({ name: "Shiwani", email });
    navigate("/dashboard");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        py: 4,
        position: "relative",

        backgroundImage: `url(${logo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(255,255,255,0.6)",
          backdropFilter: "blur(6px)",
          zIndex: 0,
        }}
      />

      {/* Main Card */}
      <Box sx={{ position: "relative", zIndex: 1, width: "100%" }}>
        <Paper
          elevation={0}
          sx={{
            maxWidth: 1000,
            mx: "auto",
            borderRadius: "30px",
            overflow: "hidden",
            background: "rgba(255,255,255,0.6)",
            backdropFilter: "blur(14px)",
            border: "1px solid rgba(255,255,255,0.5)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
          }}
        >
          <Grid container>
            {/* LEFT IMAGE */}
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                justifyContent: "center",
                p: 4,
                background: "rgba(255,255,255,0.4)",
              }}
            >
              <Box
                component="img"
                src={sideImage}
                alt="Login"
                sx={{
                  width: "100%",
                  maxWidth: 300,
                }}
              />
            </Grid>

            {/* RIGHT FORM */}
            <Grid item xs={12} md={7}>
              <Box sx={{ p: { xs: 3, md: 6 } }}>
                <Typography
                  variant="h3"
                  fontWeight={800}
                  sx={{ color: "#2d2a32", mb: 1 }}
                >
                  Welcome Back
                </Typography>

                <Typography
                  sx={{ color: "#555", mb: 4, fontWeight: 500 }}
                >
                  Login to your account
                </Typography>

                <Stack spacing={3}>
                  {/* EMAIL */}
                  <TextField
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailRounded />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "20px",
                        backgroundColor: "rgba(255,255,255,0.85)",
                      },
                    }}
                  />

                  {/* PASSWORD */}
                  <TextField
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockRounded />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "20px",
                        backgroundColor: "rgba(255,255,255,0.85)",
                      },
                    }}
                  />

                  {/* FORGOT */}
                  <Typography
                    sx={{
                      color: "#666",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    Forgot password?
                  </Typography>

                  {/* BUTTON */}
                  <Button
                    onClick={handleLogin}
                    fullWidth
                    sx={{
                      py: 1.5,
                      borderRadius: "25px",
                      backgroundColor: "#cdb4db",
                      color: "#fff",
                      fontWeight: 700,
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "#bfa2d2",
                      },
                    }}
                  >
                    Login
                  </Button>

                  {/* REGISTER */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: 2,
                    }}
                  >
                    <Typography sx={{ color: "#444", fontWeight: 600 }}>
                      Don’t have an account?
                    </Typography>

                    <Button
                      component={Link}
                      to="/register"
                      sx={{
                        backgroundColor: "#f9c4d9",
                        color: "#fff",
                        borderRadius: "20px",
                        px: 3,
                        fontWeight: 700,
                        "&:hover": {
                          backgroundColor: "#f4b0cc",
                        },
                      }}
                    >
                      Sign Up
                    </Button>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
}