export const UPDATE_SPELLS = "UPDATE_SPELLS";
export const UPDATE_CLASSES = "UPDATE_CLASSES";

export function updateSpells(newSpells) {
    return {
        type: UPDATE_SPELLS,
        payload: {
            spells: newSpells
        }
    }
}

export function updateClasses(newClasses) {
    return {
        type: UPDATE_CLASSES,
        payload: {
            classes: newClasses
        }
    }
}