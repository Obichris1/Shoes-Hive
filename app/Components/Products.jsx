import React from 'react'
import Image from 'next/image'
import { productData } from '@/constants/data'
import ProductsData from './ProductsData'


const Products = () => {
  return (
    <div className='border-2 gap-4 mt-10 grid lg:grid-cols-3 '>
      {productData.map((item) => (
        <ProductsData key={item._id} item={item} className='' />

      ))}
       
    </div>
  )
}

export default Products