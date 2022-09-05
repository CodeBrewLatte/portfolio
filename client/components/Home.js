import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { Button, Paper } from "@material-ui/core";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  media: {
    objectFit: "scale-down",
    height: "200px",
    width: "100%",
  },
  center: {
    justifyContent: "center",
  },
  darkbg: {
    backgroundColor: "#34495e",
  },
  darkerbg: {
    backgroundColor: "#95a5a6",
    justifyContent: "center",
    color: "white",
  },
  lightbg: {
    backgroundColor: "white",
  },
  null: {},
}));
const Home = (props) => {
  const classes = useStyles();

  return (
    <Box
      sx={{ width: "100%" }}
      className={props.darkMode ? classes.darkbg : classes.lightbg}
    >
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ p: 2 }}
        className={classes.center}
      >
        <Grid s={6} lg={6}>
          {/* SURFQL */}
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image="assets/surf.png"
                alt="SurfQL Logo"
              />
              <CardContent
                className={props.darkMode ? classes.darkerbg : classes.null}
              >
                <Typography gutterBottom variant="h5" component="div">
                  SurfQL
                </Typography>
                <Typography variant="body2">
                  SurfQL is an Open Source Product that allows developers to not
                  only visualize their GraphQL schema but suggest queries using
                  intellisense.
                </Typography>
              </CardContent>
              <CardActions
                className={props.darkMode ? classes.darkerbg : classes.null}
              >
                <Button size="small">Learn More</Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid s={6} lg={6}>
          {/* PARQ-IT */}
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <img src="assets/parqit.png" className={classes.media}></img>
              <CardContent
                className={props.darkMode ? classes.darkerbg : classes.null}
              >
                <Typography gutterBottom variant="h5" component="div">
                  Parq-it
                </Typography>
                <Typography variant="body2">
                  Parq-it is a web application that allows users to sign up and
                  rent or rent-out unused parking spaces.
                </Typography>
              </CardContent>
              <CardActions
                className={props.darkMode ? classes.darkerbg : classes.null}
              >
                <Button size="small">Learn More</Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid s={6} lg={6}>
          {/* ONLYPANS */}
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <img src="assets/onlypans.png" className={classes.media}></img>
              <CardContent
                className={props.darkMode ? classes.darkerbg : classes.null}
              >
                <Typography gutterBottom variant="h5" component="div">
                  OnlyPans
                </Typography>
                <Typography variant="body2">
                  OnlyPans is a web application that aims to help home chefs
                  monetize themselves by selling their food to locals.
                </Typography>
              </CardContent>
              <CardActions
                className={props.darkMode ? classes.darkerbg : classes.null}
              >
                <Button size="small">Learn More</Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
