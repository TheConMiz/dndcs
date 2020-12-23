import React, { Fragment } from 'react'
import { Card, Typography, Tooltip, Input } from 'antd'
import { minAbilityScore, maxAbilityScore, defaultOnFail } from './../../constants/constants'

import { generateAbilityScoreModifier, stringifyAbilityScoreModifier } from './../../functions/abilityScoreUtility'

import { useSelector, useDispatch } from 'react-redux'

import { UPDATE_CHAR_ABILITY_SCORES } from './../../actions/characterActions'

export const ScoreCard = (props) => {

    let charAbilityScores = useSelector(state => state.character.abilityScores)

    const dispatch = useDispatch()

    return (
        <Fragment>
            <Tooltip
                placement="bottom"
                destroyTooltipOnHide={true}
                title={
                    <Typography.Text type="warning">
                        {props.data.name}
                    </Typography.Text>
                }
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
                                value={
                                    charAbilityScores.length > 0 ?
                                        charAbilityScores.find((item) => item.id === props.data.id).value
                                        :
                                        defaultOnFail
                                }

                                onChange={(event) => {  
                                    // To create a deep copy of Array, parse the stringified version of it
                                    let temp = JSON.parse(JSON.stringify(charAbilityScores))

                                    if (event.target.value > maxAbilityScore) {
                                        temp.find((item) => item.id === props.charData.id).value = parseInt(maxAbilityScore)
                                    }

                                    else if (event.target.value < minAbilityScore) {
                                        temp.find((item) => item.id === props.charData.id).value = parseInt(minAbilityScore)
                                    }

                                    else{
                                        temp.find((item) => item.id === props.charData.id).value = parseInt(event.target.value)
                                    }                            

                                    dispatch({ type: UPDATE_CHAR_ABILITY_SCORES, payload: temp })
                                }}
                            />
                        ]
                    }
                >
                    <Typography.Title
                        level={2}
                    >
                        {
                            charAbilityScores.length > 0 ? 
                                (
                                    stringifyAbilityScoreModifier(
                                        generateAbilityScoreModifier(
                                            parseInt(charAbilityScores.find((item) => item.id === props.data.id).value))
                                    )
                                )
                                :
                                defaultOnFail
                        }
                </Typography.Title>
                </Card>
            </Tooltip>

        </Fragment>
    )
}
