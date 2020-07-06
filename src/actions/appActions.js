export const UPDATE_SPELLS = "UPDATE_SPELLS";
export const UPDATE_CLASSES = "UPDATE_CLASSES";
export const UPDATE_STATE_SETTINGS_MENU = "UPDATE_STATE_SETTINGS_MENU";


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

export function updateStateSettingsMenu(newState) {
    return {
        type: UPDATE_STATE_SETTINGS_MENU,
        payload: {
            settingsOpen: newState
        }
    }
}