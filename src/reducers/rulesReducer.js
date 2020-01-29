import {

    UPDATE_RULE_ABILITY_SCORE,
    UPDATE_RULE_CONDITION,
    UPDATE_RULE_DAMAGE_TYPE,
    UPDATE_RULE_SPELL_COMPONENT,
    UPDATE_RULE_MAGIC_SCHOOL,
    UPDATE_RULE_LEVEL,
    UPDATE_RULE_SOURCE,
} from './../actions/rulesActions';

export default function rulesReducer(state = {}, action) {
    switch (action.type) {
        case UPDATE_RULE_ABILITY_SCORE:

            return Object.assign({}, state, {
                abilityScores: action.payload
            });

        case UPDATE_RULE_LEVEL:

            return Object.assign({}, state, {
                levels: action.payload
            });
        
        case UPDATE_RULE_CONDITION:

            return Object.assign({}, state, {
                conditions: action.payload
            });

        case UPDATE_RULE_DAMAGE_TYPE:

            return Object.assign({}, state, {
                damageTypes: action.payload
            });

        case UPDATE_RULE_SPELL_COMPONENT:

            return Object.assign({}, state, {
                spellComponents: action.payload
            });

        case UPDATE_RULE_MAGIC_SCHOOL:

            return Object.assign({}, state, {
                magicSchools: action.payload
            });

        case UPDATE_RULE_SOURCE:

            return Object.assign({}, state, {
                sources: action.payload
            });
        
        default:
            return state;
    }
}