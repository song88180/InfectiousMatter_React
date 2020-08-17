import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import DrawerRight from './DrawerRight';
import { makeStyles } from '@material-ui/core/styles';
import Introduction from './Introduction';
import WhyIMadeThis from './WhyIMadeThis';
import Simulation from './Simulation';
/*import data from './Simulation.json';*/
import { Scrollama, Step } from 'react-scrollama';

import Agents from './Agents';
import Infection from './Infection';
import Plotting from './Plotting';
import MultiLoc from './MultiLoc';
import Graph from './Graph';
import CityCountryside from './CityCountryside';
import Protecting from './Protecting';
import Walkthroughs from './Walkthroughs';


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
  
  const [currentStepIndex, setCurrentStepIndex] = useState(null);
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  return (
    <div className={classes.root}>
    <main className={classes.content}>
      <Typography variant="h4">
        Developing an Intuition for Pandemics
      </Typography>
      
      <Scrollama onStepEnter={onStepEnter} debug>
        <Step data={1}>
          <div> <Introduction /> </div>
        </Step>
        <Step data={2}>
          <div> <WhyIMadeThis /> </div>
        </Step>
        <Step data={3}>
          <div> <Agents /> </div>
        </Step>
        <Step data={4}>
          <div> <Infection /> </div>
        </Step>
        <Step data={5}>
          <div> <Plotting /> </div>
        </Step>
        <Step data={6}>
          <div> <MultiLoc /> </div>
        </Step>
        <Step data={7}>
          <div> <Graph /> </div>
        </Step>
        <Step data={8}>
          <div> <CityCountryside /> </div>
        </Step>
        <Step data={9}>
          <div> <Protecting /> </div>
        </Step>
        <Step data={10}>
          <div> <Walkthroughs /> </div>
        </Step>
      </Scrollama>
      
      <Copyright />
    </main>
    <DrawerRight />
    </div>
  );
}
