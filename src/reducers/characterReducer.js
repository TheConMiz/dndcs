import {
    UPDATE_CHAR_NAME,
    UPDATE_CHAR_XP,
    UPDATE_CHAR_PREPARED_SPELLS,
    UPDATE_CHAR_MAX_PREPARED_SPELLS,
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

        case UPDATE_CHAR_PREPARED_SPELLS:
            return Object.assign({}, state, {
                preparedSpells: action.payload
            });
        
        case UPDATE_CHAR_MAX_PREPARED_SPELLS:
            return Object.assign({}, state, {
                maxPreparedSpells: action.payload
            });
        
        default:
            return state;
        
    }
    
}