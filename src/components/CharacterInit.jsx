import React, {Fragment} from 'react'

import { useSelector } from 'react-redux'

import { initAbilityScores } from './../functions/abilityScoreUtility'


export const CharacterInit = () => {

    const abilityScores = useSelector(state => state.rules.abilityScores)

    initAbilityScores(abilityScores)

    return (
        <Fragment/>
    )
}
