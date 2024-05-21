import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebese"; // assuming you have the Firestore instance initialized and exported as 'db'

const initialState = {
  loading: false,
  data: [],
  error: "",
};

export const fetchProducts = createAsyncThunk('products/fetchData', async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    return data;
  } catch (error) {
    throw new Error('Failed to fetch data from Firestore.');
  }
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        console.log("Fetching data...");
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = "";
        console.log("Data fetched successfully:", action.payload);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.data = [];
        state.error = action.error.message;
        console.log("Failed to fetch data:", action.error.message);
      });
  },
});

export default productsSlice.reducer;