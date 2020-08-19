import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import headshot from '../assets/lz_headshot.png';


const useStyles = makeStyles((theme) => ({
  author: {
    padding: "15px",
    display: "flex",
    borderRadius: "80px",
    backgroundColor: "#f8f8f8",
    verticalAlign: "middle",
    height: "80px",
  },
  text: {
    paddingLeft:"15px",
    marginTop:"auto",
    marginBottom:"auto",
  },
  large: {
    width: "50px",
    height: "50px",
  },
}));

export default function Agents(props) {
  const classes = useStyles();
  
  

  return (
    <Box mt={4} mb={1} className={classes.author}>
      <Avatar src={headshot} className={classes.large} />
      <Typography className={classes.text}>
        By <Link src="#">Luis Zaman</Link>&nbsp;&nbsp;&nbsp;&nbsp;<i>May 4, 2020</i>
      </Typography>
    </Box>
  );
}
