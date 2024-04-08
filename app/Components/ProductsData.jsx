'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";
import FormattedPrice from "./FormattedPrice"
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/shoppingSlice";
import toast, { Toaster } from 'react-hot-toast';

const ProductsData = ({ item }) => {

  const calculatePercentage = (oldPrice , newPrice) =>{
    return !!parseFloat(oldPrice) && !!parseFloat(newPrice) ?
        (100 - (oldPrice / newPrice) * 100).toFixed(0) : 0


  }
  const dispatch = useDispatch()

    
  return (
    <div className="flex flex-col items-center border-2 rounded-xl m-4 p-4 border-[#CBD5E1]">
      {/* ImageContainer */}
      <Link href={{ pathname: "/product", query: { _id: item._id } }}>
        <div className="relative bg-slate-200 p-12 group w-full">
          <Image
            src={item.image}
            alt="product image"
            width={400}
            height={400}
            className="group-hover:scale-110 duration-200"
          />
          

          {item.isNew && (
            <div className="absolute top-2 right-4 bg-white group-hover:bg-orange-500 p-2 rounded-full group-hover:text-white  ">
              <p>New Arrival</p>
            </div>
          )}
        </div>
      </Link>

      {/* Text Container */}
   <div className="flex justify-between gap-3 items-center">
        {/*  title, discount and add to cart */}
      <div className="flex flex-col gap-3 items-start">
        <p className="text-xl">{item?.title}</p>
        <p className="px-4 py-2 rounded-full border-2 border-black">{calculatePercentage(item?.price , item?.oldPrice)}% off </p>
        <button className="text-white bg-orange-500 py-3 px-4 rounded-full" onClick={() => dispatch(addToCart(item)) && toast.success(`${item?.title.substring(0,15) } was added sucessfully `)}>Add to Cart</button>
      </div>

        {/* pricing */}

      <div className="flex gap-2 font-bold md:text-xl">
       <p className="line-through text-gray-500"><FormattedPrice amount={item?.oldPrice} /></p>
       <p><FormattedPrice amount={item?.price} /></p>
      </div>
    </div>  
    <Toaster /> 
    </div>
  );
};

export default ProductsData;
