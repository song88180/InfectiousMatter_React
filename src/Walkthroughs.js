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
        More Walkthroughs
      </Typography>
      <Typography className={classes.mainp}>
        Check out the next walkthrough on Small World Networks and their role in the spread of a disease!
      </Typography>
      <Typography className={classes.mainp}>
        Then, check out what evolution looks like, complete with phylogenetic networks!
      </Typography>
    </Box>
  );
}
