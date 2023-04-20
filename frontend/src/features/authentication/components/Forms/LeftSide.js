import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography, Divider, Grid } from "@mui/material";
import Logo from "../../../../assets/logo.png";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    backgroundImage: "url('/background-image.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: theme.spacing(2),
  },
  text: {
    color: theme.palette.common.black,
    textAlign: "center",
  },
}));

function LeftSide() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={classes.root}
    >
      <img
        src={Logo}
        alt="Afro Opportunity Hub Logo"
        className={classes.logo}
      />
      <Typography variant="h4" component="h1" className={classes.text}>
        Join the Afro Opportunity Hub
      </Typography>
      <Typography variant="subtitle1" className={classes.text}>
        Find the perfect internship or scholarship opportunity to advance your
        career and build your skills.
      </Typography>
    </Grid>
  );
}

export default LeftSide;
