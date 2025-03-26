import React, { useState, useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import data from '../data/menu.json'

function BookDetail() {
  const { id } = useParams(); 
  const [book, setBook] = useState(null); 

  useEffect(() => {
    const foundBook =data.book.find((item) => item.id === parseInt(id));
    setBook(foundBook);
  }, [id]); 
  if (!book) {

    return <h2 className="text-center">Book not found</h2>;
  }

  return (
    <div className="max-w-7xl px-4 mx-auto">
      <div className="text-center">
        <img src={book.image} alt="" />
        <h1 className="text-4xl font-bold">{book.name}</h1>
        <h2 className="text-2xl mt-2">Author: {book.author}</h2>
        <p className="mt-4">{book.detailedDescription}</p>
        <p className="mt-2 font-semibold">Price: {book.price.toLocaleString()} VND</p>
      </div>
    </div>
  );
}

export default BookDetail;
