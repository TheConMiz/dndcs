import { UPDATE_CHAR_NAME } from '../actions/characterActions';
import { UPDATE_CHAR_RACE } from '../actions/characterActions';
import { UPDATE_CHAR_BACKGROUND } from '../actions/characterActions';

export default function characterReducer(state = {}, action) {

    switch (action.type) {
        case UPDATE_CHAR_NAME:
            
            return Object.assign({}, state, {
                name: action.payload.name
            });
        
        case UPDATE_CHAR_RACE:

            return Object.assign({}, state, {
                race: action.payload.race
            });
                    
        case UPDATE_CHAR_BACKGROUND:
            
            return Object.assign({}, state, {
                background: action.payload.background
            });
        
        default:
            return state;
        
    }
    
}