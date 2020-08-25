import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Image from 'material-ui-image';
import teaser from '../../assets/teaser.png';
import Fade from "@material-ui/core/Fade";


const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 0, 10),
  },
  mainp: {
    margin: theme.spacing(3, 0, 3),
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
      <Fade in={props.data === 2} timeout={1200}>
        <Typography variant='h5'>
          Logistic Growth
        </Typography>
      </Fade>
      <Typography className={classes.mainp}>
        quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
      </Typography>
      <Typography className={classes.mainp}>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
      </Typography>
    </Box>
  );
}
