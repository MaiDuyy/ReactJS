import React, { createContext, useContext, useState, useMemo } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // thêm vào giỏ hàng
  const addToCart = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        return prevItems.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  // Xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };
//   const removeFromCart = (itemId) => {
//     setCartItems((prevCart) => prevCart.filter((product) => product.id !== itemId))
//   }
  const removeAll = () => {
    setCartItems([]);
  };
  // Cập nhật số lượng sản phẩm 
  const updateQuantity = (itemId, quantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  // Tìm kiếm sản phẩm
  const searchItems = (query) => {
    setSearchQuery(query);
  };

  // Tính giá sử dụng useMemo
  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }, [cartItems]);

  // lọc sản phẩm dựa trên từ khóa tìm kiếm
  const filteredItems = useMemo(() => {
    if (!searchQuery) return cartItems;
    return cartItems.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [cartItems, searchQuery]);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      searchItems,
      removeAll,
      searchQuery,
      totalPrice,
      filteredItems
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}; 