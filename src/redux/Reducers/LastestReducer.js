export function LastestReducer(state = [],action) {

    if(action.type == "LATEST-PRODUCTS") return action.payload;

    return state;
}