import React, {useState, createRef, useEffect, useRef, useLayoutEffect} from 'react';
//import { Scrollama, Step } from 'react-scrollama';
import useScrollSpy from 'react-use-scrollspy';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import ShoutOuts from './Pandemics/ShoutOuts';
import Author from '../component/Author';
import Exponential from "./GrowthModel/Exponential";
import Logistic from "./GrowthModel/Logistic";
import GrowthSimulation from "../SimComponents/GrowthSimulation";
import GrowthPlot from "../SimComponents/GrowthPlot";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
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

export default function GrowthModel({refMap, curItemName, setCurItemName}) {
  const classes = useStyles();
  const [worldReadyTrigger, setWorldReadyTrigger] = useState(0);
  const [redraw_trigger, setRedrawTrigger] = useState(0);
  const name_list = useRef(['exponential', 'logistic'])

  const sectionRefs = [
    useRef(null),useRef(null)
  ]

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -500,
  });

  useEffect(() => {
    console.log('activeSection',activeSection);
    setCurItemName(name_list.current[activeSection]);
    setRedrawTrigger(c => c+1);
  },[activeSection])

  function registerDOM(refMap, _name, _ref){
    refMap.current[_name] = createRef();
    refMap.current[_name] = _ref;
  }

  useEffect(() => {
    console.log(curItemName,'onload GrowthModel');
    let curRef = refMap.current[curItemName];
    if (curRef){
      window.scrollTo(0, curRef.offsetTop-350);
    }
    else {
      setCurItemName('exponential');
      window.scrollTo(0, 0);
    }
  },[])

  return (
    <main className={classes.content}>
      <Typography variant="h4">
        Growth Models
      </Typography>

      <Author />

      <div ref={sectionRefs[0]}> <Exponential myRef={el => registerDOM(refMap,'exponential',el)} /> </div>
      <div style={{
        position:"sticky", top: 0, height:300, zIndex:20, display:'flex', justifyContent:'space-evenly',
        background: "rgba(255,255,255,.9)", marginBottom:150
      }}>
        <GrowthPlot
          redraw_trigger={redraw_trigger}
        />
        <GrowthSimulation
          setWorldReadyTrigger={setWorldReadyTrigger}
          redraw_trigger={redraw_trigger}
          divSize={300}
          curItemName={curItemName}
        />
      </div>
      <div ref={sectionRefs[1]}> <Logistic myRef={el => registerDOM(refMap,'logistic',el)} /> </div>

      <ShoutOuts />
      <Copyright />
    </main>
  );
}
