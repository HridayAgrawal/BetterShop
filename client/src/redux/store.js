import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./cartRedux";

export default configureStore({
  reducer: {
    cart: cartreducer,
  },
});
