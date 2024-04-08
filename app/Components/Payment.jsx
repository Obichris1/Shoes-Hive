"use client"

import { useEffect, useState } from "react";
import FormattedPrice from "./FormattedPrice";
import { useSelector } from "react-redux";



const Payment = () => {
    const {productData} = useSelector((state) => state.shopping)


  const [totalAmount, setTotalAmount] = useState(0);

 useEffect 
    (() => {
      let amt = 0;
      productData.map((item) => {
        amt += item.price * item.quantity;
        return;
      });

      setTotalAmount(amt);
    },
    [productData]);

  return (
    <div className=" bg-white p-5">
      <div className="md:w-[50%] flex flex-col gap-8">
        <h2 className="uppercase text-2xl font-semibold">cart totals</h2>

        <div className="flex justify-between border-b-2">
          <p className="font-semibold uppercase text-xl ">Subtotal</p>
          <p>
            <FormattedPrice amount={totalAmount} />
          </p>
        </div>

        <div className="flex justify-between border-b-4 border-black">
          <p className="font-semibold uppercase text-xl ">Shipping</p>
          <p>
            <FormattedPrice amount={20} />
          </p>
        </div>

        <div className="flex justify-between border-b-2">
          <p className="font-semibold uppercase text-xl ">Total</p>
          <p>
            <FormattedPrice amount={totalAmount + 20} />
          </p>
        </div>
      </div>

      <button className="bg-black text-white py-3 px-6 mt-4 hover:bg-[#4b4949]">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Payment;
