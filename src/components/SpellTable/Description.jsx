import React, { Fragment } from 'react'
import { Typography, Divider, Tabs } from 'antd'


export const Description = (props) => {
    return (
        <Fragment
            style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                right: 0,
                top: 0,
            }}
        >

            <Tabs>
                <Tabs.TabPane
                    tab="Full Description"
                    key="1"
                >
                    {
                        props.fullDesc.map((desc) => {
                            return (
                                <Fragment>
                                    <Typography.Text>
                                        {desc}
                                    </Typography.Text>
                                    <br />
                                </Fragment>
                            )
                        })
                    }

                </Tabs.TabPane>

                {
                    typeof (props.highLevelDesc) !== "object" ?
                        <Tabs.TabPane
                            tab="At Higher Levels"
                            key="2"
                        >
                            <Typography.Text>
                                {props.highLevelDesc}
                            </Typography.Text>
                        </Tabs.TabPane>

                        :

                        ""
                }

                <Tabs.TabPane>


                </Tabs.TabPane>
            </Tabs>


            



        </Fragment>
    )
}
