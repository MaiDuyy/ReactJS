import React from 'react';
import MenuList from '../components/MenuList';

const Menu = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-8">Thực đơn</h1>
      <MenuList />
    </div>
  );
};

export default Menu; 