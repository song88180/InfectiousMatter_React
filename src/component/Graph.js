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
        Contact Graph
      </Typography>
      <Typography variant='h5'>
        (The 7 Degrees of Disease Transmission)
      </Typography>
      <Typography className={classes.mainp}>
        One of the really neat features of agent based models is that we can keep track of information about each individual in the simulation. This lets us track, for example, who interacted with each other over some period of time. As you might imagine for disease transmission, this could be an incredibly useful bit of information.
      </Typography>
      <Typography className={classes.mainp}>
        We can represent these contacts with a Graph. Every node (colored square) in the rightmost visualization depicts one of the agents in the metapopulation. An edge (the line drawn between two nodes) represents a contact that happened within the last 7 days of the simulation.
      </Typography>
      <Typography className={classes.mainp}>
        You'll notice the agents form the same subpopulation tend to be more connected to each other than agents from other locations. You might hear these structures in graphs called Modules or Communities.
      </Typography>
    </Box>
  );
}
