import React, { useState, useRef, createRef } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

import DrawerRight from './component/DrawerRight';
import Introduction from './component/Introduction';
import WhyIMadeThis from './component/WhyIMadeThis';
import Simulation from './component/Simulation';
import Agents from './component/Agents';
import Infection from './component/Infection';
import Plotting from './component/Plotting';
import MultiLoc from './component/MultiLoc';
import Graph from './component/Graph';
import CityCountryside from './component/CityCountryside';
import Protecting from './component/Protecting';
import Walkthroughs from './component/Walkthroughs';
import FullSim from './component/FullSim';
import ShoutOuts from './component/ShoutOuts';
import Author from './component/Author';


import MatterDiv from './component/MatterDiv'; 


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
    <Box width={1200} mx="auto" className={classes.root}>
    <main className={classes.content}>
      <Typography variant="h4">
        Developing an Intuition for Pandemics
      </Typography>
      
      <Author />

      <Scrollama offset={0.5} onStepEnter={onStepEnter} debug>
        <Step data={0}>
          <div> <Introduction myRef={el => (refList.current[0] = el)} /> </div>
        </Step>
        <Step data={1}>
          <div> <WhyIMadeThis myRef={el => (refList.current[1] = el)} data={currentStepIndex}/> </div>
        </Step>
        <Step data={-1}>
          <div style={{position:"sticky", top: 0, height:"100px", zIndex:20}}> <MatterDiv /> </div>
        </Step>
        <Step data={2}>
          <div>
          <Agents myRef={el => (refList.current[2] = el)} data={currentStepIndex}/>
          </div>
        </Step>
        <Step data={3}>
          <div> <Infection myRef={el => (refList.current[3] = el)} data={currentStepIndex}/> </div>
        </Step>
        <Step data={4}>
          <div> <Plotting myRef={el => (refList.current[4] = el)} data={currentStepIndex}/> </div>
        </Step>
        <Step data={5}>
          <div> <MultiLoc myRef={el => (refList.current[5] = el)} data={currentStepIndex}/> </div>
        </Step>
        <Step data={6}>
          <div> <Graph myRef={el => (refList.current[6] = el)} data={currentStepIndex}/> </div>
        </Step>
        <Step data={7}>
          <div> <CityCountryside myRef={el => (refList.current[7] = el)} data={currentStepIndex}/> </div>
        </Step>
        <Step data={8}>
          <div> <Protecting myRef={el => (refList.current[8] = el)} data={currentStepIndex}/> </div>
        </Step>
        <Step data={9}>
          <div> <Walkthroughs myRef={el => (refList.current[9] = el)} /> </div>
        </Step>
        <Step data={10}>
          <div> <FullSim myRef={el => (refList.current[9] = el)} /> </div>
        </Step>
      </Scrollama>
      <ShoutOuts />
      <Copyright />
    </main>
    <DrawerRight index={currentStepIndex} refList={refList} />
    </Box>
  );
}
