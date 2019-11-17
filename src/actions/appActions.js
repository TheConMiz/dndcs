export const UPDATE_SPELLS = "UPDATE_SPELLS";

export function updateSpells(newSpells) {
    return {
        type: UPDATE_SPELLS,
        payload: {
            spells: newSpells
        }
    }
}