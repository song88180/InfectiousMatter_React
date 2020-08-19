import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Image from 'material-ui-image';
import teaser from '../assets/teaser.png';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(6, 0, 10),
  },
  mainp: {
    margin: theme.spacing(3, 0, 3),
  },
  img: {
    width: "100%",
    height: "auto",
  },
  hl: {
    backgroundColor: "#faa05a",
    color: "#fff",
    fontSize:".875rem",
    padding: "0 10px",
    display: "inline-block",
  }
}));

export default function Introduction(props) {
  const classes = useStyles();
  return (
    <Box my={4} className={classes.root} color="textSecondary" ref={props.myRef} >
      <Typography className={classes.mainp}>
        When you hear an emergency traffic report, you have an idea of how that news is going to affect your plans (when we still had plans, anyway). We have an intuition for the way traffic works and fits in with our daily routines, but we didn't get that intuition from just listening to traffic reports. Actually sitting in our car bumper-to-bumper taught us to plan ahead for road closures and generally when to avoid the highway.
      </Typography>
      <Typography className={classes.mainp}>
        We don't have that intuition for pandemics yet, but we do have a lot of pandemic reports.
      </Typography>
      <Typography className={classes.mainp}>
        What if you could watch virtual epidemics unfold directly in your web browser to build that intuition rather than waiting around and learning by making mistakes and dealing with their fallout? Imagine if new pandemic plans and policies came with an interactive simulation that demonstrated (at least virtually) their intended consequences.
      </Typography>
      <Image
        aspectRatio={3}
        src={teaser}
      />
      <Typography className={classes.mainp}>
        <span className={classes.hl}>DISCLAIMER</span> I am not an Epidemiologist or Public Health expert. This is not designed to be a predictive simulation of COVID-19. It is a simple model to understand and visualize basic disease dynamics.
      </Typography>
    </Box>
  );
}
