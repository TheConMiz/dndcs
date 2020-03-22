import React, { Fragment } from 'react'
import { Card, Typography, Tooltip, Divider } from 'antd'

export const ScoreCard = (props) => {
    return (
        <Fragment>
            <Card
                style={{ width: '100px', textAlign: "center", }}
                title={props.data.abbr}
                size="small"
                hoverable
                actions={[<Typography>+1</Typography>]}
            >
                <Typography.Title
                    level={2}
                >
                    12
                </Typography.Title>
            </Card>
        </Fragment>
    )
}
