import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Toolbar,
} from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useNavigate } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const useStyles = makeStyles((theme) => ({
  paper: {
    fontFamily: "Work Sans",
  },
  toolbarstyling: {
    display: "flex",
    justifyContent: "space-between",
    color: "black",
  },
  toolbardark: {
    display: "flex",
    justifyContent: "space-between",
    color: "white",
    backgroundColor: "#222f3e",
  },
  centeralign: {
    alignItems: "center",
  },
}));

const Nav = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (pageURL) => {
    navigate(pageURL);
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        className={classes.paper}
        sx={{ bgcolor: "#fff" }}
        elevation={0}
      >
        <Toolbar
          className={
            props.darkMode ? classes.toolbardark : classes.toolbarstyling
          }
        >
          <h3>Steve Benner</h3>

          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={() => handleMenuClick("/about")}>
                  About
                </MenuItem>
                <MenuItem onClick={() => handleMenuClick("/portfolio")}>
                  Portfolio
                </MenuItem>
                <MenuItem onClick={() => handleMenuClick("/contact")}>
                  Contact Me
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Stack direction="row" spacing={3} className={classes.centeralign}>
              <p>About</p>
              <p>Portfolio</p>
              <p>Contact Me</p>
              <p>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Dark Mode"
                  onChange={props.darkset}
                />
              </p>
            </Stack>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
