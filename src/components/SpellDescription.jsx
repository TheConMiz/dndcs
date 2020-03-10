import React, { Fragment } from 'react'

import { Typography, Card } from 'antd'


export const SpellDescription = (props) => {
    console.log(props)
    return (
        <Fragment>
            {
                typeof(props.altName) !== "object"  ? 
                    <Fragment>
                        <Typography.Text
                            strong={true}
                        >
                            AKA: {" "}  {props.altName}
                        </Typography.Text>
                        <br />
                    </Fragment>
                :
                    ""
            }

            <Typography.Text
                strong={true}
            >
                Full Description
            </Typography.Text>
            <br/>
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
                        <Typography.Text
                            strong={true}
                        >
                            At Higher Levels
                        </Typography.Text>
                        <br />
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
