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
        

            
        
        default:
            return state;
    }
}