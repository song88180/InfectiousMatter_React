import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(6, 0, 3),
  },
  mainp: {
    margin: theme.spacing(3, 0, 3), 
  }, 
}));

function Component_render(obj){
  if(obj.key === "Slider-visitor"){
    return(
      <Box display="flex" mt={4}>
        <Box mx={1}>
          <Typography>Visitors Per Day: </Typography>
        </Box>
        <Box mx={1}>
          <Slider
            defaultValue={10}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="on"
            step={1}
            marks
            min={0}
            max={30}
            style={{width: 200}}
          />
        </Box>
      </Box>
    )
  }
  else if (obj.key == "Button-restart"){
    return(
      <Button variant="contained" color="primary">
        RESTART
      </Button>
    )
  }
  else if (obj.key == "HowDoWeHelp"){
    return(
      <Typography variant='h5'>How Do We Help?</Typography>
    )
  }
}

export default function Simulation({data}) {
  const classes = useStyles();
  return (
    <Box my={4} className={classes.root} minHeight={750}>
      <Typography variant='h4'>
        {data.title}
      </Typography>
      <Typography variant='h5'>
        {data.subtitle}
      </Typography>
      {data.maintext.map((p) => {
        if (typeof p === 'object'){
          return(Component_render(p))
        }
        else{
          return(
            <Typography className={classes.mainp}>
              {p}
            </Typography>
          )
        }
      })}
    </Box>
  );
}
