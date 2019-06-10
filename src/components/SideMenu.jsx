import { Layout, Menu, Icon } from 'antd';
import ReactDOM from 'react-dom';
import React from 'react';

const { Header, Content, Footer, Sider } = Layout;

class SideMenu extends React.Component{
    constructor() {
        super();

        this.state = {
            
        }
    }

    render() {
        return (

            <Sider
                breakpoint="lg"
                collapsedWidth="5"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <Menu theme="dark" mode="vertical" defaultSelectedKeys={['4']}>
                    <Menu.Item key="1">
                        <Icon type="user" />
                        <span className="nav-text">nav 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="video-camera" />
                        <span className="nav-text">nav 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="upload" />
                        <span className="nav-text">nav 3</span>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Icon type="user" />
                        <span className="nav-text">nav 4</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}

export default SideMenu;