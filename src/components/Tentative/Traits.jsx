import React from 'react'

import { Tabs } from "antd"

const Traits = () => {
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
                tab="Features & Traits"
                key="1"
            >

            </Tabs.TabPane>

            
            <Tabs.TabPane
                tab="Description"
                key="2"
            >

            </Tabs.TabPane>

            <Tabs.TabPane
                tab="Notes"
                key="3"
            >

            </Tabs.TabPane>
        </Tabs>
    )
}

export default Traits
