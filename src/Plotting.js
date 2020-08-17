import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(6, 0, 3),
  },
  mainp: {
    margin: theme.spacing(3, 0, 3), 
  }, 
}));

export default function Simulation({data}) {
  const classes = useStyles();
  return (
    <Box my={4} className={classes.root} minHeight={750}>
      <Typography variant='h4'>
        Plotting
      </Typography>
      <Typography variant='h5'>
        Because those little borders are hard to count
      </Typography>
      <Typography className={classes.mainp}>
        Now that we have a plot, we also can see the timescale of the simulation. We could make the agents move faster or slower, depending on how much "physical distancing" we're trying to model. We could also increase or decrease the population size to simulate differences in location density. You'll get to play with these parameters in the full simulation later!
      </Typography>
    </Box>
  );
}
