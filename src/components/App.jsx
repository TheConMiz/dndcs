import React from 'react';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

import SideMenu from './SideMenu';
import SpellTable from './SpellTable';
import StatCards from './StatCards';

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
            light: false
        }
    }

    render() {
        return (     
            <Layout>
                <Sider collapsible theme={this.state.light ? "light" : "dark"}>
                    <SideMenu />
                </Sider>
            </Layout>
        );
    }
}

export default App;