import data from "../../ProductData/Products.json"

export function FeaturedActions() {

    let product = data.filter(el => {
        let x = el.type.filter(i => i === "FEATURED-PRODUCTS")
        // console.log(x[0])
        return x[0];
    })

    // console.log(product);
    return {
        type: "FEATURED-PRODUCTS",
        payload: product
    };
}