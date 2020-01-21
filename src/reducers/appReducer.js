import {
    UPDATE_SPELLS,
    UPDATE_SPELL_SEARCH
} from './../actions/appActions';

export default function appReducer(state = [], action) {

    switch (action.type) {
        case UPDATE_SPELLS: 
            // return {
            //     ...state,
            //     spells: action.payload
            // }
            return Object.assign({}, state, {
                spells: action.payload
            });
        
        case UPDATE_SPELL_SEARCH:
            return Object.assign({}, state, {
                spellSearch: action.payload
            });
        
        default:
            return state
    }
}