import {
    UPDATE_SPELLS
} from './../actions/appActions';

export default function appReducer(state = [], action) {

    switch (action.type) {
        case UPDATE_SPELLS: 
            return Object.assign({}, state, {
                spells: action.payload
            });
    }

    return state;
}