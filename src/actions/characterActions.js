export const UPDATE_CHAR_NAME = "UPDATE_CHAR_NAME";
export const UPDATE_CHAR_RACE = "UPDATE_CHAR_RACE";
export const UPDATE_CHAR_BACKGROUND = "UPDATE_CHAR_BACKGROUND";

export const ADD_CLASS_CELL = "ADD_CLASS_CELL";
export const CLEAR_CLASS_CELL = "CLEAR_CLASS_CELL";

export const SET_CLASS = "SET_CLASS";
export const SET_SUBCLASS = "SET_SUBCLASS";
export const SET_LEVEL = "SET_LEVEL";

export const CONFIRM_CLASSES = "CONFIRM_CLASSES";


export function updateCharName(newName) {
    return {
        type: UPDATE_CHAR_NAME,
        payload: {
            name: newName
        }
    }
}

// export function updateCharRace(newRace) {
//     return {
//         type: UPDATE_CHAR_RACE,
//         payload: {
//             race: newRace
//         }
//     }
// }

// export function updateCharBackground(newBackground) {
//     return {
//         type: UPDATE_CHAR_BACKGROUND,
//         payload: {
//             background: newBackground
//         }
//     }
// }

// export function addClassCell(newClassElement) {
//     return {
//         type: ADD_CLASS_CELL,
//         payload: newClassElement
//     }
// }

// export function clearClassCell(classCellID) {
//     return {
//         type: CLEAR_CLASS_CELL,
//         payload: {classCellID}
//     }
// }

// export function setClass(newClass, classCellID) {
//     return {
//         type: SET_CLASS,
//         payload: {
//             newClass,
//             classCellID
//         }
//     }
// }

// export function setSubClass(newSubClass, classCellID) {
//     return {
//         type: SET_SUBCLASS,
//         payload: {
//             newSubClass,
//             classCellID
//         }
//     }
// }

// export function setLevel(newLevel, classCellID) {
//     return {
//         type: SET_LEVEL,
//         payload: {
//             newLevel,
//             classCellID
//         }
//     }
// }

// export function confirmClasses(finalClasses) {
//     return {
//         type: CONFIRM_CLASSES,
//         payload: {
//             finalClasses
//         }
//     }
// }