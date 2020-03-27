import React, { Fragment } from 'react'
import { ScoreCard } from './AbilityScoreCards/ScoreCard'
import { useSelector } from 'react-redux'
import { Row, Col, Card } from 'antd'


export const AbilityScoreShell = () => {

    const abilityScores = useSelector(state => state.rules.abilityScores)

    return (
        <Fragment>
            <Card
                size="small"
                style={{ width: '550px'}}
            >
                <Row
                    gutter={[8, 8]}
                    align="middle"
                    justify="center"
                >
                    {abilityScores.map(abilityScore => {
                        return (
                            <Col span={4}>
                                <ScoreCard
                                    data={abilityScore}
                                />
                            </Col>
                        )
                    })}
                </Row>
            </Card>
        </Fragment>
    )
}
