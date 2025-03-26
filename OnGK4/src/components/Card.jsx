import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

function Card() {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=> {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
        setProduct(JSON.parse(savedProducts));
        return;
    }
    axios.get('https://67c81bc40acf98d07084dff5.mockapi.io/api/header/byciel')
    .then(res => {
      setProduct(res.data);
      localStorage.setItem("products",JSON.stringify(res.data));     
    })
    .catch(err => console.log(err));
  },[]);

  return (
    <>
    {product.map((item)=>(
      <div key={item.id} className='shadow-md rounded-lg h-full hover:shadow-lg duration-300'>
          <img src={item.images} alt=""  className='w-full object-cover'/>
     <div className='p-4'>
     <h1 className='text-xl font-semibold'>{item.name}</h1>
     <p className='text-gray-300 text-red-600 font-bold'>{item.price}$</p>
     </div>

     <div className='p-4 grid'>
    <Link to={`/product/${item.id}`} ><button
    className='border w-full text-center rounded-md bg-blue-600 text-white py-1 font-semnibold hover:bg-blue-800 duration-200'>Chi tiết</button></Link>
    <Link to={'/cart'} ><button
    onClick={() => dispatch(addToCart(item))}
    className='border w-full text-center rounded-md bg-red-600 text-white py-1 font-semnibold hover:bg-red-800 duration-200' >Thêm giỏ hàng</button></Link>
     </div>
      </div>

    ))}
    </>
  )
}

export default Card