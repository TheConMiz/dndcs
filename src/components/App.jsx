import React from "react"

import { Layout } from 'antd';

import { SideBar } from "./SideBar";

import ContentShell from "./ContentShell"


import { useSelector } from 'react-redux';

import { DataPuller } from "./Old/DataPuller";

const { Header, Content, Footer } = Layout;


export const App = () => {

    return (
        
        <Layout style={{ minHeight: '100vh' }}>

            <DataPuller/>
            
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
                    <ContentShell/>
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

