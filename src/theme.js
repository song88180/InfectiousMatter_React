import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },

  typography: {
    useNextVariants: true,
    suppressDeprecationWarnings: true,
    h4: {
      "fontSize": 40,
      "fontWeight": 400,
    },
    h5: {
      "marginBottom": 20,
    }
  },
});

export default theme;
