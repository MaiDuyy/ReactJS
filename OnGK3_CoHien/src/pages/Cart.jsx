import React from 'react';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, searchItems, searchQuery, filteredItems ,removeAll} = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Giỏ hàng trống</h1>
        <button
          onClick={() => navigate('/menu')}
          className="px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Tiếp tục mua sắm
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Giỏ hàng</h1>
      
      <div className="mb-6">
        <input
          type="text"
          placeholder="Tìm kiếm món ăn..."
          value={searchQuery}
          onChange={(e) => searchItems(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
        />
      </div>

      <div className="space-y-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
            <div className="flex items-center space-x-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">{item.price.toLocaleString('vi-VN')} VNĐ</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-2 py-1 border rounded hover:bg-gray-100"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-1 border rounded hover:bg-gray-100"
                >
                  +
                </button>
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
                onClick={()=> navigate('/menu')}
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
          onClick={() => navigate('/checkout')}
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-sky-800 transition-colors"
        >
          Thanh toán
        </button>
      </div>
    </div>
  );
};

export default Cart; 