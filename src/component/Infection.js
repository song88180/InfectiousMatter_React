import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(6, 0, 3),
  },
  mainp: {
    margin: theme.spacing(3, 0, 3), 
  }, 
}));

export default function Simulation(props) {
  const classes = useStyles();
  return (
    <Box my={4} className={classes.root} minHeight={750} ref={props.myRef}>
      <Typography variant='h4'>
        Infection
      </Typography>
      <Fade in={props.data === 3} timeout={1200}>
        <Typography variant='h5'>
          We can expose a few organisms in this population
        </Typography>
      </Fade>
      <Typography className={classes.mainp}>
        First you'll see agents with a small orange border. Those are Exposed individuals, after some time they'll become Infected and turn red. The Infected agents are contagious, and if they bump into Susceptible (black border) agents, there is a chance they'll transmit the disease. Eventually, Infected organisms will recover and develop resistance to the disease. You'll see these Recovered agents with a green border in the simulation. We would call this, then, an Agent Based version of a traditional Susceptible, Exposed, Infectious, Recovered (SEIR) model.
      </Typography>
      <Typography className={classes.mainp}>
        Now, it's a little hard to see all the different colored borders on the agents, so lets start plotting what's going on in the population.
      </Typography>
      <Typography className={classes.mainp}>
        Scroll on to see the plot!
      </Typography>
    </Box>
  );
}
