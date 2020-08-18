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

export default function Simulation(props) {
  const classes = useStyles();
  return (
    <Box my={4} className={classes.root} minHeight={750} ref={props.myRef}>
      <Typography variant='h4'>
        Simple Agents in a Simple World
      </Typography>
      <Typography variant='h5'>
        Each circle is an "Agent"
      </Typography>
      <Typography className={classes.mainp}>
         An agent is just another word for an Individual in the simulation. In this world, agents are drawn as circles and move around in their world randomly. If they wander too far in one direction, they loop back around on the other end of the world.
      </Typography>
      <Typography className={classes.mainp}>
        Sometimes the agents bump into each other. It might help to imagine that represents seeing someone in an elevator, visiting a friend, or actually physically bumping into someone. In any case, we'll call these events Contacts.
      </Typography>
    </Box>
  );
}
