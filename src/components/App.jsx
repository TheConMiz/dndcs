import React, {useEffect} from 'react';

import { createMuiTheme, CssBaseline, Grid, Button } from '@material-ui/core';

import { ThemeProvider } from '@material-ui/styles';

import { green, orange } from '@material-ui/core/colors';

import { useSelector, useDispatch } from 'react-redux';


import { UPDATE_RULE_LEVEL } from './../actions/rulesActions';

import { UPDATE_SPELLS } from './../actions/appActions';

import SpellTable from './SpellTable';
import NameInput from './NameInput';
import XPMonitor from './XPMonitor';
import LevelView from './LevelView';

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

function saveDataToRedux(dbPath) {
    let knex = window.require('knex')({
        client: "sqlite3",
        connection: {
            filename: dbPath
        },
        useNullAsDefault: true,
        debug: true
    });

    const dispatch = useDispatch();

    let dbQuery = knex({
        lvl: 'Rule-Level'
    })

        .select({
            level: "lvl.level",
            xp: "lvl.xp",
        })

        .orderBy("lvl.level", "asc");

    dbQuery.then((rows) => {
        dispatch({ type: UPDATE_RULE_LEVEL, payload: rows });
    })

    dbQuery = knex({
        sp: "Spell"
    })
        .select({
            name: "sp.name",
            level: "sp.level",
            id: "sp.index"
        })
    
        .orderBy("sp.level", "asc")
        .orderBy("sp.name", "asc")
    
    dbQuery.then((rows) => {
        dispatch({type: UPDATE_SPELLS, payload: rows})
    })
    
}

function pullData() {
    const dbPath = useSelector(state => state.app.dbPath);

    saveDataToRedux(dbPath);
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

                <Grid item>
                    <SpellTable />
                </Grid>
            </Grid>
            
        </ThemeProvider>
    );
}
