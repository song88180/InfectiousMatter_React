import React, {useState, useRef, createRef, useEffect} from 'react';
import { Scrollama, Step } from 'react-scrollama';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

import DrawerRight from './component/DrawerRight';
import Sidebar from './component/Sidebar.js';

import Introduction from './pages/Pandemics/Introduction';
import WhyIMadeThis from './pages/Pandemics/WhyIMadeThis';
import Simulation from './component/Simulation';
import Agents from './pages/Pandemics/Agents';
import Infection from './pages/Pandemics/Infection';
import Plotting from './pages/Pandemics/Plotting';
import MultiLoc from './pages/Pandemics/MultiLoc';
import Graph from './pages/Pandemics/Graph';
import CityCountryside from './pages/Pandemics/CityCountryside';
import Protecting from './pages/Pandemics/Protecting';
import Walkthroughs from './pages/Pandemics/Walkthroughs';
import FullSim from './pages/Pandemics/FullSim';
import ShoutOuts from './pages/Pandemics/ShoutOuts';
import Author from './component/Author';
import MatterDiv from './component/MatterDiv';
import Pandemics from './pages/Pandemics';
import GrowthModel from './pages/GrowthModel';
import Opening from './pages/Opening';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    margin: theme.spacing(0,"auto"),
    backgroundColor: theme.palette.background.default,
    maxWidth: 1000,
    padding: theme.spacing(0,4),
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
  const refMap = useRef(new Map());

  const items = useRef(null);

  const scrollToRef = (e, item) => {
    window.scrollTo(0, refMap.current[item.name].offsetTop);
  }

  items.current = [
    {
      name: "opening",
      label: "Opening" ,
      to: '/opening',
    },
    "divider",
    {
      name: "growthmodel",
      label: "Growth Model",
      to: '/growthmodel',
      items: [
        { name: "exponential", label: "Exponential Growth",onClick: scrollToRef },
        { name: "logistic", label: "Logistic" ,onClick: scrollToRef}
      ]
    },
    "divider",
    {
      name: "pandemics",
      label: "Pandemics",
      to: '/pandemics',
      items: [
        {name: 'introduction', label: "Introduction" , onClick: scrollToRef},
        {name: 'whyimadethis', label: "Why I made this" , onClick: scrollToRef},
        {name: 'agents', label: 'Simple Agents', onClick: scrollToRef},
        {name: 'infection', label: 'Infections', onClick: scrollToRef},
        {name: 'plotting', label: 'Plots', ref:'', onClick: scrollToRef},
        {name: 'multiloc', label: 'Metapopulations', onClick: scrollToRef},
        {name: 'graph', label: 'Contact Graphs', onClick: scrollToRef},
        {name: 'citycountryside', label: 'Example: Cities and Countryside', onClick: scrollToRef},
        {name: 'protecting', label: 'Protecting Our Small Towns',  onClick: scrollToRef},
        {name: 'walkthroughs', label: 'More Walkthroughs', onClick: scrollToRef}
      ]
    }
  ]


  useEffect(() => {

  }, [])

  // const [currentStepIndex, setCurrentStepIndex] = useState(null);
  // const onStepEnter = ({ data }) => {
  //   setCurrentStepIndex(data);
  // };

  return (
    <Router>
      <Box className={classes.root}>
        <Sidebar items={items} refMap={refMap} />

        <Switch>
          <Route path='/pandemics'>
            <Pandemics refMap={refMap}/>
          </Route>
          <Route path='/growthmodel'>
            <GrowthModel refMap={refMap}/>
          </Route>
          <Route path={'/'}>
            <Opening refMap={refMap}/>
          </Route>
        </Switch>
      </Box>
    </Router>
  );
}
