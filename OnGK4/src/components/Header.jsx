import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='bg-gray-800 text-white mt-auto' >
      <div className='max-w-7xl mx-auto px-4'>
      <div className='flex  items-center justify-between h-16  '>
      <div className='flex items-center'>
          <Link>Logo</Link>
        </div>
        <div className='flex items-center space-x-4 font-semibold '>
        <Link to={'/'} className='hover:text-gray-200'>Home</Link>
        <Link  to={'/product'}className='hover:text-gray-200'>Product</Link>
        <Link to={'/contact'} className='hover:text-gray-200'>Contact</Link>
        <Link to={'/cart'} className='border px-4 py-2 rounded-xl bg-blue-800 hover:bg-blue-600'>Cart</Link>
        </div>

      </div>
      </div>

    </div>
  )
}

export default Header