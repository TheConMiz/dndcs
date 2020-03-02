import React from 'react'

import { Layout, Row, Col } from 'antd'

import { SideBar } from './SideBar'
import { SpellTableShell } from './SpellTableShell'
import { CharacterProfile } from './CharacterProfile'



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
                        <Col span={20}>
                            <SpellTableShell />
                        </Col>
                    </Row>
                </Layout.Content>
            </Layout>

        </Layout>
    )
}
