import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {theSurveys} from "../theSurveys";
import {Link} from 'react-router-dom'
const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
    },
}));




export const Surveys = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <List component="nav">
                {theSurveys.map(survey => {
                    const {
                        listId,
                        title,
                        uri
                    } = survey;
                    return (
                        <ListItem
                            key={`${listId}-${uri}`}
                        >
                            <Link to={uri}>{title}</Link>
                        </ListItem>
                    )
                })}
            </List>
        </div>
    );
};
