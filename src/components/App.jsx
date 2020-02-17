import React, {useState} from 'react'

import { Layout, Row, Col, Collapse, Button, Card } from 'antd'

import DataPuller from './DataPuller'

import SpellTableShell from './SpellTableShell'

import SideBar from './SideBar'

const App = () => {
    const [closed, setClosed] = useState(true)

    return (
        <Layout style={{ height: '100vh', userSelect: 'none' }}>

            <DataPuller />
            
            <Layout.Sider
                theme="dark"
                collapsible
                collapsed={closed}
                onCollapse={() => {
                    setClosed(!closed)
                }}
            >
                <div
                    style={{ height: '30px', margin: '15px', background: '#4d7' }}
                />
                
                <SideBar />
            
            </Layout.Sider>

            <Layout>
                
                <Layout.Content>

                    <Row>
                        <Col span={12}>SSSSSS</Col>
                        <Col span={12}>BBBBBB</Col>
                    </Row>

                    <Row>
                        <Col span={2}>SAD</Col>

                        <Col span={20}>

                            <SpellTableShell />

                        </Col>
                        
                        <Col span={2}>SAD</Col>

                        
                    </Row>

                </Layout.Content>
            </Layout>

        </Layout>
    );
}

export default App