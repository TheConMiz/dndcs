export default function characterReducer(state = [], action) {
    switch (action.type) {
        case "updateCharName":
            return action.payload;
        default:
            return state;
    }
}