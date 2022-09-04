import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Container, Grid, Paper } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Stack } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  paper: {
    fontFamily: "Work Sans",
  },
  paperDark: {
    color: "white",
  },
  paperlight: {
    fontWeight: "300",
  },
  paperlightdark: {
    fontWeight: "300",
    color: "white",
  },
  photoimg: {
    width: "100%",
  },
  nunitoreg: {
    fontFamily: "nunito",
  },
  buttonbg: {
    background: "#2980b9",
  },
  centeralign: {
    display: "flex",
    justifyContent: "center",
    color: "white",
  },
  darkbg: {
    backgroundColor: "#222f3e",
  },
  lightbg: {
    backgroundColor: "#fff",
  },
}));

const Banner = (props) => {
  const classes = useStyles();

  return (
    // <Container maxWidth={false} className={classes.containerbg}>
    <Grid
      container
      spacing={0}
      className={props.darkMode ? classes.darkbg : classes.lightbg}
    >
      <Grid item xs={12} sm={6} md={8}>
        {props.darkMode ? (
          <img className={classes.photoimg} src="./assets/stevenight.png" />
        ) : (
          <img className={classes.photoimg} src="./assets/steve.png" />
        )}
      </Grid>
      <Grid container item xs={12} sm={6} md={4} alignItems="center">
        <div className={classes.containeritem}>
          <Container>
            <h1 className={props.darkMode ? classes.paperDark : classes.paper}>
              Hi I'm Steve
            </h1>
            <h4
              className={
                props.darkMode ? classes.paperlightdark : classes.paperlight
              }
            >
              I'm a full-stack developer, my passion is Javascript, React,
              MongoDB and Express.
            </h4>
            <span className={classes.centeralign}>
              <Button color="inherit" className={classes.buttonbg}>
                Learn more
              </Button>
            </span>
          </Container>
        </div>
      </Grid>
    </Grid>
    // </Container>
  );
};

export default Banner;
