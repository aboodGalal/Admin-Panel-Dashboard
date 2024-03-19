import { configureStore } from "@reduxjs/toolkit";
import ColorBg from "./ColorBg";
import {CurrentUserReducer} from "./CurrentUser";
import ProoductsSlice from "../src/redux/products/ProoductsSlice";
const store = configureStore({
    reducer:{
        colorBg: ColorBg,
        CurrentUserReducer,
        user: ProoductsSlice,
    }
})

export default store