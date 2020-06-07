import React, { Fragment } from 'react'
import { Card, Typography, Tooltip, Input } from 'antd'

import { useSelector, useDispatch } from 'react-redux'

import { minAbilityScore, maxAbilityScore } from './../../constants/constants'


export const ScoreCard = (props) => {

    return (
        <Fragment>
            <Tooltip
                placement="bottom"
                title={<Typography.Text type="warning">{props.data.name}</Typography.Text>}
            >
                <Card
                    style={{ width: '80px', textAlign: "center", }}
                    title={props.data.abbr}
                    size="small"
                    hoverable
                    actions={
                        [
                            <Input
                                size="large"
                                style={{ textAlign: "center" }}
                                type="number"
                                onChange={(event) => {
                                    console.log(event.target.value)

                                    if (event.target.value > maxAbilityScore) {
                                        // return maxAbilityScore
                                    }

                                    if (event.target.value < minAbilityScore) {
                                        // return minAbilityScore
                                    }
                                }}
                            />
                        ]
                    }
                >
                    <Typography.Title
                        level={2}
                    >
                        +1
                </Typography.Title>
                </Card>
            </Tooltip>

        </Fragment>
    )
}
