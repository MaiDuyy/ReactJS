import React, { useState } from 'react'
import DataMenu from "../data/menu.json"
import { Link } from 'react-router-dom'
import { useCart } from '../contexts/CartContext';

function Card() {
  const [showModal, setShowModal] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);
  const { addToCart } = useCart();

  function handleCloseModal() {
    setShowModal(false);
  }

  function handleShowDetails(dish) {
    setShowModal(true);
    setSelectedDish(dish);
  }

  function handleAddToCart(dish) {
    addToCart(dish);
    handleCloseModal();
  }

  return (
    <>
      {DataMenu.dishes.map((dish) => (
        <div key={dish.id} className='shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300'>
          <img src={dish.image} alt="" className="w-full rounded-md h-48 object-cover"/>
          <div className='p-4'>
            <h1 className='text-xl font-semibold'>{dish.name}</h1>
            <p className='text-gray-400'>{dish.description}</p>
            <p className='text-red-800 font-bold mb-4'>{dish.price.toLocaleString("VN-vi")} VNĐ</p>
          </div>
          <div className='flex items-center justify-between px-4 py-4'>
            <button
              onClick={() => handleShowDetails(dish)}
              className='border px-4 py-2 rounded-lg bg-black text-white font-semibold hover:bg-white hover:text-black duration-300'
            >
              Chi tiết
            </button>
            <Link to="/cart">
              <button 
                onClick={() => handleAddToCart(dish)}
                className='border px-4 py-2 rounded-lg bg-sky-800 text-white font-semibold hover:bg-white hover:text-sky-800 duration-300'
              >
                Thêm vào giỏ
              </button>
            </Link>
          </div>
        </div>
      ))}

      {showModal && selectedDish && (
        <div 
          onClick={handleCloseModal}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
        >
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">{selectedDish.name}</h3>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-600 mb-4">{selectedDish.detailedDescription}</p>
              <p className="text-primary font-bold mb-4">
                Giá: {selectedDish.price.toLocaleString('vi-VN')} VNĐ
              </p>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={handleCloseModal}
                  className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100"
                >
                  Đóng
                </button>
                <Link to="/cart">
                  <button
                    onClick={() => handleAddToCart(selectedDish)}
                    className="px-4 py-2 bg-primary text-white rounded hover:bg-blue-600"
                  >
                    Thêm vào giỏ
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;