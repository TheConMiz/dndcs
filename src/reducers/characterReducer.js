import { UPDATE_CHAR_NAME } from '../actions/characterActions';

export default function characterReducer(state = {}, action) {

    switch (action.type) {
        case UPDATE_CHAR_NAME:
            console.log(action);
            console.log(state);
            let temp = state;
            temp.name = action.payload.name
            return temp;
        
        default:
            return state;
        
    }
    
}