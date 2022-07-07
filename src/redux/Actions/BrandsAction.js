import data from "../../ProductData/Brands.json"

export function BrandsAction() {

    let brand = data.filter(ele => ele.type == "BRAND")
    // console.log(brand);
    return{
        type: "BRAND",
        payload: brand
    };
}