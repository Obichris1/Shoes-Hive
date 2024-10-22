"use client"

import { useEffect, useState } from "react";
import FormattedPrice from "./FormattedPrice";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";


const Payment = () => {
    const {productData} = useSelector((state) => state.shopping)
    const {data : session} = useSession()


  const [totalAmount, setTotalAmount] = useState(0);

  // Stripe Payment
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

  const handleCheckout = async () => {
    const stripe = await stripePromise
    const response = await fetch('http://localhost:3000/api/checkout',{
      method : 'POST',
      headers : {
        'content-type' : 'application.json'
      },
      body : JSON.stringify({
        items : productData,
        email  : session?.user?.email
      }
      )

  

    })

    const data = await response.json()

   
      if (response.ok) {
        await dispatch(saveOrder({ order: productData, id: data.id }));
        stripe?.redirectToCheckout({ sessionId: data.id });
        dispatch(resetCart());
      } else {
        throw new Error("Failed to create Stripe Payment");
      }
    
   



  }

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

      <button className="bg-black text-white py-3 px-6 mt-4 ">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Payment;
