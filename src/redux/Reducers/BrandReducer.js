export function BrandReducer(state = [],action) {

    if(action.type == "BRAND") return action.payload;

    return state;
}