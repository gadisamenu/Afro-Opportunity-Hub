import React from "react";
import { Stack, Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import SignupForm from "../components/Forms/SignupForm.js";
import { useNavigate } from "react-router-dom";
import SignupPic from "../../../assets/signup.jpg";
import Logo from "../../../assets/logo.png";
import Header from "../../../components/Header.js";

const SignupPage = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();

  return (
    <Stack
      sx={{
        flexDirection: { xs: "column", md: "row-reverse" },
        height: "100vh",
        position: "relative",
      }}
    >
      {isMatch ? (
        <Header />
      ) : (
        <Box
          onClick={() => {
            navigate("/");
          }}
          component="img"
          alt="logo"
          src={Logo}
          sx={{
            width: "50px",
            height: "50px",
            "&:hover": {
              cursor: "pointer",
            },
            position: "absolute",
            left: { xs: "80vw", md: "50px" },
            top: "30px",
          }}
        ></Box>
      )}

      <Box
        sx={{
          flex: "50",
          background: "rgba(230, 243, 255, 0.75)",
          height: "100vh",
          display: { xs: "none", md: "block" },
          position: "relative",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Box
            component="img"
            alt="signup"
            src={SignupPic}
            sx={{
              width: "100%",
              height: "100%",
              filter: "brightness(0.5) opacity(1)",
            }}
          ></Box>
        </Box>

        <Stack
          sx={{
            position: "absolute",
            top: "0",
            bottom: "0",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            gap: "20px",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{ color: "white", fontWeight: "bold" }}
          >
            Join the Afro Opportunity Hub
          </Typography>
          <Typography variant="h6" sx={{ color: "white", textAlign: "center" }}>
            Find the perfect internship or scholarship opportunity to advance
            your career <br /> and build your skills.
          </Typography>
        </Stack>
      </Box>
      <Stack
        sx={{
          flex: "50",
          justifyContent: "center",
          alignItems: "center",
          //   border: "3px solid green",
          marginTop: "100px",
        }}
      >
        <Stack
          sx={{
            margin: { xs: "120px 30px 30px", md: "30px" },
            width: { xs: "90%", sm: "70%", md: "80%", lg: "65%" },
            gap: "30px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 600,
              lineHeight: "59px",
              color: "#000000",
              textAlign: "center",
              fontSize: { xs: "36px", md: "42px", lg: "44px" },
            }}
          >
            Create Your Account
          </Typography>

          <SignupForm />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SignupPage;
