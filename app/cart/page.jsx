'use client'

import React from "react";
import CartItems from "../Components/CartItems";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const { productData } = useSelector((state) => state?.shopping);
  const dispatch = useDispatch()
  return (
    <div>
      {productData.length > 0 ? (
        <div>
          <h2>Cart</h2>
          <div className="flex justify-between">
            <p>Product</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
          <CartItems />
          <button onClick={dispatch(resetCart)}>Reset Cart</button>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default page;
