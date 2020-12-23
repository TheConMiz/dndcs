/**
 * Top-level App component
 */

import React, { Fragment } from 'react'

import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles'

import { CssBaseline, Card } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        type: "dark",
    },
});

const useStyles = makeStyles({
    root: {
        width: 275,
        height: 300,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export const App = () => {

    const classes = useStyles();

    return (
        <Fragment>

            <ThemeProvider theme={theme}>
                
                <div>
                    Sidebar
                </div>

                <div>
                    Body
                </div>

                <div>
                    Footer
                </div>

                <CssBaseline />
                
            </ThemeProvider>
            
        </Fragment>
    );
}
