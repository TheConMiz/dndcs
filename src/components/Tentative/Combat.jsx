import React from 'react'

import { Tabs } from "antd"

import { SpellTable } from "./SpellTable";


const Combat = () => {
    return (
        <Tabs
            defaultActiveKey="1"
            centered
            style={{
                width: "50%",
                height: "300px"
            }}
        >

            <Tabs.TabPane
                tab="Combat"
                key="1"
            >

            </Tabs.TabPane>

            
            <Tabs.TabPane
                tab="Actions"
                key="2"
            >

            </Tabs.TabPane>

            <Tabs.TabPane
                tab="Spells"
                key="3"
            >
                <SpellTable></SpellTable>
            </Tabs.TabPane>

            <Tabs.TabPane
                tab="Equipment"
                key="4"
            >

            </Tabs.TabPane>
        </Tabs>
    )
}

export default Combat
