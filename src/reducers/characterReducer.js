import { UPDATE_CHAR_NAME } from '../actions/characterActions';

export default function characterReducer(state = {}, action) {

    switch (action.type) {
        case UPDATE_CHAR_NAME:
            return action.payload.characterName;
        
        default:
            return state;
        
    }
    
}