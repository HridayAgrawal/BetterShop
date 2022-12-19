import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./cartRedux";
import userReducer from "./userRedux";

export default configureStore({
  reducer: {
    cart: cartreducer,
    user: userReducer,
  },
});
