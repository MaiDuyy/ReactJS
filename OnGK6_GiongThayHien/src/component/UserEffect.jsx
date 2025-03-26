import axios from 'axios';
import React, { useEffect, useState } from 'react'

function UserEffect() {
    const [product , setProduct] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => setProduct(res.data))
        .catch(err => console.log(err));
    },[]);

  return (
   <div className='bg-gray-100'>
     <div className='max-w-7xl px-4 mx-auto py-8'>
        {
            product.map((item)=>(
                    <div key={item.id} className='shadow-md px-4 py-2 rounded-lg bg-white my-2 hover:drop-shadow-md '>
                        <span>Id: {item.id}</span>
                           <h1>Title: {item.title}</h1> 
                           <p>Body: {item.body}</p>
                    </div>
            ))

        }    
    </div>
   </div>
  )
}

export default UserEffect