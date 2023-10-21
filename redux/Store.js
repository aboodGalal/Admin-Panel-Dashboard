import { configureStore } from "@reduxjs/toolkit";
import ColorBg from "./ColorBg";
import {CurrentUserReducer} from "./CurrentUser";
const store = configureStore({
    reducer:{
        colorBg: ColorBg,
        CurrentUserReducer,
    }
})

export default store