import React, {useState, createRef, useEffect, useRef, useLayoutEffect, useContext} from 'react';
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
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import {IMContext} from '../SimComponents/IMApp';

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

function BirthSlider({setBirthRate}){
  const handleChange = (event,newValue) => {
    setBirthRate(newValue);
  }
  return(
    <Box mt={4}>
        <Typography>{'Birth Rate:'}</Typography>
        <Typography>{'(per agent per day)'}</Typography>
        <Slider
          defaultValue={0.05}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={0.005}
          marks
          min={0}
          max={0.1}
          style={{width: 200}}
          onChangeCommitted={handleChange}
        />
    </Box>
  )
}

function KSlider({setK,curItemName}){
  const handleChange = (event,newValue) => {
    setK(newValue);
  }
  return(
    <Box mt={4} display={curItemName == 'logistic' ? 'block':'none'}>
      <Typography>{'K:'}</Typography>
      <Typography>{'(environment capacity)'}</Typography>
      <Slider
        defaultValue={100}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={200}
        style={{width: 200}}
        onChangeCommitted={handleChange}
      />
    </Box>
  )
}

export default function GrowthModel({refMap, curItemName, setCurItemName}) {
  const { InfectiousMatterRef, InfectiousMatterAPI} = useContext(IMContext);
  const classes = useStyles();
  const [worldReadyTrigger, setWorldReadyTrigger] = useState(0);
  const [redraw_trigger, setRedrawTrigger] = useState(0);
  const [birthRate, setBirthRate] = useState(0.05);
  const [K, setK] = useState(100);
  const name_list = useRef(['exponential', 'logistic'])

  const sectionRefs = [
    useRef(null),useRef(null)
  ]

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -500,
  });

  const resetSimulation = (e) => {
    InfectiousMatterAPI(InfectiousMatterRef, {type: 'clear_simulator'});
    setRedrawTrigger(c=>c+1);
  }

  function registerDOM(refMap, _name, _ref){
    refMap.current[_name] = createRef();
    refMap.current[_name] = _ref;
  }

  useEffect(() => {
    setCurItemName(name_list.current[activeSection]);
    resetSimulation();
  },[activeSection])

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
          birthRate={birthRate}
          K={K}
        />
        <div>
          <BirthSlider setBirthRate={setBirthRate} />
          <KSlider setK={setK} curItemName={curItemName}/>
          <Button variant="contained" onClick={resetSimulation} color="primary">Reset</Button>
        </div>
      </div>
      <div ref={sectionRefs[1]}> <Logistic myRef={el => registerDOM(refMap,'logistic',el)} /> </div>

      <ShoutOuts />
      <Copyright />
    </main>
  );
}
