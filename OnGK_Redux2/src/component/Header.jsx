import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
   <div className='bg-white shadow-md '>
     <div className='max-w-7xl px-4 mx-auto'>
      <div className='flex justify-between h-16 items-center font-semibold'>
        <div>Logo</div>
        <div className='space-x-4 ' >
          <Link to={'/'}>Home</Link>
          <Link to={'/cart'} className='border py-2 px-4 rounded-xl bg-black text-white hover:bg-white hover:text-black duration-200'>Cart</Link>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Header