import {
    UPDATE_CHAR_NAME,
    UPDATE_CHAR_XP,
    UPDATE_CHAR_KNOWN_SPELLS,
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

        case UPDATE_CHAR_KNOWN_SPELLS:
            return Object.assign({}, state, {
                knownSpells: action.payload
            });
        
        case UPDATE_CHAR_MAX_PREPARED_SPELLS:
            return Object.assign({}, state, {
                maxPreparedSpells: action.payload
            });
        
        default:
            return state;
        
    }
    
}