import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Paper } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "20px",
  },
}));

const Nav = () => {
  const classes = useStyles();

  return (
    <AppBar>
      <div>
        <h3>Steve Benner</h3>

        <div>
          <h4>About!!</h4>
          <h4>Portfolio</h4>
          <h4>Contact Me</h4>
          <h4>Sign Up</h4>
        </div>
      </div>
    </AppBar>
  );
};

export default Nav;
