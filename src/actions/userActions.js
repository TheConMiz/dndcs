export const UPDATE_USER_NAME = "UPDATE_USER_NAME";

export function updateUserName(newName) {
    return {
        type: UPDATE_USER_NAME,
        payload: {
            name: newName
        }
    }
}