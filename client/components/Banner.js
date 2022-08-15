import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Container, Paper } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Stack } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "20px",
  },
  containerbg: {
    background: "#34495e",
    display: "flex",
    flexDirection: "column",
  },
  containeritem: {
    display: "flex",
  },
}));

const Banner = () => {
  const classes = useStyles();
  const [loggedin, setLoggedin] = useState(false);

  return (
    <Container maxWidth={false} className={classes.containerbg}>
      <div className={classes.containeritem}>Image of Laptop with code</div>

      <div className={classes.containeritem}>
        Right hand banner text about me
      </div>
    </Container>
  );
};

export default Banner;
