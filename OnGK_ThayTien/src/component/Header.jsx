import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Header() {
  const { totalItems } = useCart();

  return (
   <div className='bg-yellow-400 '>
    <div className='max-w-7xl px-4 mx-auto'>
      <div className='flex justify-between h-16 items-center'>
        <div className='flex items-center'>
          <Link className='font-semibold  text-xl '>Logo</Link>
        </div>
        <div className='space-x-7 font-semibold '>
          <Link to={'/'} className='hover:text-white ' >Home</Link>
          <Link to={'/cart'} className='relative px-4 py-2 rounded-xl bg-white hover:bg-yellow-600 duration-1000'>
            Cart
            {totalItems > 0 && (
              <span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs'>
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Header