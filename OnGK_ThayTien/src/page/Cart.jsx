import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, searchItems, searchQuery,   totalItems ,removeAll} = useCart();
  const navigate = useNavigate();

  function thongbao() {
    alert("xin cam on ");
  }


  if(cartItems.length === 0 ){
      return(
      <>
        <div className='font-semibold text-center text-4xl px-4 py-4'>Gio hang trong</div>
      <div className='flex justify-center '><button
      onClick={()=> navigate('/')}
      className='border px-4 py-2 rounded-xl mb-2 bg-yellow-200 text-black'
      >Tiếp tục mua sắm</button></div>
        </> 
      
      )
  }
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Giỏ hàng ({totalItems})</h1>
      
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
            <div className="flex items-center space-x-4">
              <img src={item.images} alt={item.name} className="w-20 h-20 object-cover rounded" />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">{item.price.toLocaleString('vi-VN')} VNĐ</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
            
                <span>{item.quantity}</span>
               
              </div>
              
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:text-red-800"
              >
                Xóa
              </button>
            </div>
          </div>
        ))}
      </div>
        
        <div className='flex justify-between'>

        <button
                onClick={()=> navigate('/')}
                className=' border px-4 py-2 rounded-lg mt-4 text-blue-600 hover:text-blue-800'
            >
                Tiếp tục chọn món
            </button>


            <button
                onClick={removeAll}
                className=' border px-4 py-2 rounded-lg mt-4 text-red-600 hover:text-red-800'
            >
                Xóa tất cả
            </button>
        </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <span className="font-semibold">Tổng cộng:</span>
          <span className="text-xl font-bold">{totalPrice.toLocaleString('vi-VN')} VNĐ</span>
        </div>
        <button
          onClick={() => thongbao()}
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-sky-800 transition-colors"
        >
          Thanh toán
        </button>
      </div>
    </div>
  );
};

export default Cart; 