import React from 'react';
import { Progress, Button, Table, Layout } from 'antd';

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
            conditions: []
        }
    }

    // componentDidMount = () => {
    //     console.log("Database Path: " + dbPath);

    //     let result = knex.select("*").from("Spells").orderBy("level", 'asc').orderBy("name", "asc");

    //     result.then((rows) => {
    //         this.setState({ conditions: rows });
    //     });
    // }

    render() {
        return (     
            <Layout>
                <Sider collapsible>
                    <SideMenu/>
                </Sider>
                <Layout>
                    <Progress percent={50} showInfo={false} status="active" strokeColor="orange" strokeWidth={5}/>
                    <Content>
                        <StatCards dbPath={dbPath} />
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default App;