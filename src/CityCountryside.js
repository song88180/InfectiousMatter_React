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
        City and Countryside
      </Typography>
      <Typography variant='h5'>
        Dense cities and more isolated rural areas are connected, and change the dynamics of disease spread
      </Typography>
      <Typography className={classes.mainp}>
        As an example, lets make a metapopulation simulation of a metropolitan area. In a typical metropolitan area, there is a densely populated city surrounded by lower density towns and rural areas. Here, the dense city is in the top left (purple) and the density decreases as we move down and to the right.
      </Typography>
      <Typography className={classes.mainp}>
        You can easily see the effect of density on the contact graph, where the large city is a tight-knit network, and the lower density locations have more tendrils.
      </Typography>
      <Typography className={classes.mainp}>
        Thanks to some fantastic work by network scientists and epidemiologists, we know that disease dynamics in metapopulations are more likely to have multiple waves (or peaks) of infection, and more variation in how long it takes to resolve an epidemic. A recent (not yet peer-reviewed) pre-print also highlights the role of density in metapopulations on the intensity of COVID-19. Counterintuitively, lower density locations had more intense outbreaks, with most of the infections happening in a relatively short period of time. This observation is critical for our next steps in pandemic policy making.
      </Typography>
      <Typography className={classes.mainp}>
        Keep scrolling for an interactive exercise!
      </Typography>
    </Box>
  );
}
