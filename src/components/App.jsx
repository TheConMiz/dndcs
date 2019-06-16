import React from 'react';
import { Layout, Input} from 'antd';
import SideMenu from './SideMenu';
import CharPage from './CharPage';
import StatCards from './StatCards';
import { Switch, Route } from 'react-router-dom';

const Search = Input.Search;
const { Header, Footer, Sider, Content } = Layout;

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
            <Layout style={{ minHeight: '100vh' }}>
                <Sider theme="dark" collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" style={{height: '30px', margin: '15px', background: '#4d7'}}/>
                    <SideMenu />
                </Sider>
                <Content>
                    <Switch>
                        <Route exact path="/char" render={() => {
                            <StatCards dbPath={dbPath} />
                        }} />
                    </Switch>
                    
                </Content>
            </Layout>
        );
    }
}

export default App;