/**
 * Top-level App component
 */

import React, { Fragment } from 'react'

import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles'

import { CssBaseline, Button, Card } from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux'

import { appSlice } from './../slices/Slices'

const { actions } = appSlice

const { toggleSettings } = actions



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

    const dispatch = useDispatch();

    let settingsMenu = useSelector(state => state.app.settingsMenu)

    console.log(settingsMenu)

    return (
        <Fragment>

            <ThemeProvider theme={theme}>

                <CssBaseline />

                <Button
                    onClick={() => {
                        dispatch(toggleSettings(!settingsMenu))
                    }}
                >
                    Test Store : {settingsMenu.toString()}
                </Button>

                
            </ThemeProvider>
            
        </Fragment>
    );
}
