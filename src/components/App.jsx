import React from 'react';

import { connect } from 'react-redux';

import { Layout } from 'antd';



import '@blueprintjs/core/lib/css/blueprint.css';
import CharPage from './CharPage';
import MainStats from './MainStats';

import SideBar from './SideBar';

import { updateCharName } from './../actions/characterActions';

import { Pane } from 'evergreen-ui';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        };
    }

    onCollapse = () => {
        this.setState({ collapsed: !this.state.collapsed });
    }

    render() {
        return (
            <Layout style={{ height: '100vh' }}>
                <Layout.Sider theme="dark" collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div style={{ height: '30px', margin: '15px', background: '#4d7' }} />
                    <SideBar />
                </Layout.Sider> 

                <Layout.Content>
                    <Pane
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        justifyContent="space-evenly"
                    >

                        <CharPage dbPath={this.props.dbPath} />
                        <MainStats dbPath={this.props.dbPath} />
                    </Pane>    
                </Layout.Content>
            </Layout>  
        );
    }
}

const mapStateToProps = state => {
    return state;
};

const mapActionsToProps = {
    onUpdateCharName: updateCharName
};

export default connect(mapStateToProps, mapActionsToProps) (App);