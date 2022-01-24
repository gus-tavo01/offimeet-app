import React from "react";

import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: { color: "inherit", textDecoration: "none" },
}));

const AppNavBar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton color="inherit" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
            <Link to="/" className={classes.title}>
              OffiMeet App
            </Link>
          </Typography>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
export default AppNavBar;
