import { configureStore } from "@reduxjs/toolkit";
import ColorBg from "./ColorBg";
import {CurrentUserReducer} from "./CurrentUser";
import ProoductsSlice from "./ProoductsSlice";
import ShopSlice from "./ShopSlice";
import NumOfProductsSlice from "./NumProducts";
const store = configureStore({
    reducer:{
        colorBg: ColorBg,
        CurrentUserReducer,
        user: ProoductsSlice,
        shop: ShopSlice,
        numPrd: NumOfProductsSlice,
    }
})

export default store