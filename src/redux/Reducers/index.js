import { combineReducers } from "redux";
import { BrandReducer } from "./BrandReducer";
import { CartReducer } from "./CartReducer";
import { CountReducer } from "./CountReducer";
import { FeaturedReducer } from "./FeaturedReducer";
import { LastestReducer } from "./LastestReducer";
import { RatedReducer } from "./RatedReducer";
import { RoomProduct } from "./RoomProduct";
import { SearchReducer } from "./SearchReducer";
import { SellingReducer } from "./SellingReducer";
import { SliderProduct } from "./SliderProduct";

export default combineReducers({
    SliderProduct: SliderProduct,
    RoomProduct: RoomProduct,
    FeaturedReducer: FeaturedReducer,
    BrandReducer: BrandReducer,
    RatedReducer: RatedReducer,
    SellingReducer: SellingReducer,
    LastestReducer: LastestReducer,
    SearchReducer: SearchReducer,
    CartReducer: CartReducer,
    CountReducer: CountReducer

});