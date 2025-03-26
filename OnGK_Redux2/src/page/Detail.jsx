import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Detail() {
    const [product, setProduct] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://67c81bc40acf98d07084dff5.mockapi.io/api/header/byciel/${id}`)
          .then(res => setProduct(res.data))
          .catch(err => console.log(err))
      }, [id]);



      if (!product) return <div>Loading...</div>;

  return (
    <div className='max-w-7xl px-4 mx-auto'>
        <h1>{product.name}</h1>

    </div>
  )
}

export default Detail