import React, { useState, useRef, createRef } from 'react';
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
    padding: theme.spacing(3,3,3,3),
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

  //const refList = useRef([0,1,2,3,4,5,6,7,8].map(() => createRef()));
    
  const refList = useRef([]);

  const [currentStepIndex, setCurrentStepIndex] = useState(null);
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  return (
    <Box mx={12} className={classes.root}>
    <main className={classes.content}>
      <Typography variant="h4">
        Developing an Intuition for Pandemics
      </Typography>
      
      <Scrollama offset={0.5} onStepEnter={onStepEnter} debug>
        <Step data={0}>
          <div> <Introduction myRef={el => (refList.current[0] = el)} /> </div>
        </Step>
        <Step data={0}>
          <div> <WhyIMadeThis /> </div>
        </Step>
        <Step data={1}>
          <div> <Agents myRef={el => (refList.current[1] = el)} /> </div>
        </Step>
        <Step data={2}>
          <div> <Infection myRef={el => (refList.current[2] = el)} /> </div>
        </Step>
        <Step data={3}>
          <div> <Plotting myRef={el => (refList.current[3] = el)} /> </div>
        </Step>
        <Step data={4}>
          <div> <MultiLoc myRef={el => (refList.current[4] = el)} /> </div>
        </Step>
        <Step data={5}>
          <div> <Graph myRef={el => (refList.current[5] = el)} /> </div>
        </Step>
        <Step data={6}>
          <div> <CityCountryside myRef={el => (refList.current[6] = el)} /> </div>
        </Step>
        <Step data={7}>
          <div> <Protecting myRef={el => (refList.current[7] = el)} /> </div>
        </Step>
        <Step data={8}>
          <div> <Walkthroughs myRef={el => (refList.current[8] = el)} /> </div>
        </Step>
      </Scrollama>
      <Copyright />
    </main>
    <DrawerRight index={currentStepIndex} refList={refList} />
    </Box>
  );
}
