import { useDispatch } from 'react-redux'

import { UPDATE_CHAR_ABILITY_SCORES } from './../actions/characterActions'

import { minAbilityScore } from './../constants/constants'


export const initAbilityScores = (abilityScores) => {

    const dispatch = useDispatch()

    let tempAbilityScores = []

    abilityScores.map((item) => {
        let temp

        temp = Object.assign({}, {
            id: item.id,
            value: minAbilityScore
        })

        tempAbilityScores.push(temp)

    })

    dispatch({type: UPDATE_CHAR_ABILITY_SCORES, payload: tempAbilityScores})
}

// Equation for generating ability score modifier
export const generateAbilityScoreModifier = (abilityScoreValue) => {    
    return Math.floor((abilityScoreValue - 10) / 2)
}

export const stringifyAbilityScoreModifier = (abilityScoreValue) => {
    let temp

    abilityScoreValue > 0 ?
        (
            temp = "+" + abilityScoreValue
        )
        :
        (
            temp = abilityScoreValue
        )
    
    return temp
}