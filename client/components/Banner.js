import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Container, Grid, Paper } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Stack } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  paper: {
    fontFamily: "Work Sans",
  },
  containerbg: {
    background: "#34495e",
  },
  containeritem: {},
  photoimg: {
    width: "100%",
  },
  nunitoreg: {
    fontFamily: "nunito",
  },
  buttonbg: {
    background: "#2980b9",
  },
}));

const Banner = () => {
  const classes = useStyles();
  const [loggedin, setLoggedin] = useState(false);

  return (
    // <Container maxWidth={false} className={classes.containerbg}>
    <Grid container spacing={0}>
      <Grid item xs={12} sm={6} md={8}>
        <img className={classes.photoimg} src="./assets/steve.png" />
      </Grid>
      <Grid container item xs={12} sm={6} md={4} alignItems="center">
        <div className={classes.containeritem}>
          <Container>
            <h1 className={classes.paper}>Hi I'm Steve</h1>
            <h4>
              I'm a full-stack developer, my passion is Javascript, React,
              MongoDB and Express.
            </h4>

            <Button color="inherit" className={classes.buttonbg}>
              Learn more
            </Button>
          </Container>
        </div>
      </Grid>
    </Grid>
    // </Container>
  );
};

export default Banner;
