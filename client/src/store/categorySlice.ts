import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoryApi from "../apis/categoryApi";

const initialState = {
  parentCategory: [],
  category: [],
  p: "",
};

export const fetchCategories = createAsyncThunk(
  "category/getAllProduct",
  async () => {
    const categories = await categoryApi.getAllCategory();
    return categories;
  }
);

const productSlice = createSlice({
  initialState,
  name: "categories",
  reducers: {
    getAllCategory() {},
  },
  extraReducers(builder) {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      console.log(action, state);
    });
  },
});

export default productSlice.reducer;
