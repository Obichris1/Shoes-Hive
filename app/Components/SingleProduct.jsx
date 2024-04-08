import React from "react";
import Image from "next/image";
import FormattedPrice from "./FormattedPrice";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const SingleProduct = ({ product }) => {
  return (
    <div className="grid lg:grid-cols-2 items-center h-[80vh] bg-white p-4 gap-5">
      {/*Image Container  */}
      <div className="bg-blue-200 ">
        <Image
          src={product?.image}
          height={300}
          width={400}
          alt=""
          className=" max-h-[700px] rounded-lg object-cover py-5 m-auto w-4/6 self-center"
        />
      </div>
      {/*Text Container  */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl lg:text-4xl">{product?.title}</h1>
          <p className="font-bold">
            <FormattedPrice amount={product?.price}  />
          </p>
        </div>

        <p className="text-lg lg:text-2xl text-gray-400" >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non
          magni facili blanditiis molestias soluta eveniet illum accusantium
          eius mollitia eligendi, ex iste doloribus magnam.
        </p>

        <span>
          SKU : <span>{product?._id}</span>
        </span>


        <div className="flex gap-1 pointer mx-20">
          <button className="text-white bg-black px-4 py-3 uppercase ">
            Add to Cart
          </button>
          <span className=" bg-black px-4 py-3 text-white ">
            <FaShoppingCart size={20} />
          </span>
        </div>
        <div className="flex gap-1 items-center">
          <span>
            <FaHeart />
          </span>
          <p>Add to wishlist</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
