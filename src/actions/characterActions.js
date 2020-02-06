export const UPDATE_CHAR_NAME = "UPDATE_CHAR_NAME";
export const UPDATE_CHAR_XP = "UPDATE_CHAR_XP";
export const UPDATE_CHAR_PREPARED_SPELL = "UPDATE_CHAR_PREPARED_SPELL";

export function updateCharName(newName) {
    return {
        type: UPDATE_CHAR_NAME,
        payload: {
            name: newName
        }
    }
}

export function updateCharXP(newXP) {
    return {
        type: UPDATE_CHAR_XP,
        payload: {
            name: newXP
        }
    }
}

export function updateCharPreparedSpell(newPreparedSpell) {
    return {
        type: UPDATE_CHAR_PREPARED_SPELL,
        payload: {
            preparedSpell: newPreparedSpell
        }
    }
}