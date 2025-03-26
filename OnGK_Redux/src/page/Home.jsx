import React from 'react'
import Card from '../component/Card'

function Home() {
  return (
    <div className='max-w-7xl px-4 mx-auto '>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <Card/>
        </div>

    </div>
  )
}

export default Home