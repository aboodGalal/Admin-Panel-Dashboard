import { configureStore } from "@reduxjs/toolkit";
import ColorBg from "./ColorBg";
import userRows from "./userRows";
const store = configureStore({
    reducer:{
        colorBg: ColorBg,
        userRows: userRows,
    }
})

export default store