import data from "../../ProductData/Products.json"

export function ProductAction() {
    let slider = data.filter(el => {
        let x = el.type.filter(i => i === "SLIDER")
        // console.log(x[0])
        return x[0];
    })

    return {
        type: "SLIDER",
        payload: slider
    };
}