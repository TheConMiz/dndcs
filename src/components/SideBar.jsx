import React from 'react'

import { Menu, Icon } from 'antd'

export const SideBar = () => {
    
    return (
        <Menu theme="dark" mode="inline">

            <Menu.Item key="1">

                <Icon type="user" />
                <span>Character</span>
            </Menu.Item>

            <Menu.Item key="4">
                <Icon type="save" />
                <span>Save</span>
            </Menu.Item>
            
            <Menu.Item key="5">
                <Icon type="info-circle" />
                <span>About</span>
            </Menu.Item>
        </Menu>
    );
}