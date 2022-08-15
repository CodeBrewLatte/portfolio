import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Paper } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Stack } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "20px",
  },
}));

const Banner = () => {
  const classes = useStyles();
  const [loggedin, setLoggedin] = useState(false);

  return (
    <div>
      <div>Image of Laptop with code</div>
      <div>Right hand banner text about me</div>
    </div>
  );
};

export default Banner;
