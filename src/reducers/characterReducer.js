import { UPDATE_CHAR_NAME } from '../actions/characterActions';
import { UPDATE_CHAR_RACE } from '../actions/characterActions';
import { UPDATE_CHAR_BACKGROUND } from '../actions/characterActions';

export default function characterReducer(state = {}, action) {
    let temp;

    switch (action.type) {
        case UPDATE_CHAR_NAME:
            
            temp = state;
            temp.name = action.payload.name
            
            return temp;
        
        case UPDATE_CHAR_RACE:
            
            temp = state;
            temp.race = action.payload.race
            
            return temp;
        
        case UPDATE_CHAR_BACKGROUND:
            
            temp = state;
            temp.background = action.payload.background

            return temp;
        
        default:
            return state;
        
    }
    
}