import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { makeStyles } from "@material-ui/core/styles";

import { Button, Paper } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Stack } from "@mui/material";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  webmain: {
    Margin: 0,
    Padding: 0,
    Border: 0,
    fontFamily: "arial",
  },
}));

const App = () => {
  const classes = useStyles();
  const [loggedin, setLoggedin] = useState(false);

  return (
    <div className={classes.webmain}>
      <Router>
        <Nav></Nav>
      </Router>
      <Banner></Banner>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
};

export default App;
