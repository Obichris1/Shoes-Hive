import React from 'react'
import Link from 'next/link'
import SearchProducts from './SearchProducts'
import * as icons from 'react-icons/fa'
import {FaUser} from 'react-icons/fa'
import { FaCartPlus } from 'react-icons/fa'




const Header = () => {
  return (
    <div className='h-20 w-full px-20 py-4 items-center border-b-2 '>
        <div className='flex m-auto justify-between'>

          {/* logo */}
      <Link href='/' className='text-3xl font-[Jost] items-center'>
           <h3>SHOES HIVE</h3>
           
      </Link>

      {/* serchbar */}
      <div className='hidden md:block'>
      <SearchProducts />
      </div>
      

      {/* links */}
      <div className='flex justify-around gap-5 lg:text-xl'>
      <Link href='/login' className='btn'>Login</Link>
      <Link href='/Register' className='btn flex gap-2 items-center'> <FaUser /> Register</Link>
      <Link href='/cart' className='btn black_btn flex gap-2 items-center'><FaCartPlus /> Cart </Link>
      </div>
      </div>
      
      
    </div>
  )
}

export default Header