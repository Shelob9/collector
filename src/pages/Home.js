import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from "react-router-dom";
const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
    },
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export const Home = props => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <List component="nav">
                <ListItem>
                    <Link to={'/surveys'}>Surveys</Link>
                </ListItem>
            </List>
            <List component="nav">
                <ListItemLink href={'https://CalderaForms.com'}>
                    <ListItemText primary="Caldera Forms" />
                </ListItemLink>
            </List>
        </div>
    );
};
