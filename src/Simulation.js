import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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
    <Box my={4} className={classes.root}>
      <Typography variant='h4'>
        {data.title}
      </Typography>
      <Typography variant='h5'>
        {data.subtitle}
      </Typography>
      {data.maintext.map((p) => (
        <Typography className={classes.mainp}>
          {p}
        </Typography>
      ))}
    </Box>
  );
}
