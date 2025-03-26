import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {addToCart} from '../store/cartSlice'


function Card() {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
      const saveLocal = localStorage.getItem('products')
      if(saveLocal){
       setProduct(JSON.parse(saveLocal));
       return;
      }

    axios.get('https://67c81bc40acf98d07084dff5.mockapi.io/api/header/byciel')
      .then(res => {
        setProduct(res.data), 
        localStorage.setItem('products' , JSON.stringify(res.data))
      })
      .catch(err => console.log(err))
  }, []);

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
        product.map((item) => (
          <div key={item.id} className='p-4 shadow-md rounded-md font-semibold hover:shadow-xl duration-200 '>
            <img src={item.images} alt=""  className='w-full object-cover'/>
             <h1 className='text-xl mb-1'> {item.name}</h1> 
              <p className='text-xl text-green-800 mb-1'>{item.price}</p>
            <Link to={ `/product/${item.id}`} ><button className='w-full border mb-1 py-1 rounded-md bg-black text-white hover:bg-gray-600 duration-200'> Detail</button></Link>
            <Link to={'/cart'}><button 
            onClick={() => handleAddToCart(item)}
            className='w-full border mb-1 py-1 rounded-md bg-white text-black hover:bg-red-600 duration-200'>Add to card</button></Link>
          </div>
        ))
      }

    </>
  )
}

export default Card