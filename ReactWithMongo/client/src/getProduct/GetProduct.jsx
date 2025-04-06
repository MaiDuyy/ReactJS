import React, { useEffect, useState } from 'react';
import { CircleX, Pencil } from 'lucide-react';
import axios from 'axios';
import { Link } from 'react-router-dom';



function GetProduct() {
  const [products, setProducts] = useState([]);


  useEffect(()=> {
    axios.get('http://localhost:8000/api/products')
    .then(res => setProducts(res.data))
    .catch(err => console.log(err))

  },[]); 


  const deleteProduct  = async  (productID) => {
    await axios.delete(`http://localhost:8000/api/product/${productID}`)
    .then(res => setProducts(prevProduct => prevProduct.filter((product) => product._id !== productID)))

  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">Product List</h2>

 <Link to={"/add"}>
 <button className='border rounded-md py-2 px-4 mb-2 bg-blue-800 text-white font-semibold hover:bg-blue-600 duration-200'>Add product </button>
 </Link>

        <table className="table-auto w-full border text-center">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="hover:bg-gray-100 transition duration-200">
                <td className="border px-4 py-2">{product.name}</td>
                <td className="border px-4 py-2">${product.price}</td>
                <td className="border px-4 py-2">
                
                   <div className='flex space-x-4 justify-center items-center'>
                   <CircleX 
                   onClick={()=> deleteProduct(product._id)}
                   className='border rounded-md hover:bg-sky-500' />
                  <Link to={`/update/${product._id}`}>
                  <Pencil className='border rounded-md hover:bg-sky-500' />
                  </Link>
                   </div>
                  
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan="3" className="py-6 text-gray-500">Loading products...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GetProduct;
