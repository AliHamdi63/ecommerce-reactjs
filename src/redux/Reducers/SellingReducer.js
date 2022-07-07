export function SellingReducer(state = [],action) {

    if(action.type == "BEST-SELLING-PRODUCTS") return action.payload;

    return state;
}