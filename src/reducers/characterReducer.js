export default function characterReducer(state = [], action) {
    switch (action.type) {
        case "updateCharName":
            return action.payload;
    }
    return state;
}