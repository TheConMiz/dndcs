import React from 'react'

import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

// const { SubMenu } = Menu;


export const SideBar = () => {

    return (
    
        <Sider
            collapsible
            // collapsed={collapsed}
            // onCollapse={this.onCollapse}
        >

            <div
                className="logo"
                style={{
                    height: "32px",
                    margin: "16px",
                    background: "rgba(255, 255, 255, 0.3)"
                }}
            />
            
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                    Option 1
                </Menu.Item>
                
                <Menu.Item key="2" icon={<DesktopOutlined />}>
                    Option 2
                </Menu.Item>

            </Menu>

        </Sider>
    )
}
