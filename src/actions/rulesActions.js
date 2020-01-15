export const UPDATE_RULE_LEVEL = "UPDATE_RULE_LEVEL";
export const UPDATE_RULE_ABILITY_SCORE = "UPDATE_RULE_ABILITY_SCORE";

export function updateRuleLevel(newLevels) {
    return {
        type: UPDATE_RULE_LEVEL,
        payload: {
            levels: newLevels
        }
    }
}

export function updateRuleAbilityScore(newAbilityScores) {
    return {
        type: UPDATE_RULE_ABILITY_SCORE,
        payload: {
            abilityScores: newAbilityScores
        }
    }
}