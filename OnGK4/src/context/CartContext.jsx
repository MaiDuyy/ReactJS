import { createContext, useContext, useState } from "react";


const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (items) => {
            setCartItems(prevItems => [...prevItems,{...items} ])
    };
    const removeFromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(items => items.id !== id))
    };

    const totalItems = cartItems.length ; 


  return (
   <CartContext.Provider
   value={{addToCart, removeFromCart, cartItems,totalItems}}
   >
    {children}
   </CartContext.Provider>
  )
};



export const useCart = () => {
    const context = useContext(CartContext);
    return context;
}
