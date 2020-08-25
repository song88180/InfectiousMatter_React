import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(6, 0, 3),
  },
  mainp: {
    margin: theme.spacing(3, 0, 3), 
  }, 
}));

export default function ShoutOuts(props) {
  const classes = useStyles();
  return (
    <Paper elevation={3} style={{padding:"45px",margin:"400px 45px"}}>
      <Typography variant='h5'>
        Shout Outs
      </Typography>
      <Typography>
        I want to thank my friends and colleagues that helped, you all were instrumental. Particular shout out to Abbie Jacobs, Scott E. Page, Samuel Scarpino, C. Brandon Ogbunu and Shane DuBay.
      </Typography>
    </Paper>
  );
}
