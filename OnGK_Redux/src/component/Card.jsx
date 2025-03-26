import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { Link } from 'react-router-dom';

function Card() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);

  useEffect(()=>{
    axios.get('https://67c81bc40acf98d07084dff5.mockapi.io/api/header/byciel')
    .then(res => setProduct(res.data))
    .catch(err => console.log(err));
  },[]);

  const handleAddToCart = (item) => {
    dispatch(addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.images
    }));
  };

  return (
   <>
    {
      product.map((item)=>(
        <div key={item.id} className='shadow-md rounded-xl p-4'> 
            <img src={item.images} alt={item.name} className='w-full h-48 object-cover rounded-lg mb-4' />
            <h1 className='text-lg font-semibold text-gray-800 mb-2'>{item.name}</h1>
            <p className='text-green-600 font-bold mb-4'>${item.price}</p>
          <Link to="/cart">
            <button 
              onClick={() => handleAddToCart(item)}
              className='w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors'
            >
              Add to cart
            </button></Link>
        </div>
      ))
    }   
   </>
  )
}

export default Card