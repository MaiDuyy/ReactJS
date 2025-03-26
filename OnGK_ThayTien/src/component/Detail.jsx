import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext';

function Detail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
const { addToCart } = useCart();
    useEffect(() => {
        const savedProducts = localStorage.getItem('products');
        if (savedProducts) {
            const products = JSON.parse(savedProducts);
            const foundProduct = products.find(p => p.id === parseInt(id));
            if (foundProduct) {
                setProduct(foundProduct);
                return;
            }
        }
        
        // axios.get(`https://dummyjson.com/products/${id}`)
        //     .then(res => {
        //         setProduct(res.data);
        //     })
        //     .catch(err => console.error(err));
    }, [id]);
   
    function addCart(product){
        addToCart(product)
    };

    if (!product) return <div>Loading...</div>;

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <img src={product.images} alt={product.name} className="w-full rounded-lg shadow-lg" />
                
                </div>
                <div>
                    <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                    <p className="text-2xl text-red-800 font-semibold mb-4">{product.price}</p>
                    <p className="text-gray-600 mb-6">{product.des}</p>
                   <Link to={'/cart'}>
                   <button
                    onClick={()=> addCart(product)}
                    className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                        Thêm vào giỏ hàng
                    </button></Link>
                </div>
            </div>
        </div>
    )
}

export default Detail