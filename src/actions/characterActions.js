export const UPDATE_CHAR_NAME = "UPDATE_CHAR_NAME";

export function updateCharName(newName) {
    return {
        type: UPDATE_CHAR_NAME,
        payload: {
            name: newName
        }
    }
}