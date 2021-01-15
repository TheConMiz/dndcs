/**
 * Top-level App component
 */

import React, { Fragment } from 'react';

import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';

import { CssBaseline, Button, Paper } from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux';

import { appSlice } from './../slices/Slices';

const { actions } = appSlice;

const { toggleSettings } = actions;



const theme = createMuiTheme({
    palette: {
        type: "dark",
    },
});

const useStyles = makeStyles({
    paper: {
        width: 275,
        height: 300,
    },
});

export const App = () => {

    const classes = useStyles();

    const dispatch = useDispatch();

    let settingsMenu = useSelector(state => state.app.settingsMenu);

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
