import Image from 'next/image';
import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { decreaseQuantity, deleteProduct,increaseQuantity } from '../redux/shoppingSlice';
import FormattedPrice from './FormattedPrice';
import { FaChevronLeft, FaChevronRight} from 'react-icons/fa';

const CartItems = () => {
 
    const {productData} = useSelector((state) => state.shopping)
    console.log(productData);  
    const dispatch = useDispatch()

  return (
    <div className='flex flex-col gap-3 mt-8'>
         
          <div className="hidden lg:inline-flex justify-between items-center p-2 text-center text-xl md:text-2xl font-semibold bg-white">
            <p className='w-1/3 flex flex-start '>Product</p>
            <p className='w-1/3 flex justify-center'>Quantity</p>
            <p className='w-1/3 flex justify-end'>Subtotal</p>
          </div>

          {/* Product */}
          <div className='flex flex-col gap-3'>
            {
                productData.map((product) => (
                    <div className=' flex flex-col lg:flex-row justify-between gap-4 w-full items-center p-6 bg-white'>
                    <div className='flex justify-start p-2 gap-2 items-center  w-full md:w-1/3'>
                        <button onClick={() => dispatch(deleteProduct(product))}>X</button>
                        <Image src={product.image} height={100} width={100} className='bg-[#ccccc9] p-2'  />
                        <p>{product.title}</p>
                    </div>
                     <div className='flex items-center justify-center gap-2 border-2 border-black w-full md:w-auto p-4  '>
                        <p className='text-xl'> Quantity </p>
                            <span onClick={() => dispatch(decreaseQuantity(product))}>
                               <FaChevronLeft />
                            </span>
                            <span className='text-xl'>
                                {product.quantity}
                            </span>
                            <span onClick={() => dispatch(increaseQuantity(product))}>
                                <FaChevronRight />
                            </span>
                            
                        
                     </div>

                     <div className='w-full md:w-1/3 flex justify-start md:justify-end'>
                        <p className='self-center font-semibold'><FormattedPrice amount={product.price * product.quantity} /></p>
                     </div>

                     </div>

                   

                ))
            }

          </div>
    </div>
  )
}

export default CartItems