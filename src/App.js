import React, {useRef, useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

import Sidebar from './component/Sidebar.js';
import Introduction from './pages/Pandemics/Introduction';
import Pandemics from './pages/Pandemics';
import GrowthModel from './pages/GrowthModel';
import Opening from './pages/Opening';

import IMApp from './SimComponents/IMApp';

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
  const refMap = useRef(new Map());
  const items = useRef(null);
  const curItemName = useRef(null); // the current name of item (where is the scrolling position)

  const scrollToRef = (e, item) => {
    if (refMap.current[item.name]) {
      window.scrollTo(0, refMap.current[item.name].offsetTop);
    }
    else{
      curItemName.current=item.name;
    }
  }

  items.current = [
    {
      name: "opening",
      label: "Opening" ,
      to: '/opening',
      onClick: scrollToRef
    },
    "divider",
    {
      name: "growthmodel",
      label: "Growth Model",
      to: '/growthmodel',
      onClick: scrollToRef,
      items: [
        { name: "exponential", label: "Exponential Growth", to:'/growthmodel',onClick: scrollToRef },
        { name: "logistic", label: "Logistic" , to:'/growthmodel',onClick: scrollToRef}
      ]
    },
    "divider",
    {
      name: "pandemics",
      label: "Pandemics",
      to: '/pandemics',
      onClick: scrollToRef,
      items: [
        {name: 'introduction', label: "Introduction", to: '/pandemics', onClick: scrollToRef},
        {name: 'whyimadethis', label: "Why I made this", to: '/pandemics', onClick: scrollToRef},
        {name: 'agents', label: 'Simple Agents', to: '/pandemics', onClick: scrollToRef},
        {name: 'infection', label: 'Infections', to: '/pandemics', onClick: scrollToRef},
        {name: 'plotting', label: 'Plots', to: '/pandemics', onClick: scrollToRef},
        {name: 'multiloc', label: 'Metapopulations', to: '/pandemics', onClick: scrollToRef},
        {name: 'graph', label: 'Contact Graphs', to: '/pandemics', onClick: scrollToRef},
        {name: 'citycountryside', label: 'Example: Cities and Countryside', to: '/pandemics', onClick: scrollToRef},
        {name: 'protecting', label: 'Protecting Our Small Towns', to: '/pandemics', onClick: scrollToRef},
        {name: 'walkthroughs', label: 'More Walkthroughs', to: '/pandemics', onClick: scrollToRef}
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
    <IMApp>
      <Router>
        <Box className={classes.root}>
          <Sidebar items={items} refMap={refMap} />
          <Switch>
            <Route path='/pandemics'>
              <Pandemics refMap={refMap} curItemName={curItemName}/>
            </Route>
            <Route path='/growthmodel'>
              <GrowthModel refMap={refMap} curItemName={curItemName}/>
            </Route>
            <Route path={'/'}>
              <Opening refMap={refMap} curItemName={curItemName}/>
            </Route>
          </Switch>
        </Box>
      </Router>
    </IMApp>
  );
}
