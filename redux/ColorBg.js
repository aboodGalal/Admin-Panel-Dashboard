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
        Toggle: (state) =>{
            state.boolean = !state.boolean
        }
    }
})

export default colorBg.reducer
export const {Tr, Fl, Toggle} = colorBg.actions