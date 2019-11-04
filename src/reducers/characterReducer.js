import {
    UPDATE_CHAR_NAME,
    UPDATE_CHAR_XP,
    // ADD_CLASS_CELL,
    // UPDATE_CHAR_RACE,
    // UPDATE_CHAR_BACKGROUND,
    // CLEAR_CLASS_CELL,
    // SET_CLASS,
    // SET_SUBCLASS,
    // SET_LEVEL,
    // CONFIRM_CLASSES
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
        
        // case UPDATE_CHAR_RACE:

        //     return Object.assign({}, state, {
        //         race: action.payload.race
        //     });
                    
        // case UPDATE_CHAR_BACKGROUND:
            
        //     return Object.assign({}, state, {
        //         background: action.payload.background
        //     });
        
        // case ADD_CLASS_CELL:
            
        //     return Object.assign({}, state, {
        //         classes: state.classes.concat(action.payload)
        //     });
        
        // case CLEAR_CLASS_CELL:

        //     return Object.assign({}, state, {
        //         classes: state.classes.map((item, index) => {
        //             if (index === action.payload.classCellID) {
        //                 return {
        //                     classValue: null,
        //                     subClassValue: null,
        //                     level: 0
        //                 }
        //             }
        //             else return item
        //         })
        //     });
                  
        // case SET_CLASS:
            
        //     return Object.assign({}, state, {
        //         classes: state.classes.map((item, index) => {
        //             if (index === action.payload.classCellID) {
        //                 return {
        //                     classValue: action.payload.newClass,
        //                     subClassValue: item.subClassValue,
        //                     level: item.level
        //                 }
        //             }
        //             else return item;
        //         })
        //     });
        
        // case SET_SUBCLASS:
        //     return Object.assign({}, state, {
        //         classes: state.classes.map((item, index) => {
        //             if (index === action.payload.classCellID) {
        //                 return {
        //                     classValue: item.classValue,
        //                     subClassValue: action.payload.newSubClass,
        //                     level: item.level
        //                 }
        //             }
        //             else return item;
        //         })
        //     });
        
        // case SET_LEVEL:
        //     return Object.assign({}, state, {
        //         classes: state.classes.map((item, index) => {
        //             if (index === action.payload.classCellID) {
        //                 return {
        //                     classValue: item.classValue,
        //                     subClassValue: item.subClassValue,
        //                     level: action.payload.newLevel
        //                 }
        //             }
        //             else return item;
        //         })
        //     });
        
        // case CONFIRM_CLASSES:
        //     return Object.assign({}, state, {
        //         classes: action.payload.finalClasses
        //     });
        
        default:
            return state;
        
    }
    
}