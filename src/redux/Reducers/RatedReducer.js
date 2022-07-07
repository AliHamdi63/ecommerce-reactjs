export function RatedReducer(state = [],action) {

    if(action.type == "TOP-RATED-PRODUCTS") return action.payload;

    return state;
}