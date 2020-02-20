import React from 'react'

import { Menu, Icon } from 'antd'

export const SideBar = () => {
    
    return (
        <Menu theme="dark" mode="inline">

            {/* <Menu.Item key="1">

                <Icon type="user" />
                <span>Character</span>
            </Menu.Item>

            <Menu.Item key="2">
                <Icon type="save" />
                <span>Save</span>
            </Menu.Item> */}

            <Menu.Item
                key="3"
            >
                <Icon type="setting" />
                <span>Settings</span>
            </Menu.Item>
            
            <Menu.Item
                key="4"
                onClick={() => {

                }}
            >
                <Icon type="github" />
                <span>View Repository</span>
            </Menu.Item>
        </Menu>
    );
}