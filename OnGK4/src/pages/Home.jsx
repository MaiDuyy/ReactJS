import React from 'react'
import Footer from '../components/Footer'
import Card from '../components/Card'

function Home() {
  return (
    <div className='max-w-7xl px-4 mx-auto'>
      <h1 className='text-center font-semibold px-4 py-4 text-xl'>Danh sách sản phẩm nổi bật</h1>
     <div className='grid gird-cols-1 md:grid-cols-3 gap-8 '>
     <Card/>
     </div>
    </div>
  )
}

export default Home