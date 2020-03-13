import React from 'react'

import { Layout, Row, Col } from 'antd'

import { SideBar } from './SideBar'
import { SpellTable } from './SpellTable'
import { CharacterProfile } from './CharacterProfile'
import { VirtualSpellTable } from './VirtualSpellTable'



export const UIShell = () => {

    return (
    
        <Layout
            style={{ height: '100vh', userSelect: 'none' }}
        >

            <Layout.Sider
                theme="dark"
                collapsed={true}
            >
                <div
                    style={{ height: '30px', margin: '15px', background: '#4d7' }}
                />

                <SideBar />

            </Layout.Sider>

            <Layout>
                <Layout.Content>
                    <Row
                        type="flex"
                        justify="space-evenly"
                    >
                        <Col span={8}></Col>
                        <Col span={8}></Col>
                        <Col span={8}>
                            {/* <CharacterProfile/> */}
                        </Col>
                    </Row>

                    <Row
                        type="flex"
                        justify="center"
                    >
                        <Col span={1}/>
                        <Col span={22}>
                            <SpellTable />
                            {/* <VirtualSpellTable/> */}
                        </Col>
                        <Col span={1}/>
                    </Row>
                </Layout.Content>
            </Layout>

        </Layout>
    )
}
