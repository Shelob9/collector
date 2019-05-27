import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import {Link} from "react-router-dom";

const useStyles = makeStyles({
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
        color: 'white'
    },
});

const MenuList = ({className, classNameMenuList}) => (
    <ul className={className}>
        <li className={classNameMenuList}>
            <Link to="/">Home</Link>

        </li>
        <li className={classNameMenuList}>
            <Link to="/surveys">Surveys</Link>
        </li>
    </ul>
);


export const TopBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        CalderaWP User and Community Surveys
                    </Typography>
                    <nav className={classes.nav}>
                        <MenuList className={classes.menuList} classNameMenuList={classes.menuListItem}/>
                    </nav>
                </Toolbar>
            </AppBar>
        </div>
    );
}
