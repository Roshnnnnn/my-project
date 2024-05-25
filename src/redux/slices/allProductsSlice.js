import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllData = createAsyncThunk(
  "allProduct/fetchAllData",
  async () => {
    const [storesResponse] = await Promise.all([
      axios.get("http://localhost:3001/stores"),
      // axios.get("http://localhost:3001/categories"),
    ]);
    return {
      stores: storesResponse.data,
      // categories: categoriesResponse.data,
    };
  }
);

const allProductSlice = createSlice({
  name: "allProduct",
  initialState: {
    products: [],
    stores: [],
    categories: [],
    fetchAllDataStatus: "idle",
    fetchStoresStatus: "idle",
    fetchCategoriesStatus: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllData.pending, (state) => {
        state.fetchAllDataStatus = "loading";
      })
      .addCase(fetchAllData.fulfilled, (state, action) => {
        state.fetchAllDataStatus = "succeeded";
        state.stores = action.payload.stores;
        state.categories = action.payload.categories;
      })
      .addCase(fetchAllData.rejected, (state, action) => {
        state.fetchAllDataStatus = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllProducts = (state) => state.allProduct.products;
export const selectStores = (state) => state.allProduct.stores;

export default allProductSlice.reducer;
