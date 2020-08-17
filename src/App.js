import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import DrawerRight from './DrawerRight';
import { makeStyles } from '@material-ui/core/styles';
import Introduction from './Introduction';
import WhyIMadeThis from './WhyIMadeThis';
import Simulation from './Simulation';
import data from './Simulation.json';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3,3,3,12),
  },
}));

function Copyright() {
  return (
    <div>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </div>
  );
}




export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <main className={classes.content}>
      <Typography variant="h4">
        Developing an Intuition for Pandemics
      </Typography>
      <Introduction />
      <WhyIMadeThis />
      <Simulation data={data[0]} />
      <Simulation data={data[1]} />
      <Simulation data={data[2]} />
      <Copyright />
    </main>
    <DrawerRight />
    </div>
  );
}
