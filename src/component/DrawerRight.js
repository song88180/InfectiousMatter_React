import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const scrollToRef = (ref) => {
  window.scrollTo(0, ref.offsetTop);
}

function DrawerRight(props) {
  
  const classes = useStyles();
  const navlist = [
    'Introduction',
    'Why I made this',
    'Simple Agents',
    'Infections',
    'Plots',
    'Metapopulations',
    'Contact Graphs',
    'Example: Cities and Countryside',
    'Protecting Our Small Towns',
    'More Walkthroughs'
  ];



  return (
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
      >
        <div className={classes.toolbar} />
        <List>
          {navlist.map((text, index) => (
            <ListItem
              button
              selected={props.index === index}
              key={text}
              onClick={() => scrollToRef(props.refList.current[index])}
            >
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
  );
}

export default DrawerRight;
