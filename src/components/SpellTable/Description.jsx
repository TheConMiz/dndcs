import React, { Fragment } from 'react'
import { Typography, Divider } from 'antd'


export const Description = (props) => {
    return (
        <Fragment>

            <Divider>
                Full Description
            </Divider>
            
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

            {
                typeof (props.highLevelDesc) !== "object" ?
                    <Fragment>
                        <Divider>
                            At Higher Levels
                        </Divider>

                        <Typography.Text>
                            {props.highLevelDesc}
                        </Typography.Text>   
                    </Fragment>
                :
                    ""
            }

        </Fragment>
    )
}
