import React, {useState, useRef, createRef, useEffect, useContext} from 'react';
import useScrollSpy from 'react-use-scrollspy';
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
  const name_list = useRef(['introduction', 'whyimadethis', 'agents', 'infection', 'plotting', 'multiloc',
                                      'graph', 'citycountryside', 'protecting', 'walkthroughs'])

  const sectionRefs = [
    useRef(null),useRef(null),useRef(null),useRef(null),useRef(null),
    useRef(null),useRef(null),useRef(null),useRef(null),useRef(null)
  ]

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -500,
  });

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
      setCurItemName('introduction');
      window.scrollTo(0, 0);
    }

  },[])

  useEffect(() => {
    console.log('activeSection',activeSection);
    setCurItemName(name_list.current[activeSection]);
  },[activeSection])

  return (
    <main className={classes.content}>
      <Typography variant="h4">
        Developing an Intuition for Pandemics
      </Typography>

      <Author />

          <div ref={sectionRefs[0]}> <Introduction myRef={el => registerDOM(refMap, 'introduction',el)}/> </div>

          <div ref={sectionRefs[1]}> <WhyIMadeThis myRef={el => registerDOM(refMap,'whyimadethis',el)} data={curItemName}/> </div>


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


          <div ref={sectionRefs[2]}>
          <Agents myRef={el => registerDOM(refMap,'agents',el)} data={curItemName}/>
          </div>


          <div ref={sectionRefs[3]}> <Infection myRef={el => registerDOM(refMap,'infection',el)} data={curItemName}/> </div>


          <div ref={sectionRefs[4]}> <Plotting myRef={el => registerDOM(refMap,'plotting',el)} data={curItemName}/> </div>


          <div ref={sectionRefs[5]}> <MultiLoc myRef={el => registerDOM(refMap,'multiloc',el)} data={curItemName}/> </div>

          <div ref={sectionRefs[6]}> <Graph myRef={el => registerDOM(refMap,'graph',el)} data={curItemName}/> </div>


          <div ref={sectionRefs[7]}> <CityCountryside myRef={el => registerDOM(refMap,'citycountryside',el)} data={curItemName}/> </div>

          <div ref={sectionRefs[8]}> <Protecting myRef={el => registerDOM(refMap,'protecting',el)} data={curItemName}/> </div>

          <div ref={sectionRefs[9]}> <Walkthroughs myRef={el => registerDOM(refMap,'walkthroughs',el)} /> </div>

          <div > <FullSim /> </div>

      <ShoutOuts />
      <Copyright />
    </main>
  );
}
