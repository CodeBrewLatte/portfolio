import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { Button, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));
const Home = () => {
  const classes = useStyles();
  return (
    <Container>
      <Paper>About me</Paper>
    </Container>
  );
};

export default Home;
