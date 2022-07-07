export function SearchReducer(state = [],action) {
    // console.log(action.type)
    // console.log(action.payload)
    if(action.type == "PRODUCT") return action.payload;

    return state;
}