export const UPDATE_CHAR_NAME = "UPDATE_CHAR_NAME";
export const UPDATE_CHAR_XP = "UPDATE_CHAR_XP";
export const UPDATE_CHAR_KNOWN_SPELLS = "UPDATE_CHAR_KNOWN_SPELLS";
export const UPDATE_CHAR_MAX_PREPARED_SPELLS = "UPDATE_CHAR_MAX_PREPARED_SPELLS";

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

export function updateKnownSpells(newKnownSpells) {
    return {
        type: UPDATE_CHAR_KNOWN_SPELLS,
        payload: {
            knownSpells: newKnownSpells
        }
    }
}

export function updateMaxPreparedSpells(newMaxPreparedSpells) {
    return {
        type: UPDATE_CHAR_MAX_PREPARED_SPELLS,
        payload: {
            maxPreparedSpells: newMaxPreparedSpells
        }
    }
}