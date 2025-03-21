import React from 'react';
import { Link } from 'react-router-dom';
import menuData from '../data/menu.json';

const Home = () => {
  const featuredDishes = menuData.dishes.slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center py-16 bg-gray-100 rounded-lg mb-12">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với Nhà hàng ABC</h1>
        <p className="text-xl text-gray-600 mb-8">
          Trải nghiệm ẩm thực Việt Nam với những món ăn truyền thống được chế biến tinh tế
        </p>
        <Link
          to="/menu"
          className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Xem thực đơn
        </Link>
      </div>

      {/* Featured Dishes */}
      <h2 className="text-3xl font-bold text-center mb-8">Món ăn nổi bật</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {featuredDishes.map((dish) => (
          <div key={dish.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
              <p className="text-gray-600 mb-3">{dish.description}</p>
              <p className="text-primary font-bold">
                {dish.price.toLocaleString('vi-VN')} VNĐ
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* About Section */}
      <div className="py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Về chúng tôi</h2>
            <p className="text-gray-600 mb-6">
              Nhà hàng ABC tự hào mang đến cho quý khách những trải nghiệm ẩm thực
              đặc sắc với các món ăn truyền thống Việt Nam. Chúng tôi cam kết sử dụng
              những nguyên liệu tươi ngon nhất và được chế biến bởi đội ngũ đầu bếp
              giàu kinh nghiệm.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Liên hệ với chúng tôi
            </Link>
          </div>
          <div className="text-center">
            <Link
              to="/book-table"
              className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors text-lg"
            >
              Đặt bàn ngay
            </Link>
            <p className="mt-4 text-gray-600">
              Hãy đặt bàn trước để có trải nghiệm tốt nhất tại nhà hàng của chúng tôi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 