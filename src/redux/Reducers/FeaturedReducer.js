export function FeaturedReducer(state = [],action) {

    if(action.type == "FEATURED-PRODUCTS") return action.payload;

    return state;
}