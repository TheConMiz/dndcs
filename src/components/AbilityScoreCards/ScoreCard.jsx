import React, { Fragment } from 'react'
import { Card, Typography, Popover, Tooltip } from 'antd'

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
                    actions={[<Typography>12</Typography>]}
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
