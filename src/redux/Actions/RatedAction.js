import data from "../../ProductData/Products.json"

export function RatedAction() {

    let rated = data.filter(el => {
        let x = el.type.filter(i => i === "TOP-RATED-PRODUCTS")
        // console.log(x[0])
        return x[0];
    })

    // console.log(rated);
    return {
        type: "TOP-RATED-PRODUCTS",
        payload: rated
    };
}