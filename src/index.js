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
        user: {
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
        
        character: {
            
        },

        app: {

            settingsMenu: false,
        },

        assets: {
            // abilityScore: [],
            // condition: [],
            // damageType: [],
            // spellComponent: [],
            // magicSchool: [],
            // level: [],
            // source: [],            
            spell: [],
            classe: [],
            subClass: [],

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