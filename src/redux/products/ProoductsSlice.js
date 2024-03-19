import { createSlice } from "@reduxjs/toolkit/dist";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const console = window.console; 

const initialState = {
    loading: false,
    data: [],
    error: "",
}

export const FetchData = createAsyncThunk('user/FetchData', async () =>{
    // console.log("Fetching data...");
    // const res = await axios.get('https://dummyjson.com/products');
    // const data = res.data
    // .map((product) =>({
    //     ...product,
        // boolean: false,
    // }))
    return axios.get('https://fakestoreapi.com/products')
    .then((res) => res.data)
})


const productsSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (biulder) =>{
        biulder.addCase(FetchData.pending, (state) =>{
            state.loading = true
            console.log("Fetching data...");
        });
        biulder.addCase(FetchData.fulfilled, (state, action) =>{
            state.loading = false
            state.data = action.payload
            state.error = ""
            console.log("Data fetched successfully:", action.payload);
        });
        biulder.addCase(FetchData.rejected, (state, action) =>{
            state.loading = false
            state.data = []
            state.error = action.error.message
            console.log("Failed to fetch data:", action.error.message);
        })
    }
})

export default productsSlice.reducer
