import {
    UPDATE_RULE_LEVEL
} from './../actions/rulesActions';

export default function rulesReducer(state = {}, action) {
    switch (action.type) {
        
        case UPDATE_RULE_LEVEL:

            console.log(action.payload);
            return Object.assign({}, state, {
                levels: action.payload
            });
        
        default:
            return state;
    }
}