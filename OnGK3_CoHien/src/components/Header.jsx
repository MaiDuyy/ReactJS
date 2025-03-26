import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    // <nav className="bg-gray-800 text-white mb-4">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex items-center justify-between h-16">
    //       <div className="flex items-center">
    //         <Link to="/" className="text-xl font-bold">
    //           Nhà hàng ABC
    //         </Link>
    //       </div>


    //       <div className="hidden md:flex items-center space-x-4">
    //         <Link to="/" className="hover:text-gray-300">
    //           Trang chủ
    //         </Link>
    //         <Link to="/menu" className="hover:text-gray-300">
    //           Thực đơn
    //         </Link>
    //         <Link to="/contact" className="hover:text-gray-300">
    //           Liên hệ
    //         </Link>
    //         <Link
    //           to="/book-table"
    //           className="ml-4 px-4 py-2 rounded-md bg-primary hover:bg-blue-600 text-white"
    //         >
    //           Book Table
    //         </Link>
    //       </div>
    //     </div>


    //   </div>
    // </nav>

    <nav className='bg-gray-800 text-white mb-4'>
      <div className='max-w-7xl px-4 mx-auto'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <Link>Logo</Link>
          </div>
          <div className='flex items-center space-x-7 font-semibold'>
            <Link to={'/'} className='hover:text-gray-300'>Home</Link>
            <Link to={'/menu'} className='hover:text-gray-300'>Menu</Link>
            <Link to={'/contact'} className='hover:text-gray-300'>Contact</Link>
            <Link to={'/cart'} className='border py-2 px-2 rounded bg-cyan-800 hover:bg-cyan-400 hover:text-black'>Cart</Link>
            </div>
        </div>
      </div>
    </nav>

  );
};

export default Header; 