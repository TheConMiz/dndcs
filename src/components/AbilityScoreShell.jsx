import React, { Fragment, useState } from 'react'
import { ScoreCard } from './AbilityScoreCards/ScoreCard'
import { useSelector } from 'react-redux'
import { Row, Col, Card, Button } from 'antd'


export const AbilityScoreShell = () => {

    const abilityScores = useSelector(state => state.rules.abilityScores)

    const charAbilityScores = useSelector(state => state.character.abilityScores)

    const [changed, setChanged] = useState(false)


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

                        // Find the character's corresponding ability score value
                        let charAbilityScore = charAbilityScores.find(item => item.id === abilityScore.id)

                        return (
                            <Col span={4}>
                                <ScoreCard
                                    data={abilityScore}
                                    charData={charAbilityScore}
                                />
                            </Col>
                        )
                    })}
                </Row>

                <Row
                    align="middle"
                    justify="center"
                >

                    {/* <Button
                        disabled={!changed}
                        type="primary"
                    >
                        Confirm
                    </Button> */}
                </Row>
            </Card>
        </Fragment>
    )
}
