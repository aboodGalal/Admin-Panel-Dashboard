import { createSlice } from "@reduxjs/toolkit/dist";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const console = window.console; 

const initialState = {
    loading: false,
    data: [],
    error: "",
}

export const fetchUsers = createAsyncThunk('user/FetchData', async () =>{
    const res = await axios.get('https://fakestoreapi.com/products');
    const data = res.data.map((product) =>({
        ...product,
        boolean: false,
    }))
    return data
})


const productsSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (biulder) =>{
        biulder.addCase(fetchUsers.pending, (state) =>{
            state.loading = true
            console.log("Fetching data...");
        });
        biulder.addCase(fetchUsers.fulfilled, (state, action) =>{
            state.loading = false
            state.data = action.payload
            state.error = ""
            console.log("Data fetched successfully:", action.payload);
        });
        biulder.addCase(fetchUsers.rejected, (state, action) =>{
            state.loading = false
            state.data = []
            state.error = action.error.message
            console.log("Failed to fetch data:", action.error.message);
        })
    }
})

export default productsSlice.reducer
