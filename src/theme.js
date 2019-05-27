import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#a3bf61',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#cfcfcf',
        },
        cta: {
            main: '#ff7e30',
        },
        white: {
            main: '#FFF'
        }
    },
});

export default theme;
