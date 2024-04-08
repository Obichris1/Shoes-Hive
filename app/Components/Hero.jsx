'use client'

import Image from 'next/image'
import React, { useState,useEffect } from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {

   const interval =  setInterval(() => {setCurrentSlide(prev =>(prev === data.length-1 ? 0 : prev + 1))},4000)
   return () => clearInterval(interval)

  })
  const data = [
    {
      id : 1,
      image: '/full_nike.jpg',
      text: 'Get amazing deals on wears and sneakers every friday!',
      title : 'Deals'
    },

    {
      id : 2,
      image: '/blazer.png',
      title : 'Fresh Sneakers',
      text: 'Stock up on sneakers and limited edition on our sales week',
    },

    {
      id : 1,
      image: '/jordan.png',
      text: 'Stock up on sneakers and limited edition on our sales week',
      title : 'Sales'
    },
  ]
  return (
    <div className=' p-12 h-[80vh] w-full flex gap-6 items-center justify-center lg:h-[calc(100vh-6rem)] lg:justify-between bg-[rgb(192,190,190)] mx-0'>
     {/* text container */}

     <div  className='text-[#fff] flex flex-col gap-6'>
        <motion.h2 initial={{y:30, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.5}} className='text-3xl lg:text-8xl font-bold hidden lg:block ' >{data[currentSlide].title}</motion.h2>
        <motion.p initial={{y:40, opacity:0}} whileInView={{y:0, opacity:1}} className='text-3xl hidden lg:block'>{data[currentSlide].text}</motion.p>
         {/* Buttons*/}
        <motion.button initial={{y:50, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.7}} className='self-start bg-[#E2E8F0] text-[#333] font-bold p-4 rounded-full text-xl uppercase hidden lg:block'>Shop now</motion.button>
     </div>

     {/* image container */}

     <div className='relative w-full h-full lg:w-1/2 p-5 ' >
        <Image src={data[currentSlide].image} fill alt='' className='object-contain' />
     </div>

    

     

     
    </div>
  )
}

export default Hero