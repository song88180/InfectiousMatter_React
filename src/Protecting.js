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

function VisitorSlider(){
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

export default function Simulation({data}) {
  const classes = useStyles();
  return (
    <Box my={4} className={classes.root} minHeight={750}>
      <Typography variant='h4'>
        Protecting Our Small Towns
      </Typography>
      <Typography className={classes.mainp}>
        Smaller and rural towns are preparing for a battle, but they do not have the same pool of resources that large cities have been mobilizing. People may not have easy access to hospitals, and many of the satellite hospital systems that typically service these locations don't have the required ICUs or equipment to treat COVID-19 patients. There are several good articles about these and concerns and more here, here, and here.
      </Typography>
      <Typography className={classes.mainp}>
        To get an intuition about how limiting movement between the cities and rural areas affects disease dynamics, try experimenting with the slider and see what happens when there is a lot of movement.
      </Typography>
      <VisitorSlider />
      <Typography className={classes.mainp}>
        If you cranked up the number of visitors, you probably saw an effect on the contact network and watched only a single peak of infections that hit the high and low density locations at similar times.
      </Typography>
      <Typography className={classes.mainp}>
        Now, try keeping movement limited to just a few visitors. You'll probably see a more spread out peak, and maybe even multiple peaks as the epidemic is no longer synchronized between locations.
      </Typography>
      <Typography className={classes.mainp}>
        Try running the simulation a few times to get a sense of the possible outcomes!
      </Typography>
      <Button variant="contained" color="primary">
        RESTART SIMULATION
      </Button>
      <Typography variant='h5'>
        How Do We Help?
      </Typography>
      <Typography className={classes.mainp}>
        Remember that larger cities have most of the equipment and ICUs required to treat COVID-19. When the peaks are spread out or shifted in time, those hospitals can treat more patients coming from rural areas. If the small towns and big cities are synchronized, the hospital system will be far beyond capacity from the start.
      </Typography>
      <Typography className={classes.mainp}>
        While we're waiting for therapies for COVID-19, the best we can do is take physical distancing and stay-home orders seriously. Even when it seems like things are improving, or when our community hasn't had an outbreak yet, we are still protecting the spread beyond current hotspots into more vulnerable communities.
      </Typography> 
    </Box>
  );
}
