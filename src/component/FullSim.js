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

export default function FullSim(props) {
  const classes = useStyles();
  return (
    <Box my={4} className={classes.root} ref={props.myRef}>
      <Typography variant='h5' style={{textAlign: "center", marginBottom:"40px"}}>
        There are even more configuration options in the full simulator!
      </Typography>
      <Button variant="contained" color="primary" fullWidth size='large'>
        <span style={{fontSize:"20px"}}>LAUNCH FULL SIMULATOR</span>
      </Button>
    </Box>
  );
}
