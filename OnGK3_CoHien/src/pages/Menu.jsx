import React from 'react';
import MenuList from '../components/Card';

const Menu = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className=" text-4xl font-bold text-center mb-8">Thực đơn</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
        <MenuList />
      </div>
    </div>
  );
};

export default Menu; 