export const UPDATE_RULE_LEVEL = "UPDATE_RULE_LEVEL";

export function updateRuleLevel(newLevels) {
    return {
        type: UPDATE_RULE_LEVEL,
        payload: {
            levels: newLevels
        }
    }
}