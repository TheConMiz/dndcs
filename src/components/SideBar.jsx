import React from 'react'

import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
} from '@ant-design/icons';


import { CHARACTER } from "./../constants/Constants"



const { Sider } = Layout;

export const SideBar = () => {

    let characterList = []

    for (let i = 0; i < 5; ++i){
        const char1 = JSON.parse(JSON.stringify(CHARACTER))
        
        char1.name = "Bill" + i

        characterList.push(char1)

    }


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
            

                {
                    characterList.map((item) => {
                        return (

                            <Menu.Item key={item.name} icon={<PieChartOutlined />}>
                                {item.name}
                            </Menu.Item>
                        );
                    })
                }

            </Menu>

        </Sider>
    )
}
