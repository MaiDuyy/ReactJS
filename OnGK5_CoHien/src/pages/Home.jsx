import React from 'react'
import Card from '../components/Card'
function Home() {
  return (
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <h1 className="text-4xl font-bold text-center mb-8">Sách</h1>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <Card />
  </div>
</div>

  )
}

export default Home