'use client'

import React from "react";
import CartItems from "../Components/CartItems";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../redux/shoppingSlice";
import Link from "next/link";
import Payment from "../Components/Payment";

const page = () => {
  const productData  = useSelector((state) => state?.shopping.productData);
  console.log(productData);  
  const dispatch = useDispatch()
  return (
    <div className="mx-4 lg:mx-20 ">
      {productData.length > 0 ? (
        <div className="flex flex-col gap-5 ">
          <CartItems />
          <div className="flex justify-end items-center">
          <button className="p-3 border-2 border-black bg-[#F97316] text-white rounded-lg hover:bg-orange-400" onClick={() => dispatch(resetCart())}>Reset Cart</button>
          </div>
          {/* Payment Form */}
          <Payment />
        </div>

        
        
      ) : (
        <div className="bg-white flex flex-col items-center justify-center h-96 px-4">
        <p className="text-2xl m-auto">Your cart is empty</p>
        <Link href='/'>
        <button className="px-5 py-3 text-white bg-black   ">Return to shop</button></Link>
       
        </div>
      )}
    </div>
  );
};

export default page;
