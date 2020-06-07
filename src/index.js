import React from 'react'

import { render } from 'react-dom'

import { App } from './components/App'

import { createStore, combineReducers } from 'redux';

import { Provider } from 'react-redux';

import characterReducer from './reducers/characterReducer';
import appReducer from './reducers/appReducer';
import rulesReducer from './reducers/rulesReducer';

// Database Path variables
const path = window.require('path');
let dbPath;
const isDev = window.require('electron-is-dev');

if (isDev) {
    console.log("DEV MODE");
    dbPath = path.resolve('./public/data/database/DnDCS.db');
}

else {
    console.log("PROD MODE");
    dbPath = path.resolve('./resources/app.asar.unpacked/public/data/database/DnDCS.db');
}

/**
 * React Redux Segment
 */

const allReducers = combineReducers({
    character: characterReducer,
    app: appReducer,
    rules: rulesReducer
})

const store = createStore(
    allReducers,

    {
        character: {
            name: "",
            race: {},
            classes: [],
            background: {},
            xp: 0,
            level: 0,
            knownSpells: [],
            equipment: [],
            maxPreparedSpells: 0,
            maxKnownSpells: 0,
            abilityScores: []
        },
        app: {
            dbPath: dbPath,
            spells: [],
            spellSearch: "",
            classes: [],
            subClasses: [],
        },
        rules: {
            abilityScores: [],
            conditions: [],
            damageTypes: [],
            spellComponents: [],
            magicSchools: [],
            levels: [],
            sources: [],  
        }
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/**
 * End of React Redux Segment
 */

render(
    
    <Provider store={store}>
        <App/>
    </Provider> 
    
    , document.getElementById('root')
);