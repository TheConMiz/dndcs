import React from 'react'

import { Menu, Icon } from 'antd'

import { useSelector, useDispatch } from 'react-redux'

import { GithubOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons'

import { UPDATE_STATE_SETTINGS_MENU } from './../actions/appActions';



export const SideBar = () => {
    
    const dispatch = useDispatch()

    const settingsOpen = useSelector(state => state.app.settings)

    return (
        <Menu
            theme="dark"
            mode="inline"
            
        >

            {/* <Menu.Item
                key="1"
            >
                <UserOutlined/>
                <span>Character</span>
            
            </Menu.Item> */}

            <Menu.Item
                key="1"
                onClick={() => {
                    
                    dispatch({ type: UPDATE_STATE_SETTINGS_MENU, payload: !settingsOpen })
                }}
                
            >
                <SettingOutlined />
                
                <span>
                    Settings
                </span>
            
            
            </Menu.Item>
            
            {/* <Menu.Item
                key="3"
            >
                <GithubOutlined />
                
                <span>View Repository</span>
            
            </Menu.Item> */}
        </Menu>
    );
}