import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    nav:{
      display: 'inline',
    },
    menuList: {
        display: 'inline',
        padding: '6px',
    },
    menuListItem: {
        display: 'inline',
        color: theme.palette.white.main,
    },
    menuListA: {
        color: theme.palette.white.main,
        padding: '6px',

    }
}));




export const TopBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        CalderaWP User and Community Surveys
                    </Typography>
                    <nav className={classes.nav}>
                        <ul className={classes.menuList}>
                            <li className={classes.menuListItem}>
                                <Link className={classes.menuListA} to="/">Home</Link>
                            </li>
                            <li className={classes.menuListItem}>
                                <Link className={classes.menuListA} to="/surveys">Surveys</Link>
                            </li>
                        </ul>

                    </nav>
                </Toolbar>
            </AppBar>
        </div>
    );
}
