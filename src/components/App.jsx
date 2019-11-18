import React, { Fragment } from 'react';

import { createMuiTheme, CssBaseline, Grid } from '@material-ui/core';

import { ThemeProvider } from '@material-ui/styles';

import { green, orange } from '@material-ui/core/colors';

// import SpellTable from './SpellTable';
import NameInput from './NameInput';
import XPMonitor from './XPMonitor';
import LevelView from './LevelView';
import DataPuller from './DataPuller';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: orange,
        secondary: green,
        background: {
            default: "#302929"
        }
    }
});

export default function App() {

    return (
        
        <ThemeProvider theme={theme}>
            
            <DataPuller />

            <CssBaseline />
            
            <Grid
                container
                spacing={4}
                alignItems="center"
                justify="space-evenly"
                alignItems="center"
                direction="column"
            >
                <br/>
                <br />
                
                <Grid item>
                    <XPMonitor/>
                </Grid>
                
                <Grid item container direction="row" justify="center" alignItems="center">
                    <Grid item>
                        <LevelView/>
                    </Grid>

                    <Grid item>
                        <NameInput />
                    </Grid>
     
                </Grid>

                {/* <Grid item>
                    <SpellTable />
                </Grid> */}
            </Grid>
            
        </ThemeProvider>
    );
}
