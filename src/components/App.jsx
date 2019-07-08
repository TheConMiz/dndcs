import React from 'react';
// import {Route, Switch} from 'react-router-dom';

import '@blueprintjs/core/lib/css/blueprint.css';
import CharPage from './CharPage';

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

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            light: false,
            collapsed: false
        }
    }

    onCollapse = () => {
        this.setState({ collapsed: !this.state.collapsed });
    }

    render() {
        return (
            <div className="bp3-dark">
                <CharPage dbPath={dbPath} />
            </div>
        );
    }
}

export default App;