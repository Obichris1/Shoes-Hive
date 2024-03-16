import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  productData: [],
  userInfo: null,
  orderData: [],
};

export const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    addToCart: (state, action) => {
    //   state.productData = action.payload
      const existingProduct = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
        console.log(state.productData);
      } else {
        state.productData.push(action.payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = shoppingSlice.actions;

export default shoppingSlice.reducer;
