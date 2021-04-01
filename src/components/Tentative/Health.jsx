import React from 'react'

import { Button, InputNumber, Card } from "antd"

const Health = () => {
    return (

        <Card
            style={{
                width: "40%",
                height: "300px"
            }}
        >
            <div
                id="calculation"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Button>
                    Health
                </Button>
                

                <InputNumber
                    min={0}
                    max={9999}
                >

                </InputNumber>

                <Button
                    danger
                >
                    Damage
                </Button>

            </div>
        
        </Card>


    )
}

export default Health
