import { UPDATE_USER_NAME } from '../actions/userActions';

export default function userReducer(state = {}, action) {

    switch (action.type) {

        case UPDATE_USER_NAME:

            let temp = state;
            temp.name = action.payload.name
            return temp;
        
        default:
            return state;
    }
    
}