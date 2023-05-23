import { configureStore } from "@reduxjs/toolkit";
import cartCountSlice from "./Reducer/index";

export const Store = configureStore({
  reducer: {
    cartCountSlice,
  },
});
