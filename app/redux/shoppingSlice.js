import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    productData : [],
    userInfo : null ,
    orderData : []
}


export const shoppingSlice = createSlice({
    name : 'shopping',
    initialState,
    reducers : {
        addToCart : (state, action) => {
            state.productData = action.payload
        }
    }
})


// Action creators are generated for each case reducer function
export const {addToCart } = shoppingSlice.actions

export default shoppingSlice.reducer