import { UPDATE_USER_NAME } from '../actions/userActions';

export default function userReducer(state = {}, action) {

    switch (action.type) {

        case UPDATE_USER_NAME:

            return Object.assign({}, state, {
                name: action.payload.name
            });
        
        default:
            return state;
    }
    
}