/**
 * Top-level UIShell
 * - Parent to all UI components
 */

/**
 * Components from 3rd-party Libraries
 */
import React from 'react'
import { Layout, Row, Col } from 'antd'

/**
 * Self-generated components
 */
import { SideBar } from './SideBar'
import { SpellTable } from './SpellTable'
import { CharacterProfile } from './CharacterProfile'
import { AbilityScoreShell } from './AbilityScoreShell'
import { XPMonitor } from './CharacterProfile/XPMonitor'



export const UIShell = () => {

    return (
        <Layout
            style={
                {
                    height: '100vmax',
                    userSelect: 'none',
                }}
        >
            {/* TODO: SideBar */}
            
            <Layout.Sider
                theme="dark"
                collapsed={true}
                style={{
                    position: "fixed",
                    height: "100vh",
                }}
            >
                <div
                    style={{ height: '30px', margin: '15px', background: '#4d7' }}
                />

                <div
                    style={{height: '82vh', }}
                />

                <SideBar />

            </Layout.Sider>

            <Layout
                style={{ marginLeft: 100 }}
            >
                <Layout.Content>

                    <Row
                        type="flex"
                        justify="space-between"
                        align="middle"
                    >

                        <Col span={7}>
                            <AbilityScoreShell />
                        </Col>

                        <Col span={8}>
                            {/* <CharacterProfile/> */}
                        </Col>

                        <Col span={7}>
                            <XPMonitor />
                        </Col>


                    </Row>

                    <Row
                        type="flex"
                        justify="center"
                    >

                        <Col span={24}>
                            <SpellTable />
                        </Col>


                    </Row>
                    
                </Layout.Content>
            </Layout>
        </Layout>
    )
}
