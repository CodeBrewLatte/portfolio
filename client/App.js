import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import { makeStyles } from "@material-ui/core/styles";

import { Button, Paper } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Stack } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "20px",
  },
}));

const App = () => {
  const classes = useStyles();
  const [loggedin, setLoggedin] = useState(false);

  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Footer></Footer>
    </>
  );
};

export default App;
