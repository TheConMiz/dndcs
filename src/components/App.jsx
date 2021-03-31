import React from "react"

import { Layout } from 'antd';

import { SideBar } from "./SideBar";

import { SpellTable } from "./SpellTable";

import { useSelector } from 'react-redux';


// import { DataPuller } from "./Old/DataPuller";

const { Header, Content, Footer } = Layout;


export const App = () => {

    const dbPath = useSelector(state => state.app.dbPath);

    console.log(dbPath)

    return (
        
        <Layout style={{ minHeight: '100vh' }}>

            {/* <DataPuller/> */}
            
            <SideBar></SideBar>
            
            <Layout
                className="site-layout"
                style={{
                    background: "#fff"
                }}
            >
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                        background: "#fff"
                    }}
                >
                    close, minimize, resize
                </Header>
                
                <Content style={{ margin: '0 16px' }}>
                    
                    <SpellTable></SpellTable>
            
                </Content>

                <Footer
                    style={{
                        textAlign: 'center'
                    }}
                >
                    To-Do: 
                     
                </Footer>
        
            </Layout>
        
        </Layout>
      );
}

