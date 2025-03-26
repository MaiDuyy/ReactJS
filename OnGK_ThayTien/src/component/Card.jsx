import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Card() {
    const [product, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const { addToCart } = useCart();
    useEffect(() => {
        
        const savedProducts = localStorage.getItem('products');
        if (savedProducts) {
            setProducts(JSON.parse(savedProducts));
            return;
        }     
        axios.get('https://dummyjson.com/products')
            .then(res => {
                setProducts(res.data.products);
                localStorage.setItem('products', JSON.stringify(res.data.products));
                
            })
            .catch(err => console.error('Error fetching products:', err));
       
    }, []);

    function handleShowDetails(id){
        navigate(`/product/${id}`)
    }

    function handleAdd(product) {
        addToCart(product)
    }

    return (
        <>

        {product.map((items)=>(
            <div key={items.id} className='rounded-xl shadow-md inset-shadow-sm mx-3 mb-2 hover:shadow-md duration-1000 w-100'>
                <div className='p-4'>
                    <img src={items.images} alt={items.name} className='w-full object-cover'/>
                    <h1 className='text-xl font-semibold'>{items.name}</h1>
                    <h1 className='font-semibold text-red-800 mt-2'>{items.price}</h1>
                </div>
                <div className='p-4 mx-auto grid'>
                    <button
                    onClick={() => handleShowDetails(items.id)}
                    className='w-full text-center border rounded-xl font-semibold bg-blue-800 text-white hover:bg-blue-600 duration-300 mb-2 py-2'>
                        Chi tiết
                    </button>
                   <Link to={'/cart'}>
                   <button 
                     onClick={() => handleAdd(items)}
                    className='w-full text-center border rounded-xl font-semibold bg-red-800 text-white hover:bg-red-600 duration-300 mb-2 py-2'>
                        Thêm vào giỏ hàng
                    </button></Link>
                </div>
            </div>
        ))}
        </>
    )
}

export default Card