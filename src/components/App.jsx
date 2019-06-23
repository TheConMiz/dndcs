import React from 'react';
import { Layout, Input} from 'antd';
import SideMenu from './SideMenu';
import StatCards from './StatCards';
import SkillTable from './SkillTable';
import {Route, Switch} from 'react-router-dom';

//TODO: FILE READING
const fs = window.require('fs');

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
            <Layout style={{ height: '100vh' }}>
                <Sider theme="dark" collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" style={{height: '30px', margin: '15px', background: '#4d7'}}/>
                    <SideMenu />
                </Sider>
                    {/* <div style={{top: '0'}}>
                        <Progress percent={100} status="active" showInfo={false} strokeColor="orange" strokeLinecap="square" strokeWidth={5} />
                    </div> */}
                {/* <Switch>
                    <Route exact path='/char' component={SkillTable}/>
                </Switch>     */}
               
                
                <Content>
                    <Switch>
                        <Route exact path='/char' render={() => 
                            <div>
                                
                                <SkillTable dbPath={dbPath} />
                                <StatCards dbPath={dbPath} />
                            </div>
                        } />
                    </Switch>

                </Content>

            </Layout>
        );
    }
}

export default App;