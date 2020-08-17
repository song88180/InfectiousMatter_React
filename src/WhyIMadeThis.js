import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
//import Image from 'material-ui-image';
//import CardMedia from '@material-ui/core/CardMedia';
import photo from './assets/lz_greenhouse_small.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(6, 0, 10),
  },
  mainp: {
    margin: theme.spacing(3, 0, 3),
  },
  photo: {
    height: "450px",
    width: "auto",
    margin: theme.spacing(0, 5, 4, 0),
  }
}));

export default function Introduction() {
  const classes = useStyles();
  return (
    <Box my={4} className={classes.root} color="textSecondary">
      <Typography variant='h5'>
        Why I Made This
      </Typography>
      <div style={{ float: "left" }}>
        <img
          className={classes.photo}
          src={photo}
        />
      </div>
      <div>
        <Typography className={classes.mainp}>
          <Link href="https://zeeelab.com/">
            I'm an Assistant Professor at the University of Michigan
          </Link>
          {' '}in the Ecology and Evolutionary Biology department, and the Center for the Study of Complex Systems. I study how coevolution between hosts and their pathogens drive really fascinating ecological and evolutionary dynamics. In the Fall, I'll be teaching a new course on the Ecology and Evolution of Infectious Disease.
        </Typography>
        <Typography className={classes.mainp}>
          I've always believed that hands-on learning is the best way to build intuition about complex topics, and that's something I'm planning to bring to my course in the fall. I'm also a big fan of simulations. That's true for the classes I teach, as well as in my own research.
        </Typography>
        <Typography className={classes.mainp}>
          There are a lot of great resources for scientists interested in studying disease dynamics, and several good simulation frameworks that are geared towards teaching broadly about disease transmission. I spent some time looking for something that would run in web browsers, so that students could get right into experimenting without having the universally loathed class period dedicated to installing software. Unfortunately, I didn't find a simulation with the right mix of simplicity (to get rid of so many of the complicated bits) and flexibility (to add in the bits that might be important) for this course.    
        </Typography>
        <Typography className={classes.mainp}>
          So, I built it. Keep scrolling to learn more about it.
        </Typography>
      </div>
    </Box>
  );
}
