import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    boolean: true,
}

const colorBg = createSlice({
    name: 'colorBg',
    initialState,
    reducers: {
        Tr: (state) =>{
            state.boolean = true
        },
        Fl: (state) =>{
            state.boolean = false
        },
    }
})

export default colorBg.reducer
export const {Tr, Fl} = colorBg.actions