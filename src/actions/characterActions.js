export const UPDATE_CHAR_NAME = "UPDATE_CHAR_NAME";
export const UPDATE_CHAR_RACE = "UPDATE_CHAR_RACE";
export const UPDATE_CHAR_BACKGROUND = "UPDATE_CHAR_BACKGROUND";

export function updateCharName(newName) {
    return {
        type: UPDATE_CHAR_NAME,
        payload: {
            name: newName
        }
    }
}

export function updateCharRace(newRace) {
    return {
        type: UPDATE_CHAR_RACE,
        payload: {
            race: newRace
        }
    }
}

export function updateCharBackground(newBackground) {
    return {
        type: UPDATE_CHAR_BACKGROUND,
        payload: {
            background: newBackground
        }
    }
}
