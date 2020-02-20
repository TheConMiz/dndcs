import {
    UPDATE_SPELLS,
    UPDATE_CLASSES,
} from './../actions/appActions';

export default function appReducer(state = [], action) {

    switch (action.type) {
        case UPDATE_SPELLS: 

            return Object.assign({}, state, {
                spells: action.payload
            });
        
        case UPDATE_CLASSES:
            return Object.assign({}, state, {
                classes: action.payload
            });
        
        default:
            return state
    }
}