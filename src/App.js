import React,{useState,useEffect} from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Layout} from "./components/Layout";
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './theme';

/**
 * Demo app

 */
const App = ({apiRoot, calderaToken,wpNonce}) => {
    /**
     * Track token
     */
    const [token,setToken] = useState(calderaToken);

    /**
     * Get token via remote API
     */
    useEffect( () => {
        if( ! token ){
            const url = wpNonce ? `${apiRoot}/token?_wpnonce=${wpNonce}` : `${apiRoot}/token`;
            fetch(url, {
                method: 'POST'
            })
                .then(r => r.json())
                .then(r => {
                    setToken(r.token);
                })
                .catch(e => console.log(e));
        }
    },[token,setToken]);

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Layout
                    token={token}
                    apiRoot={apiRoot}
                />
            </ThemeProvider>
        </BrowserRouter>
    );
};

App.defaultProps = {
    apiRoot: 'https://calderawp.lndo.site/wp-json/caldera-api/v1/messages/mailchimp/v1',
    wpNonce: null,
    calderaToken: null,

};

export default App;
