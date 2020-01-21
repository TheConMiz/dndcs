export const UPDATE_SPELLS = "UPDATE_SPELLS";
export const UPDATE_SPELL_SEARCH = "UPDATE_SPELL_SEARCH";

export function updateSpells(newSpells) {
    return {
        type: UPDATE_SPELLS,
        payload: {
            spells: newSpells
        }
    }
}

export function updateSpellSearch(newSpellSearch) {
    return {
        type: UPDATE_SPELL_SEARCH,
        payload: {
            spellSearch: newSpellSearch
        }
    }
}