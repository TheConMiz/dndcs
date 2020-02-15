import React, {useState} from 'react'

import { Layout } from 'antd'

import DataPuller from './DataPuller'

import SpellTableShell from './SpellTableShell'

import SideBar from './SideBar'

const App = () => {

    const [closed, setClosed] = useState(true)

    return (
        <Layout style={{ height: '100vh' }}>

            <DataPuller />
            
            <Layout.Sider
                theme="dark"
                collapsible
                collapsed={closed}
                // onCollapse={() => {
                //     setOpen(!open)
                // }}
            >
                <div
                    style={{ height: '30px', margin: '15px', background: '#4d7' }}
                />
                
                <SideBar />
            
            </Layout.Sider>

            <Layout.Content>
                <SpellTableShell />
            </Layout.Content>
        </Layout>
    );
}

export default App