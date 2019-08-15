import React from 'react';
import {render} from 'react-dom';
import App from './components/App';

import { HashRouter } from 'react-router-dom';

import { createStore, combineReducers } from 'redux';

import { Provider } from 'react-redux';

import characterReducer from './reducers/characterReducer';
import appReducer from './reducers/appReducer';

// Database Path variables
const path = window.require('path');
let dbPath;
const isDev = window.require('electron-is-dev');

if (isDev) {
    console.log("DEV MODE");
    dbPath = path.resolve('./public/data/database/DnDCS.db');
    // console.log(dbPath);
}

else {
    console.log("PROD MODE");
    dbPath = path.resolve('./resources/app.asar.unpacked/public/data/database/DnDCS.db');
    // console.log(dbPath);
}

/**
 * React Redux Segment
 */




const allReducers = combineReducers({
    character: characterReducer,
    app: appReducer
})

const store = createStore(
    allReducers,
    
    {
        character: [
            { characterName: ""},
            { playerName: "" },
            { classes: []}
        ],
        app: [
            {dbPath: dbPath}
        ]
    },

    window.__REDUX_DEVTOOLS_EXTENSION__ && window.devToolsExtension()

);

const charNameAction = {
    type: "updateCharName",
    payload: {
        characterName: "Test Testerton"
    }
};

//store.dispatch(charNameAction);

console.log(store.getState());

/**
 * End of React Redux Segment
 */


render(
    <Provider store={store}>
        <HashRouter>
            <App dbPath={dbPath}/>
        </HashRouter>
    </Provider>
        
    
    , document.getElementById('root')
);