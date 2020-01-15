import React from 'react';

import { createMuiTheme, CssBaseline, Grid } from '@material-ui/core';

import { ThemeProvider, makeStyles } from '@material-ui/styles';

import DataPuller from './DataPuller';

import SpellTable from './SpellTable';
import NameInput from './NameInput';
import LevelView from './LevelView';

const theme = createMuiTheme({
    // palette: {
    //     type: 'dark',
    //     primary: orange,
    //     secondary: green,
    //     background: {
    //         default: "#302929"
    //     }
    // }
});

const useStyles = makeStyles({
    mainGrid: {
        width: '100%',
        height: '100%',
    }
})



export default function App() {

    const classes = useStyles();

    return (
        
        <ThemeProvider theme={theme}>
            
            <DataPuller />

            <CssBaseline />
            
            <Grid
                className={classes.mainGrid}
                container
                spacing={4}
                alignItems="center"
                justify="space-evenly"
                alignItems="center"
                direction="column"
            >
                <br/>
                <br/>
                <Grid item>
                    <NameInput/>
                </Grid>

                <Grid
                    item
                >
                    <LevelView/>
                </Grid>

                <Grid
                    item
                >
                    <SpellTable />
                </Grid>
                

            </Grid>
            
        </ThemeProvider>
    );
}
