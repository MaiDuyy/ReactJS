import React from 'react'
import Card from '../components/Card'

function Product() {
  return (
   <div className='max-w-7xl px-4 mx-auto'>
   <h3 className='text-center text-2xl font-semibold mt-4 mb-4'>Sản phẩm</h3>
  <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
  <Card/>
  </div>
   </div>
  )
}

export default Product