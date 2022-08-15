import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Paper, Toolbar } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "20px",
  },
  toolbarstyling: {
    display: "flex",
    justifyContent: "space-between",
    color: "#ecf0f1",
  },
  centeralign: {
    alignItems: "center",
  },
}));

const Nav = () => {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        className={classes.paper}
        sx={{ bgcolor: "#34495e" }}
      >
        <Toolbar className={classes.toolbarstyling}>
          <h3>Steve Benner</h3>

          <Stack direction="row" spacing={3} className={classes.centeralign}>
            <p>About</p>
            <p>Portfolio</p>
            <p>Contact Me</p>
            <p>Sign Up</p>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
