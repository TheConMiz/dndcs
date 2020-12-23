import React, {Fragment} from 'react'

import { Button } from 'antd'

import { useSelector } from 'react-redux'

const fs = window.require("fs")

let path = require("path")



export const SaveCharacter = () => {
    
    const saveFile = useSelector(state => state.character)


    const saveToFile = (fileContent) => {

        console.log(fileContent)

        let fileName = fileContent.name.toLowerCase() + ".json"
        
        let finalFileContent = JSON.stringify(fileContent)

        let finalPath = path.join(__dirname, fileName)

        fs.writeFileSync(finalPath, finalFileContent)
    }

    const loadFromFile = () => {
        
    }


    return (
        
        <Fragment>

            <Button
                onClick={() => {
                    saveToFile(saveFile)
                }}
            >
                Save
            </Button>
            
            <Button>
                Load
            </Button>   
        
        </Fragment>
            
    
    )
}
