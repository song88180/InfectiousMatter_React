import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Fade from "@material-ui/core/Fade";


const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 0, 10),
  },
  mainp: {
    margin: theme.spacing(3, 0, 3),
  },
  formula: {
    margin: theme.spacing(3, 0, 3),
    fontWeight: "bold",
    textAlign: "center",
},
  img: {
    width: "100%",
    height: "auto",
  },
  hl: {
    backgroundColor: "#faa05a",
    color: "#fff",
    fontSize:".875rem",
    padding: "0 10px",
    display: "inline-block",
  }
}));

export default function Exponential(props) {
  const classes = useStyles();
  return (
    <Box className={classes.root} color="textSecondary" ref={props.myRef} >
      <Typography variant='h4' >
        Exponential Growth
      </Typography>
      <Fade in={props.data === 2} timeout={1200}>
        <Typography variant='h5'>
          Exponential Growth
        </Typography>
      </Fade>
      <Typography className={classes.mainp}>
        A biological population with plenty of food, space to grow, and no threat from predators, tends to grow at a rate that is proportional to the population -- that is, in each unit of time, a certain percentage of the individuals produce new individuals. If reproduction takes place more or less continuously, then this growth rate is represented by:
      </Typography>
      <Typography className={classes.formula}> dP/dt = rP, </Typography>
      <Typography className={classes.mainp}>
        where P is the population as a function of time t, and r is the proportionality constant. We know that all solutions of this natural-growth equation have the form
      </Typography>
      <Typography className={classes.formula}> P(t) = P<sub>0</sub>e<sup>rt</sup>, </Typography>
      <Typography className={classes.mainp}>
        where P0 is the population at time t = 0. In short, unconstrained natural growth is exponential growth.
      </Typography>
    </Box>
  );
}
