import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productApi from "../apis/productApi";

type productType = {
  id: string;
  name: string;
  size: string;
  color: string;
  price: number;
  image: string;
  cartItemNumber: number;
};

const initialState = {
  products: [
    {
      id: "1",
      name: "ÁO KHOÁC DÙ DÂY KÉO XÉO AKD0042",
      size: "XL",
      color: "đen",
      price: 320000,
      image:
        "https://th.bing.com/th/id/OIP._skW4WfyOqVE_Qj6v2gYZAHaHn?w=198&h=204&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      cartItemNumber: 1,
    },
    {
      id: "2",
      name: "ÁO KHOÁC DÙ DÂY KÉO XÉO AKD0042",
      size: "XL",
      color: "đen",
      price: 320000,
      image:
        "https://th.bing.com/th/id/OIP._skW4WfyOqVE_Qj6v2gYZAHaHn?w=198&h=204&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      cartItemNumber: 1,
    },
    {
      id: "3",
      name: "ÁO KHOÁC DÙ DÂY KÉO XÉO AKD0042",
      size: "XL",
      color: "đen",
      price: 320000,
      image:
        "https://th.bing.com/th/id/OIP._skW4WfyOqVE_Qj6v2gYZAHaHn?w=198&h=204&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      cartItemNumber: 1,
    },
    {
      id: "4",
      name: "ÁO KHOÁC DÙ DÂY KÉO XÉO AKD0042",
      size: "XL",
      color: "đen",
      price: 320000,
      image:
        "https://th.bing.com/th/id/OIP._skW4WfyOqVE_Qj6v2gYZAHaHn?w=198&h=204&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      cartItemNumber: 1,
    },
    {
      id: "5",
      name: "ÁO KHOÁC DÙ DÂY KÉO XÉO AKD0042",
      size: "XL",
      color: "đen",
      price: 320000,
      image:
        "https://th.bing.com/th/id/OIP._skW4WfyOqVE_Qj6v2gYZAHaHn?w=198&h=204&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      cartItemNumber: 1,
    },
  ],
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
    deleteProduct(state, action) {
      const productId = action.payload;
      const newState = {
        ...state,
        products: state.products.filter((product) => product.id !== productId),
      };
      return newState;
    },
    addProduct(state, action) {
      const newProduct: productType = action.payload;
      console.log(newProduct);
      const existingProductIndex = state.products.findIndex(
        (product) => product.id === newProduct.id
      );
      console.log(existingProductIndex);
      if (existingProductIndex !== -1) {
        state.products[existingProductIndex].cartItemNumber += 1;
      } else {
        state.products.push({ ...newProduct, cartItemNumber: 1 });
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      console.log(action, state);
    });
  },
});

export const { deleteProduct, getAllProduct, addProduct } =
  productSlice.actions;
export default productSlice.reducer;
