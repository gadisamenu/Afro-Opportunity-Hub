import React from "react";
import Header from "../components/Header";
import TopPic from "../assets/top.png";
import { Box, Stack, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchComponent from "../components/SearchComponent";
import OpportunityList from "../components/OpportunityList";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Stack>
      <Box sx={{ position: "relative" }}>
        <Header />

        <Box
          component="img"
          alt="top curve"
          src={TopPic}
          sx={{ width: "100vw", height: "350px" }}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            top: "250px",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              background:
                "linear-gradient(270.71deg, #FCFCFC 14.22%, #5AD7FE 106.77%) ",
              backgroundClip: "text",
              color: "transparent",
              fontSize: "3rem",
            }}
          >
            {" "}
            Afro Opportunity Hub
          </Typography>
        </Box>

        <Stack
          sx={{
            margin: "30px",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              background:
                "linear-gradient(270.71deg, #1D4ED8 14.22%, #5AD7FE 106.77%)",

              backgroundClip: "text",
              textFillColor: "transparent",
              color: "transparent",
            }}
            variant="h2"
          >
            Fast. Accurate. Reliable
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "1.1rem",
            }}
          >
            The most powerful finance software that connects with your financial
            accounts. Track
            <br /> spending and categorize expenses so you can see where your
            money is going.
          </Typography>

          <Button
            title="Login/Register"
            onClick={() => navigate("/login")}
            sx={{
              background:
                "linear-gradient(79.69deg, #1D4ED8 -0.64%, #5AD7FE 107.84%)",
              borderRadius: "5px",
              height: "40px !important",
              textTransform: "capitalize",
              color: "white",
              fontSize: "1.1rem",
              padding: "5px 15px !important",
              "&:hover": {
                background:
                  "linear-gradient(79.69deg, #1D4ED8 -0.64%, #5AD7FE 87.84%)",
                color: "white",
                transition: "400ms all ease-in",
              },
            }}
          >
            Get Started
          </Button>
        </Stack>

        <SearchComponent />

        <OpportunityList />
      </Box>
    </Stack>
  );
};

export default HomePage;
