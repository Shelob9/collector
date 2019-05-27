import React from 'react';
import {TopBar} from "./TopBar";
import {Home} from "../pages/Home";
import {Surveys} from "../pages/Surveys";
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import {Route} from 'react-router-dom'
import {theSurveys} from "../theSurveys";
import {SurveyPage} from "./SurveyPage";

const useStyles = makeStyles(theme => ({
    root: {
    },
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        minHeight:'800px'
    },
}));


export const Layout = ({children,token}) => {
    const classes = useStyles();
    const onSubmit = (values) => console.log(values);

    const CalderaUserSurvey = () => {
        const props = {
            ...theSurveys[0],
            onSubmit,
            token
        };
        return (
            <SurveyPage {...props} />
        )
    };
    const JavaScriptSurvey = () => {
        const props = {
            ...theSurveys[1],
            onSubmit,
            token
        };
        return (
            <SurveyPage {...props} />
        );
    };

    return (
        <Container className={classes.root}>
            <TopBar/>
            <Container className={classes.container}>
                <main className={classes.content}>
                    <Paper className={classes.paper}>

                        <Route path="/" exact component={Home} />
                        <Route path="/surveys/" component={Surveys} />
                        <Route path={theSurveys[0].uri} component={CalderaUserSurvey} />
                        <Route path={theSurveys[1].uri} component={JavaScriptSurvey} />

                        {children}
                    </Paper>
                </main>

            </Container>
        </Container>
    )
};
