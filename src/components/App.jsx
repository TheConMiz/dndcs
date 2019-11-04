import React, {useEffect} from 'react';

import { createMuiTheme, CssBaseline, Grid, Button } from '@material-ui/core';

import { ThemeProvider } from '@material-ui/styles';

import { green, orange } from '@material-ui/core/colors';

import { useSelector, useDispatch } from 'react-redux';

import getRulesLevel from './../DataPuller';

import { UPDATE_RULE_LEVEL } from './../actions/rulesActions';

import SpellTable from './SpellTable';
import NameInput from './NameInput';
import XPMonitor from './XPMonitor';

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

function pullData() {
    
    const dbPath = useSelector(state => state.app.dbPath);
    
    const levels = getRulesLevel(dbPath);

    const dispatch = useDispatch();

    dispatch({ type: UPDATE_RULE_LEVEL, payload: levels });
}


export default function App() {

    pullData();

    return (
        
        <ThemeProvider theme={theme}>

            <CssBaseline />
            
            <Grid
                container
                spacing={4}
                alignItems="center"
                justify="center"
                direction="column"
            >
                <Grid
                    item
                >
                    <XPMonitor/>
                </Grid>
                
                <Grid item>
                    <NameInput />
                </Grid>

                <Grid item>
                    <SpellTable />
                </Grid>
            </Grid>
            
        </ThemeProvider>
    );
}
