import React, { Fragment } from 'react'
import { Card } from 'antd';
import { SpellTable } from "./SpellTable";

const ContentShell = () => {
    return (

        <Fragment>
            <div id="row1"
                style={{
                    display: "flex",
                    flexDirection: "row",


                }}
            >

                <Card
                    style={{
                        width: "30%",
                        height: "300px"
                    }}
                >
                    Character Information

                </Card>

                <Card
                    style={{
                        width: "40%",
                        height: "300px"
                    }}
                >
                    Health

                </Card>

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
            
            <div id="row2">
                <Card
                    style={{
                        width: "100%",
                        height: "300px"
                    }}
                >
                    Ability Score

                </Card>
            </div>

            <div id="row3"
            >
                <SpellTable></SpellTable>
            </div>

        </Fragment>
    )
}

export default ContentShell
