export function SliderProduct(state = [],action) {

    if(action.type == "SLIDER") return action.payload;

    return state;
}