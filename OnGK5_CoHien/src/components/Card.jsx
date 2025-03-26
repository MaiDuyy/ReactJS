import React from 'react';
import data from '../data/menu.json';
import { Link, useNavigate } from 'react-router-dom';

function Card() {
  const navigate = useNavigate(); 

  function handleShowDetails(id) {
    navigate(`/book/${id}`);
  }

  return (
    <>
      {data.book.map((item) => (
        <div
          key={item.id}
          className="shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={item.image || "default-image-url"} // Fallback for missing images
            alt={item.name}
            className="w-full rounded-md h-48 object-cover"
          />
          <div className="p-4">
            <h1>{item.name}</h1>
            <p>{item.author}</p>
            <p>{item.price.toLocaleString()} VND</p>
          </div>
          <div className="flex items-center justify-between px-4 py-4">
            <button
              onClick={() => handleShowDetails(item.id)}
              className="border px-4 py-2 rounded-lg bg-black text-white font-semibold hover:bg-white hover:text-black duration-300"
            >
              Chi tiết
            </button>
            <Link to="/cart">
              <button
                className="border px-4 py-2 rounded-lg bg-sky-800 text-white font-semibold hover:bg-white hover:text-sky-800 duration-300"
              >
                Thêm vào giỏ
              </button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
