import {
    UPDATE_CHAR_NAME,
    UPDATE_CHAR_XP,
} from './../actions/characterActions';

export default function characterReducer(state = {}, action) {

    switch (action.type) {

        case UPDATE_CHAR_NAME:
            return Object.assign({}, state, {
                name: action.payload
            });
        
        case UPDATE_CHAR_XP:
            return Object.assign({}, state, {
                xp: action.payload
            });
        
        default:
            return state;
        
    }
    
}