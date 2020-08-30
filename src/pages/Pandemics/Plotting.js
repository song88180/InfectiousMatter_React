import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(6, 0, 3),
  },
  mainp: {
    margin: theme.spacing(3, 0, 3), 
  }, 
}));

export default function Plotting(props) {
  const classes = useStyles();
  return (
    <Box my={4} className={classes.root} minHeight={750} ref={props.myRef}>
      <Typography variant='h4'>
        Plotting
      </Typography>
      <Fade in={props.data === 'plotting'} timeout={1200}>
        <Typography variant='h5'>
          Because those little borders are hard to count
        </Typography>
      </Fade>
      <Typography className={classes.mainp}>
        Now that we have a plot, we also can see the timescale of the simulation. We could make the agents move faster or slower, depending on how much "physical distancing" we're trying to model. We could also increase or decrease the population size to simulate differences in location density. You'll get to play with these parameters in the full simulation later!
      </Typography>
    </Box>
  );
}
