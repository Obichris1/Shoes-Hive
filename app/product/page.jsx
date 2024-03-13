'use client'
import React from 'react'
import SingleProduct from '../Components/SingleProduct'
import ProductsData from '../Components/ProductsData'
import { productData } from '@/constants/data'
import { useParams } from 'next/navigation'


const page = ({searchParams}) => {
  const getSingleProduct = (_id) =>{
   const item = productData.find((product) => product._id === _id)
   return item

  }
  // const params = useParams() 
  const _idString = searchParams._id           //returns a string of a number
  console.log(_idString);
  

  const _id = Number(_idString);    //convert strings to numbers
  console.log(_id);
const product = getSingleProduct(_id)

  return (
    <div><SingleProduct product ={product} /></div>
  )
}

export default page