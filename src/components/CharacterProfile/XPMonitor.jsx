/**
 * XP Monitor
 */
import React, { Fragment, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { InputNumber, Button, Typography, Card, Row, Col, Input, Divider } from 'antd'


import { UPDATE_CHAR_XP } from '../../actions/characterActions'


import { findCurrentLevel, findMaxLevel, findNextLevel } from './../../functions/xpLevelUtility'

export const XPMonitor = () => {

    const dispatch = useDispatch()

    const currentXP = useSelector(state => state.character.xp)    
    const levels = useSelector(state => state.rules.levels)

    const [xpIncrement, setxpIncrement] = useState(0)

    const maxLevel = findMaxLevel(levels)

    const nextLevel = findNextLevel(currentXP, levels)

    return (
        <Fragment>
            <Card
                style={{ textAlign: 'center', width: '200px' }}
                size="small"
                title="Level & XP"
            >
                <Row
                    gutter={[8, 8]}
                    justify="center"
                    align="middle"
                >
                    <Col span={24}>
                        <Typography.Title level={2}>
                            {
                                levels.length !== 0 ? findCurrentLevel(currentXP, levels).level : ""
                            }
                        </Typography.Title>
                    </Col>
                    <Divider>
                        {currentXP} / {typeof(nextLevel) === "undefined" ? 0 : nextLevel.xp}
                    </Divider>
                </Row>
                <Row
                    gutter={[8, 8]}
                    justify="space-evenly"
                    align="middle"
                >
                    <Col span={24}>
                        <Input.Group
                            compact={false}
                            size="large"
                        >
                            <InputNumber
                                style={{ borderTopRightRadius: '0px', borderBottomRightRadius: '0px' }}
                                value={xpIncrement}

                                min={typeof(maxLevel) === "undefined" ? 0 : 0 - maxLevel.xp}

                                max={typeof (maxLevel) === "undefined" ? Infinity : maxLevel.xp}

                                onChange={(value) => {
                                    let tempValue = value

                                    if ((currentXP + tempValue) > maxLevel.xp) {
                                        tempValue = maxLevel.xp - currentXP
                                    }

                                    if ((currentXP + tempValue) < 0) {
                                        tempValue = -currentXP
                                    }

                                    setxpIncrement(tempValue)
                                }}
                            />

                            <Button
                                type="primary"
                                style={{borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px'}}
                                onClick={() => {
                                    let finalXP = currentXP + xpIncrement

                                    dispatch({ type: UPDATE_CHAR_XP, payload: finalXP })

                                    setxpIncrement(0)
                                }}
                            >
                                Add
                            </Button>
                        </Input.Group>
                    </Col>
                </Row>
            </Card>
        </Fragment>
    )
}
