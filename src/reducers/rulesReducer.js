import {
    UPDATE_RULE_LEVEL,
    UPDATE_RULE_ABILITY_SCORE,
} from './../actions/rulesActions';

export default function rulesReducer(state = {}, action) {
    switch (action.type) {
        
        case UPDATE_RULE_LEVEL:

            return Object.assign({}, state, {
                levels: action.payload
            });
        
        case UPDATE_RULE_ABILITY_SCORE:

            return Object.assign({}, state, {
                abilityScores: action.payload
            });
            
        
        default:
            return state;
    }
}