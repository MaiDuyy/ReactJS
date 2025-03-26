import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
   <div className='bg-gray-800 text-white' >
    <div className='max-w-7xl px-4 mx-auto ' >
        <div className='flex items-center justify-between h-16 '>
            <div className='flex items-center'>
                <Link>Logo</Link>
            </div>
            <div className='px-4 py-4 space-x-8'>

                <Link className='hover:text-gray-200' to={'/'}>Home</Link>
                <Link className='border px-4 py-2 rounded-xl bg-red-600 font-semibold hover:bg-red-800 duration-600' to={'/cart'}>Cart</Link>
            </div>
        </div>
    </div>
   </div>
  )
}

export default Header