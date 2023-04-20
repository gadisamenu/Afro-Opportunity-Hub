import React, { useState } from "react";
import {
  Button,
  Box,
  Stack,
  useMediaQuery,
  useTheme,
  IconButton,
  Typography,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Profile from "./Profile.js";
import Logo from "../assets/headerlogo.svg";
import MenuIcon from "@mui/icons-material/Menu";

import DrawerComponent from "./Drawer.js";

const links = [
  {
    name: "Home",
    path: "/home",
  },
  {
    name: "Saved Opportunities",
    path: "/about",
  },
];

const useStyles = {
  header: {
    zIndex: "10 !important",
    // height: "80px !important",
    display: "flex",
    alignItems: "center !important",
    justifyContent: "space-between !important",
    background: "transparent",
    color: "#f1f1f1",
    width: "80vw",
    margin: "30px auto",
    left: 0,
    right: 0,
  },
  headerLinks: {
    fontFamily: "Inter",
    // fontWeight: 600,
    fontSize: { xs: "20px", lg: "22px" },

    lineHeight: "29px",
    "&:hover": {
      cursor: "pointer",
      color: "white",
      opacity: 0.8,
      transition: "400ms all ease-in",
    },
    color: "black",
  },
  selectedLink: {
    color: "#00B5BE !important",
    borderBottom: "3px solid #00B5BE",
  },
  registerButton: {
    background: "linear-gradient(79.69deg, #1D4ED8 -0.64%, #5AD7FE 107.84%)",
    borderRadius: "5px",
    height: "40px !important",
    textTransform: "capitalize",
    color: "white",
    fontSize: "1.1rem",
    padding: "5px 15px !important",
    "&:hover": {
      background: "linear-gradient(79.69deg, #1D4ED8 -0.64%, #5AD7FE 87.84%)",
      color: "white",
      transition: "400ms all ease-in",
    },
  },
  Mlogo: {
    width: "55px",
    height: "55px",
    ml: { xs: "20px", md: "50px" },
    "&:hover": {
      cursor: "pointer",
    },
  },
  container: {
    flexDirection: "row",
    justifyContent: "end !important",
    alignItems: "center",
    margin: "auto 70px auto 0px",
    gap: "30px",
  },
  linksContainer: {
    flexDirection: "row",
    gap: { md: "20px", lg: "50px" },
    height: "35px",
  },
};

const Header = () => {
  const { pathname } = useLocation();
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.users);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={useStyles.header}>
      {openDrawer && (
        <DrawerComponent
          openDrawer={openDrawer}
          setOpenDrawer={setOpenDrawer}
        />
      )}

      <Box
        onClick={() => {
          navigate("/");
        }}
        component="img"
        alt="logo"
        src={Logo}
        sx={useStyles.Mlogo}
      ></Box>

      {isMatch ? (
        <IconButton
          sx={{ color: "black", mr: "20px" }}
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <MenuIcon color="black" />
        </IconButton>
      ) : (
        <Stack sx={useStyles.container}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            {" "}
            <Stack sx={useStyles.linksContainer}>
              {links.map((link, index) => {
                return (
                  <Box
                    key={index}
                    onClick={() => {
                      navigate(link.path);
                    }}
                    title={link.name}
                    sx={{
                      ...useStyles.headerLinks,
                      ...(pathname === link.path && useStyles.selectedLink),
                    }}
                  >
                    {link.name}
                  </Box>
                );
              })}
            </Stack>
          </Box>
          {currentUser ? (
            <Profile />
          ) : (
            <Stack sx={{ flexDirection: "row", gap: "20px" }}>
              <Box
                onClick={() => {
                  navigate("/login");
                }}
                title="Login"
                sx={{
                  ...useStyles.headerLinks,
                  color: "#1D4ED8",
                  "&:hover": {
                    color: "#1D4ED8",
                    cursor: "pointer",
                  },
                  // ...(pathname === link.path && useStyles.selectedLink),
                }}
              >
                Login
              </Box>

              <Button
                title="Login/Register"
                onClick={() => navigate("/signup")}
                sx={useStyles.registerButton}
              >
                Signup
              </Button>
            </Stack>
          )}
        </Stack>
      )}
    </Box>
  );
};

export default Header;
