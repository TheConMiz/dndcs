import React, {Fragment} from 'react'
import { ScoreCard } from './AbilityScoreCards/ScoreCard'
import { useSelector } from 'react-redux'
import { Row, Col, Card } from 'antd'


export const AbilityScoreShell = () => {
    
    const abilityScores = useSelector(state => state.rules.abilityScores)

    return (
        <Fragment>
            <Card
                size="small"
            >
                <Row
                    type="flex"

                >
                    <Col
                        span={abilityScores.length !== 0 ? 24 / abilityScores.length : 1}
                    >
                        {abilityScores.map(abilityScore => {
                            return (
                                <ScoreCard
                                    data={abilityScore}
                                />
                            )
                        })}
                    </Col>
                </Row>
            </Card>
            

        </Fragment>
    )
}
