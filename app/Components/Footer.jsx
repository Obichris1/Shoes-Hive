import React from 'react'
import { FaFacebook,FaInstagram,FaTwitter } from 'react-icons/fa'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='bg-[#333] h-[40vh] flex justify-between text-white relative p-20 mt-5 '>
       {/* logo */}
       <div>
         <h1 className='uppercase text-2xl font-bold'>
          Shoes Hive.
         </h1>
       </div>

       {/* links */}
       <div className='flex flex-col gap-7 uppercase   '>
        <p className=' hover:text-orange-500 duration-200'>
          shop with us
        </p>
        <p className=' hover:text-orange-500 duration-200'>
          discount Fridays
        </p>

        <p className=' hover:text-orange-500 duration-200'>
          Newsletter
        </p>

        <p className=' hover:text-orange-500 duration-200'>
          Get dripped out
        </p>
       </div>

       {/* payment  */}
       <div className='flex flex-col text-xl gap-5'>
        <p>Pay us with your trusted services</p>
        <Image src='/payment.png' width={400} height={300} />
       </div>
        
       {/* social links */}

       <div className='absolute flex gap-8 right-20 bottom-5 '>
        <span className='cursor-pointer  hover:text-orange-500 duration-200'><FaFacebook size={30} /></span>
        <span className='cursor-pointer  hover:text-orange-500 duration-200'><FaTwitter size={30} /></span>
        <span className='cursor-pointer  hover:text-orange-500 duration-200'><FaInstagram size={30} /></span>
        
       </div>

    </div>
  )
}

export default Footer