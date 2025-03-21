import React, { useState } from 'react';
import menuData from '../data/menu.json';

const MenuList = () => {
  const [selectedDish, setSelectedDish] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [orders, setOrders] = useState([]);

  // const handleShowDetails = (dish) => {
  //   setSelectedDish(dish);
  //   setShowModal(true);
  // };

  // const handleCloseModal = () => {
  //   setShowModal(false);
  // };

  // const addToOrder = (dish) => {
  //   setOrders([...orders, dish]);
  //   alert(`Đã thêm ${dish.name} vào danh sách order!`);
  // };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-2">
        {menuData.dishes.map((dish) => (
          <div key={dish.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
              <p className="text-gray-600 mb-3">{dish.description}</p>
              <p className="text-red-600 font-bold mb-4">
                {dish.price.toLocaleString('vi-VN')} VNĐ
              </p>
              <div className="flex justify-between">
                <button
                  onClick={() => handleShowDetails(dish)}
                  className="px-4 py-2 text-primary border border-primary rounded hover:bg-primary hover:text-white transition-colors"
                >
                  Chi tiết
                </button>
                <button
                  onClick={() => addToOrder(dish)}
                  className="px-4 py-2 bg-primary text-white rounded hover:bg-blue-600 transition-colors"
                >
                  Thêm vào order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">{selectedDish?.name}</h3>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-600 mb-4">{selectedDish?.detailedDescription}</p>
              <p className="text-primary font-bold mb-4">
                Giá: {selectedDish?.price.toLocaleString('vi-VN')} VNĐ
              </p>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={handleCloseModal}
                  className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100"
                >
                  Đóng
                </button>
                <button
                  onClick={() => {
                    addToOrder(selectedDish);
                    handleCloseModal();
                  }}
                  className="px-4 py-2 bg-primary text-white rounded hover:bg-blue-600"
                >
                  Thêm vào order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuList; 