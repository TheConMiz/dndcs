/**
 * Top-level UIShell
 * - Parent to all UI components
 */

/**
 * Components from 3rd-party Libraries
 */
import React from 'react'
import { Layout, Row, Col, Carousel } from 'antd'

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
            style={{ height: '100vmax', userSelect: 'none' }}
        >
            {/* TODO: SideBar */}
            
            {/* <Layout.Sider
                theme="dark"
                collapsed={true}
            >
                <div
                    style={{ height: '30px', margin: '15px', background: '#4d7' }}
                />
                <SideBar />
            </Layout.Sider> */}

            <Layout>
                <Layout.Content>

                    <Row
                        type="flex"
                        justify="space-between"
                        align="middle"
                    >
                        <Col span={1} />

                        <Col span={6}>
                            <AbilityScoreShell />
                        </Col>

                        <Col span={8}>
                            
                        </Col>

                        <Col span={6}>
                            <XPMonitor />
                        </Col>

                        <Col span={1}/>

                    </Row>

                    <Row
                        type="flex"
                        justify="center"
                    >
                        <Col span={1}/>

                        <Col span={22}>
                            <SpellTable />
                        </Col>

                        <Col span={1} />

                    </Row>
                </Layout.Content>
            </Layout>
        </Layout>
    )
}
