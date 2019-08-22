export const UPDATE_CHAR_NAME = "UPDATE_CHAR_NAME";

export function updateCharName(newCharName) {
    return {
        type: UPDATE_CHAR_NAME,
        payload: {
            characterName: newCharName
        }
    }
}