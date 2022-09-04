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
  const [darkMode, setDarkMode] = useState(true);
  const darkset = (event) => {
    console.log(event.target.checked);
    if (event.target.checked) setDarkMode(true);
    else setDarkMode(false);
    console.log("Dark mode toggled");
  };

  return (
    <div className={classes.webmain}>
      <Router>
        <Nav darkset={darkset} darkMode={darkMode}></Nav>
      </Router>
      <Banner darkMode={darkMode}></Banner>
      <Home darkMode={darkMode}></Home>
      <Footer></Footer>
    </div>
  );
};

export default App;
