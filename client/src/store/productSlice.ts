import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productApi from "../apis/productApi";

const initialState = {
  products: [],
  p: "",
};

export const fetchProducts = createAsyncThunk(
  "products/getAllProduct",
  async () => {
    const products = await productApi.getAll();
    return products;
  }
);

const productSlice = createSlice({
  initialState,
  name: "products",
  reducers: {
    getAllProduct() {},
  },
  extraReducers(builder) {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      console.log(action, state);
    });
  },
});

export default productSlice.reducer;
