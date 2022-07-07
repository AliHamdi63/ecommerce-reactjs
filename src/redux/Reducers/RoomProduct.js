export function RoomProduct(state = [],action) {

    if(action.type == "ROOM") return action.payload;

    return state;
}