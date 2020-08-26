import React, {useState, useRef, createRef, useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import ShoutOuts from './Pandemics/ShoutOuts';
import Author from '../component/Author';

import MatterDiv from '../component/MatterDiv';


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

export default function Opening({refMap, curItemName}) {
  const classes = useStyles();
  const refList = useRef([]);

  const [currentStepIndex, setCurrentStepIndex] = useState(null);
  const onStepEnter = ({data}) => {
    setCurrentStepIndex(data);
  };
  useEffect(() => {
    console.log(curItemName.current, 'onload Opening');
    let curRef = refMap.current[curItemName.current];
    if (curRef) {
      window.scrollTo(0, curRef.offsetTop);
    } else {
      window.scrollTo(0, 0);
    }
  }, [])

  return (
    <main className={classes.content}>
      <Typography variant="h4">
        Dynamics of Infectious Disease
      </Typography>

      <Author/>
      <div>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
          dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
          amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
          laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
          voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
          pariatur?
        </p>
      </div>

      <ShoutOuts/>
      <Copyright/>
    </main>
  );
};
