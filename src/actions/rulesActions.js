export const UPDATE_RULE_ABILITY_SCORE = "UPDATE_RULE_ABILITY_SCORE";
export const UPDATE_RULE_CONDITION = "UPDATE_RULE_CONDITION";
export const UPDATE_RULE_DAMAGE_TYPE = "UPDATE_RULE_DAMAGE_TYPE";
export const UPDATE_RULE_SPELL_COMPONENT = "UPDATE_RULE_SPELL_COMPONENT";
export const UPDATE_RULE_MAGIC_SCHOOL = "UPDATE_RULE_MAGIC_SCHOOL";
export const UPDATE_RULE_LEVEL = "UPDATE_RULE_LEVEL";
export const UPDATE_RULE_SOURCE = "UPDATE_RULE_SOURCE";


export function updateRuleAbilityScore(newAbilityScores) {
    return {
        type: UPDATE_RULE_ABILITY_SCORE,
        payload: {
            abilityScores: newAbilityScores
        }
    }
}

export function updateRuleCondition(newConditions) {
    return {
        type: UPDATE_RULE_CONDITION,
        payload: {
            conditions: newConditions
        }
    }
}

export function updateRuleDamageType(newDamageTypes) {
    return {
        type: UPDATE_RULE_DAMAGE_TYPE,
        payload: {
            damageTypes: newDamageTypes
        }
    }
}

export function updateRuleSpellComponent(newSpellComponents) {
    return {
        type: UPDATE_RULE_SPELL_COMPONENT,
        payload: {
            spellComponents: newSpellComponents
        }
    }
}

export function updateRuleMagicSchool(newMagicSchools) {
    return {
        type: UPDATE_RULE_MAGIC_SCHOOL,
        payload: {
            magicSchools: newMagicSchools
        }
    }
}


export function updateRuleLevel(newLevels) {
    return {
        type: UPDATE_RULE_LEVEL,
        payload: {
            levels: newLevels
        }
    }
}

export function updateRuleSource(newSources) {
    return {
        type: UPDATE_RULE_SOURCE,
        payload: {
            sources: newSources
        }
    }
}
