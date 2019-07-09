import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { HashRouter } from 'react-router-dom';

import { createStore } from 'redux';

import { Provider } from 'react-redux';

// Database Path variables
const path = window.require('path');
let dbPath;
const isDev = window.require('electron-is-dev');

//TODO:Handle DEV/PROD database path discrepency
if (isDev) {
    console.log("DEV MODE");
    dbPath = path.resolve('./public/data/database/DnDCS.db');
}

//TODO: Fix path to allow for installed instance
else {
    console.log("PROD MODE");
    dbPath = path.resolve('./../../public/data/database/DnDCS.db');
}

// const store = createStore();

ReactDOM.render(
        <HashRouter>
            <App/>
        </HashRouter>
    , document.getElementById('root')
);