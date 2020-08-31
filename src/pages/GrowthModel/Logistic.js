import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Fade from "@material-ui/core/Fade";
import logistic_formula from '../../assets/logistic_formula.gif';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 0, 10),
  },
  mainp: {
    margin: theme.spacing(3, 0, 3),
  },
  formula: {
    margin: theme.spacing(3, 0, 3),
    fontWeight: "bold",
    textAlign: "center",
  },
  img: {
    width: "100%",
    height: "auto",
  },
  hl: {
    backgroundColor: "#faa05a",
    color: "#fff",
    fontSize:".875rem",
    padding: "0 10px",
    display: "inline-block",
  }
}));

export default function Logistic(props) {
  const classes = useStyles();
  return (
    <Box className={classes.root} color="textSecondary" ref={props.myRef} >
      <Typography variant='h4' >
        Logistic Growth
      </Typography>
      <Fade in={props.data === 1} timeout={1200}>
        <Typography variant='h5'>
          Logistic Growth
        </Typography>
      </Fade>
      <Typography className={classes.mainp}>
        Of course, most populations are constrained by limitations on resources -- even in the short run -- and none is unconstrained forever. The following figure shows two possible courses for growth of a population, the green curve following an exponential (unconstrained) pattern, the blue curve constrained so that the population is always less than some number K. When the population is small relative to K, the two patterns are virtually identical -- that is, the constraint doesn't make much difference. But, for the second population, as P becomes a significant fraction of K, the curves begin to diverge, and as P gets close to K, the growth rate drops to 0.
      </Typography>
      <Typography className={classes.mainp}>
        We may account for the growth rate declining to 0 by including in the model a factor of 1 - P/K -- which is close to 1 (i.e., has no effect) when P is much smaller than K, and which is close to 0 when P is close to K. The resulting model,
      </Typography>
      <Typography className={classes.formula}>
        <img src={logistic_formula}/>
      </Typography>
      <Typography className={classes.mainp}>
        is called the logistic growth model. The word "logistic" has no particular meaning in this context, except that it is commonly accepted.
      </Typography>
    </Box>
  );
}
