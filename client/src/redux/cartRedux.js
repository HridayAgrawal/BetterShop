import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload._id
      );
      state.quantity -= 1;
      if (state.total < 0) state.total = 0;
      if (state.total - action.payload.price * action.payload.quantity > 0)
        state.total -= action.payload.price * action.payload.quantity;
      else state.total = 0;
    },

    updateProductQuantityUp: (state, action) => {
      state.products.map((item) => {
        if (item._id === action.payload._id) {
          item.quantity = action.payload.quantity;
        }
        return item;
      });
      state.total += action.payload.price;
      // if (state.total < 0) state.total = 0;
    },
    updateProductQuantityDown: (state, action) => {
      state.products.map((item) => {
        if (item._id === action.payload._id) {
          if (action.payload.quantity >= 1)
            item.quantity = action.payload.quantity;
          else item.quantity = 0;
        }
        return item;
      });
      if (state.total - action.payload.price < 0) state.total = 0;
      else state.total -= action.payload.price;
    },
  },
});

export const {
  addProduct,
  deleteProduct,
  updateProductQuantityUp,
  updateProductQuantityDown,
} = cartSlice.actions;
export default cartSlice.reducer;
