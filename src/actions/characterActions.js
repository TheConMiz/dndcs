export const UPDATE_CHAR_NAME = "characters:updateCharName";

export function updateCharName(newCharName) {
    return {
        type: UPDATE_CHAR_NAME,
        payload: {
            characterName: newCharName
        }
    }
}