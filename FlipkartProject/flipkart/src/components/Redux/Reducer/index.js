import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartCount: 0,
  cartList: [],
};

const cartCountSlice = createSlice({
  name: "cartCountSlice",
  initialState,
  reducers: {
    cartListCount: (state, action) => {
      state.cartCount = action.payload.length;
      state.cartList = action.payload;
    },
  },
});

export const { cartListCount } = cartCountSlice.actions;
export default cartCountSlice.reducer;
