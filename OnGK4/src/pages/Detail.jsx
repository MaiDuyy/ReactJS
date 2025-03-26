import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
    const {id} = useParams();
    const [product , setProduct] = useState([]);

    useEffect(()=> {
      // axios.get(`https://67c81bc40acf98d07084dff5.mockapi.io/api/header/byciel/${id}`)
      // .then(res=> setProduct(res.data))
      // .catch(err => console.log(err));

      const loadProductLocal = localStorage.getItem('products');
      if(loadProductLocal){
        const products = JSON.parse(loadProductLocal);
        const foundProduct = products.find(p => p.id === id);
        if(foundProduct){
            setProduct(foundProduct);
            return;
        }
        
      }
    },[id]);
  
  return (
    <div className='max-w-7xl px-4 mx-auto'>
       <div className='grid grid-cols-1 md:grid-cols-2 gap-9'>
        <div>
          <img src={product.images} alt="" />
        </div>
        <div>
          <p>{product.name}</p>
        </div>
        </div> 
    </div>
  )
}

export default Detail