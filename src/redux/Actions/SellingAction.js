import data from "../../ProductData/Products.json"

export function SellingAction() {

    let selling = data.filter(el => {
        let x = el.type.filter(i => i === "BEST-SELLING-PRODUCTS")
        // console.log(x[0])
        return x[0];
    })

    // console.log(selling);
    return {
        type: "BEST-SELLING-PRODUCTS",
        payload: selling
    };
}