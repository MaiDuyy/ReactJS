import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
  quantity: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.quantity += 1;
      state.total = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    removeFromCart: (state, action) => {
      const itemToRemove = state.items.find(item => item.id === action.payload);
      if (itemToRemove) {
        state.quantity -= itemToRemove.quantity;
        state.items = state.items.filter(item => item.id !== action.payload);
        state.total = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        const quantityDiff = quantity - item.quantity;
        item.quantity = quantity;
        state.quantity += quantityDiff;
        state.total = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.quantity = 0;
    }
  }
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
