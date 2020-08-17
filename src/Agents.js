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

function Component_render(obj){
  if(obj.key === "Slider-visitor"){
    return(
      <Box display="flex" mt={4}>
        <Box mx={1}>
          <Typography>Visitors Per Day: </Typography>
        </Box>
        <Box mx={1}>
          <Slider
            defaultValue={10}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="on"
            step={1}
            marks
            min={0}
            max={30}
            style={{width: 200}}
          />
        </Box>
      </Box>
    )
  }
  else if (obj.key == "Button-restart"){
    return(
      <Button variant="contained" color="primary">
        RESTART
      </Button>
    )
  }
  else if (obj.key == "HowDoWeHelp"){
    return(
      <Typography variant='h5'>How Do We Help?</Typography>
    )
  }
}

export default function Simulation({data}) {
  const classes = useStyles();
  return (
    <Box my={4} className={classes.root} minHeight={750}>
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
