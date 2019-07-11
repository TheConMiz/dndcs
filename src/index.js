import React from 'react';
import {render} from 'react-dom';
import App from './components/App';

import { HashRouter } from 'react-router-dom';

import { createStore } from 'redux';

import { Provider } from 'react-redux';

// Database Path variables
const path = window.require('path');
let dbPath;
const isDev = window.require('electron-is-dev');

if (isDev) {
    console.log("DEV MODE");
    dbPath = path.resolve('./public/data/database/DnDCS.db');
    console.log(dbPath);
}

else {
    console.log("PROD MODE");
    dbPath = path.resolve('./resources/app/public/data/database/DnDCS.db');
    console.log(dbPath);
}

function reducer(state, action) {
    switch (action.type) {
        case "getDBPath":
            return action.payload.dbPath;
    }
}

const action = {
    type: "getDBPath",
    payload: {
        dbPath: dbPath
    }
}

const store = createStore(reducer);

store.dispatch(action);

console.log(store.getState());

render(
    <Provider store={store}>
        <HashRouter>
            <App dbPath={dbPath}/>
        </HashRouter>
    </Provider>
    , document.getElementById('root')
);