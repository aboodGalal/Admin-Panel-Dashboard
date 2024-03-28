import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    current : JSON.parse(window.localStorage.getItem("user")) || null
}

const CurrentUser = createSlice({
    name: 'CurrentUser',
    initialState,
    reducers: {
        add: (state, action) =>{
            state.current = action.payload
        }
    }
})

const CurrentUserReducer = CurrentUser.reducer;


export { CurrentUserReducer };
export const {add} = CurrentUser.actions