import React, {useState, useRef, createRef, useEffect} from 'react';
import { Scrollama, Step } from 'react-scrollama';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

import Introduction from './Pandemics/Introduction';
import WhyIMadeThis from './Pandemics/WhyIMadeThis';
import Simulation from '../component/Simulation';
import Agents from './Pandemics/Agents';
import Infection from './Pandemics/Infection';
import Plotting from './Pandemics/Plotting';
import MultiLoc from './Pandemics/MultiLoc';
import Graph from './Pandemics/Graph';
import CityCountryside from './Pandemics/CityCountryside';
import Protecting from './Pandemics/Protecting';
import Walkthroughs from './Pandemics/Walkthroughs';
import FullSim from './Pandemics/FullSim';
import ShoutOuts from './Pandemics/ShoutOuts';
import Author from '../component/Author';


import MatterDiv from '../component/MatterDiv';


const useStyles = makeStyles((theme) => ({
  content: {
    margin: theme.spacing(0,"auto"),
    backgroundColor: theme.palette.background.default,
    maxWidth: 1000,
    padding: theme.spacing(4,4),
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

export default function Pandemics({refMap, curItemName}) {
  const classes = useStyles();

  const [currentStepIndex, setCurrentStepIndex] = useState(null);
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  function registerDOM(refMap, _name, _ref){
    refMap.current[_name] = createRef();
    refMap.current[_name] = _ref;
  }

  useEffect(() => {
    console.log(curItemName.current,'onload Pandemics');
    let curRef = refMap.current[curItemName.current];
    if (curRef){
      window.scrollTo(0, curRef.offsetTop);
    }
    else {
      window.scrollTo(0, 0);
    }
  },[])

  return (
    <main className={classes.content}>
      <Typography variant="h4">
        Developing an Intuition for Pandemics
      </Typography>

      <Author />

      <Scrollama offset={0.5} onStepEnter={onStepEnter} debug>
        <Step data={0}>
          <div> <Introduction myRef={el => registerDOM(refMap,'introduction',el)}/> </div>
        </Step>
        <Step data={1}>
          <div> <WhyIMadeThis myRef={el => registerDOM(refMap,'whyimadethis',el)} data={currentStepIndex}/> </div>
        </Step>
        <Step data={-1}>
          <div style={{position:"sticky", top: 0, height:"100px", zIndex:20}}> <MatterDiv /> </div>
        </Step>
        <Step data={2}>
          <div>
          <Agents myRef={el => registerDOM(refMap,'agents',el)} data={currentStepIndex}/>
          </div>
        </Step>
        <Step data={3}>
          <div> <Infection myRef={el => registerDOM(refMap,'infection',el)} data={currentStepIndex}/> </div>
        </Step>
        <Step data={4}>
          <div> <Plotting myRef={el => registerDOM(refMap,'plotting',el)} data={currentStepIndex}/> </div>
        </Step>
        <Step data={5}>
          <div> <MultiLoc myRef={el => registerDOM(refMap,'multiloc',el)} data={currentStepIndex}/> </div>
        </Step>
        <Step data={6}>
          <div> <Graph myRef={el => registerDOM(refMap,'graph',el)} data={currentStepIndex}/> </div>
        </Step>
        <Step data={7}>
          <div> <CityCountryside myRef={el => registerDOM(refMap,'citycountryside',el)} data={currentStepIndex}/> </div>
        </Step>
        <Step data={8}>
          <div> <Protecting myRef={el => registerDOM(refMap,'protecting',el)} data={currentStepIndex}/> </div>
        </Step>
        <Step data={9}>
          <div> <Walkthroughs myRef={el => registerDOM(refMap,'walkthroughs',el)} /> </div>
        </Step>
        <Step data={10}>
          <div> <FullSim /> </div>
        </Step>
      </Scrollama>
      <ShoutOuts />
      <Copyright />
    </main>
  );
}
