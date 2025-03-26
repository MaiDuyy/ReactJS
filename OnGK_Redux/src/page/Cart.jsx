import React, { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../store/cartSlice';

function Cart() {
  const dispatch = useDispatch();
  const { items, total, quantity } = useSelector((state) => state.cart);

  // Memoize handlers with useCallback
  const handleQuantityChange = useCallback((id, newQuantity) => {
    if (newQuantity < 1) return;
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  }, [dispatch]);

  const handleRemoveItem = useCallback((id) => {
    dispatch(removeFromCart(id));
  }, [dispatch]);

  const handleClearCart = useCallback(() => {
    dispatch(clearCart());
  }, [dispatch]);

  // Memoize empty cart view
  const emptyCartView = useMemo(() => (
    <div className="max-w-7xl mx-auto p-5">
      <div className="text-center py-10 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Your cart is empty</h2>
        <p className="text-gray-600">Add some products to your cart!</p>
      </div>
    </div>
  ), []);

  return (
    <div className="max-w-7xl mx-auto p-5">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Shopping Cart</h2>
      <div className="space-y-4 mb-8">
        {items.map((item) => (
          <div key={item.id} className="flex items-center bg-white p-5 rounded-lg shadow-sm">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-24 h-24 object-cover rounded-md mr-5"
            />
            <div className="flex-1">
              <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
              <p className="text-green-600 font-semibold mt-1">${item.price}</p>
            </div>
            <div className="flex items-center gap-3 mx-5">
              <button 
              
                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
              >
                -
              </button>
              <span className="w-8 text-center font-semibold">{item.quantity}</span>
              <button 
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
              >
                +
              </button>
            </div>
            <button 
              onClick={() => handleRemoveItem(item.id)}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between mb-4 text-lg text-gray-800">
          <span>Total Items:</span>
          <span>{quantity}</span>
        </div>
        <div className="flex justify-between mb-6 text-lg font-semibold text-gray-800">
          <span>Total Price:</span>
          <span>${total}</span>
        </div>
        <button 
          onClick={handleClearCart}
          className="w-full py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;