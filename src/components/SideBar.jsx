import React from 'react'

import { Menu, Icon } from 'antd'

import { GithubOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons'


export const SideBar = () => {
    
    return (
        <Menu theme="dark" mode="inline">

            <Menu.Item
                key="1"
            >
                <UserOutlined/>
                <span>Character</span>
            
            </Menu.Item>

            <Menu.Item
                key="2"
            >
                <SettingOutlined />
                <span>Settings</span>
            
            
            </Menu.Item>
            
            <Menu.Item
                key="3"
            >
                <GithubOutlined />
                
                <span>View Repository</span>
            
            </Menu.Item>
        </Menu>
    );
}