import React, { Fragment } from 'react'

import { Card } from 'antd';


import Combat from "./Tentative/Combat";

import Health from "./Tentative/Health";

import Traits from "./Tentative/Traits";

import CharacterInfo from "./Tentative/CharacterInfo";



const ContentShell = () => {
    return (

        <Fragment>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                <CharacterInfo></CharacterInfo>

                <Health></Health>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "30%",
                    }}
                >
                    <Card
                        style={{
                            width: "100%",
                            height: "200px"
                        }}
                    >
                        Saving Throws

                    </Card>

                    <Card
                        style={{
                            width: "100%",
                            height: "100px"
                        }}
                    >
                        Inspiration

                    </Card>
                </div>

            </div>
            
            <div>
                <Card
                    style={{
                        width: "100%",
                        height: "300px"
                    }}
                >
                    Ability Score

                </Card>
            </div>

            <div
                style={{
                    display: "flex",
                    flexDirection: "row"
                }}
            >
                <Combat></Combat>
                <Traits></Traits>
            </div>

        </Fragment>
    )
}

export default ContentShell
