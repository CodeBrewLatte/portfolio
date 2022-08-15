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

const Footer = () => {
  return (
    <div>
      <p> Footer </p>
    </div>
  );
};

export default Footer;
