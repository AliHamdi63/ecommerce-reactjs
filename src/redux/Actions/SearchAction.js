import data from "../../ProductData/SearchProducts.json"

export function SearchAction() {

    let product = data.filter(ele => ele.search == "PRODUCT")
    // console.log(product);
    return{
        type: "PRODUCT",
        payload: product
    };
}