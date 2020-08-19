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

export default function MultiLoc(props) {
  const classes = useStyles();
  return (
    <Box my={4} className={classes.root} minHeight={750} ref={props.myRef}>
      <Typography variant='h4'>
        Multiple Locations
      </Typography>
      <Fade in={props.data === 5} timeout={1200}>
        <Typography variant='h5'>
          We don't all live in one little box!
        </Typography>
      </Fade>
      <Typography className={classes.mainp}>
        We, like most other organisms on earth, don't live in one big population. Instead we are spread across space in different cities or towns, and live in different neighborhoods or complexes. We model these sorts of things as a <b>Metapopulation</b>, where several subpopulations are connected through <b>Migration</b> of individuals. Migration in this abstract sense could represent visiting your friend in a neighboring city, for example.
      </Typography>
      <Typography className={classes.mainp}>
        The outcome of this simulation is <b>Stochastic</b>, which means every time you run it you might see something different. Maybe the disease spread slowly through each subpopulation, and you saw a prolonged (but flat) infected curve. Or maybe you saw multiple infection peaks as the disease spread quickly in multiple subpopulations at different times. When we are modeling disease dynamics, it's important to get a sense of the range of possible outcomes and how likely they are.
      </Typography>
    </Box>
  );
}
