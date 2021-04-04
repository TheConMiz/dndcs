import React, { Fragment, useState } from 'react'

import { Button, Card } from "antd"

import SelectionPage from "./SelectionPage"




const CharacterInfo = () => {

    const [selectionMenu, setSelectionMenu] = useState(false)

    const [mode, setMode] = useState("")

    const toggleSelectionMenu = () => {
        
        
        console.log(Event.target)
        
        setSelectionMenu(!selectionMenu)



    }

    return (

        <Fragment>

            <Card
                style={{
                    width: "30%",
                    height: "300px"
                }}
            >
                Character Information
                
                <Button
                    onClick={toggleSelectionMenu}
                >
                    Class
                </Button>

                <Button>
                    Race
                </Button>

                <Button>
                    Background
                </Button>
                
                <SelectionPage
                    title=""
                    toggleSelectionMenu={toggleSelectionMenu}
                    visible={selectionMenu}
                    onOk={toggleSelectionMenu}
                >

                </SelectionPage>

            </Card>

        </Fragment>



    )
}

export default CharacterInfo
