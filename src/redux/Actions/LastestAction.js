import data from "../../ProductData/Products.json"

export function LastestAction() {

    let lastest = data.filter(el => {
        let x = el.type.filter(i => i === "LATEST-PRODUCTS")
        // console.log(x[0])
        return x[0];
    })

    // console.log(lastest);
    return {
        type: "LATEST-PRODUCTS",
        payload: lastest
    };
}