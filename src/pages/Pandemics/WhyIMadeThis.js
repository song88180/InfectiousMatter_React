import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
//import Image from 'material-ui-image';
//import CardMedia from '@material-ui/core/CardMedia';
import photo from '../../assets/lz_greenhouse_small.jpeg';

import Slide from '@material-ui/core/Slide';



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
    "box-shadow":"0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.3)",
    margin: theme.spacing(0, 5, 4, 0),
  },
}));


export default function WhyIMadeThis(props) {

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (props.data === 1){
      setChecked(true);
    }
  },[props.data]);

  const classes = useStyles();
  return (
    <Box my={4} className={classes.root} color="textSecondary" ref={props.myRef} >
      <Typography variant='h5'>
        Why I Made This
      </Typography>
    
      <div style={{ float: "left",height:"487px",width:"356.9px"}}>
        <Slide direction="right" timeout={1000} in={checked}>
          <img
            className={classes.photo}
            src={photo}
          />
        </Slide>
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
