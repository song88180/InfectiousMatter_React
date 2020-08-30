import React, {useState, useRef, createRef, useEffect, useContext} from 'react';
import { Scrollama, Step } from 'react-scrollama';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

import Introduction from './Pandemics/Introduction';
import WhyIMadeThis from './Pandemics/WhyIMadeThis';
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
//import MatterDiv from '../component/MatterDiv';
import InfectiousMatterSimulation from "../SimComponents/InfectiousMatterSimulation";
import GrowthSimulation from "../SimComponents/GrowthSimulation";
import InfectiousMatterPlot from "../SimComponents/InfectiousMatterPlot";
import InfectiousMatterContactGraph from "../SimComponents/InfectiousMatterContactGraph";

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

export default function Pandemics({refMap, curItemName,setCurItemName}) {
  const classes = useStyles();
  const [worldReadyTrigger, setWorldReadyTrigger] = useState(0);
  const [redraw_trigger, setRedrawTrigger] = useState(0);

  const onStepEnter = ({ data }) => {
    setCurItemName(data);
    console.log(data);
  };

  function registerDOM(refMap, _name, _ref){
    refMap.current[_name] = createRef();
    refMap.current[_name] = _ref;
  }

  useEffect(() => {
    console.log(curItemName,'onload Pandemics');
    let curRef = refMap.current[curItemName];
    if (curRef){
      window.scrollTo(0, curRef.offsetTop - 350);
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
        <Step data={'introduction'}>
          <div> <Introduction myRef={el => registerDOM(refMap,'introduction',el)}/> </div>
        </Step>
        <Step data={'whyimadethis'}>
          <div> <WhyIMadeThis myRef={el => registerDOM(refMap,'whyimadethis',el)} data={curItemName}/> </div>
        </Step>
        <Step data={null}>
          <div style={{
            position:"sticky", top: 0, height:300, zIndex:20, display:'flex', justifyContent:'space-evenly',
            background: "rgba(255,255,255,.9)", marginBottom:150
          }}>
            <InfectiousMatterPlot
              redraw_trigger={redraw_trigger}
            />
            <InfectiousMatterSimulation
              setWorldReadyTrigger={setWorldReadyTrigger}
              redraw_trigger={redraw_trigger}
              divSize={300}
            />
            <InfectiousMatterContactGraph
              worldReadyTrigger={worldReadyTrigger}
            />

          </div>
        </Step>
        <Step data={'agents'}>
          <div>
          <Agents myRef={el => registerDOM(refMap,'agents',el)} data={curItemName}/>
          </div>
        </Step>
        <Step data={'infection'}>
          <div> <Infection myRef={el => registerDOM(refMap,'infection',el)} data={curItemName}/> </div>
        </Step>
        <Step data={'plotting'}>
          <div> <Plotting myRef={el => registerDOM(refMap,'plotting',el)} data={curItemName}/> </div>
        </Step>
        <Step data={'multiloc'}>
          <div> <MultiLoc myRef={el => registerDOM(refMap,'multiloc',el)} data={curItemName}/> </div>
        </Step>
        <Step data={'graph'}>
          <div> <Graph myRef={el => registerDOM(refMap,'graph',el)} data={curItemName}/> </div>
        </Step>
        <Step data={'citycountryside'}>
          <div> <CityCountryside myRef={el => registerDOM(refMap,'citycountryside',el)} data={curItemName}/> </div>
        </Step>
        <Step data={'protecting'}>
          <div> <Protecting myRef={el => registerDOM(refMap,'protecting',el)} data={curItemName}/> </div>
        </Step>
        <Step data={'walkthroughs'}>
          <div> <Walkthroughs myRef={el => registerDOM(refMap,'walkthroughs',el)} /> </div>
        </Step>
        <Step data={null}>
          <div> <FullSim /> </div>
        </Step>
      </Scrollama>
      <ShoutOuts />
      <Copyright />
    </main>
  );
}
