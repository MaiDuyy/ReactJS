import { createSlice } from '@reduxjs/toolkit'
import { useMemo } from 'react';

const initialState = {
      items : [],
      quantity : 0,
      total: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
      addToCart : (state, action) => {
          const tonTai = state.items.find(item => item.id == action.payload.id);
          if(tonTai) {
            tonTai.quantity += 1;
          }else{
            state.items.push({...action.payload,quantity:1});
          }
          state.quantity +=1 ; 
          state.total =state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
      },
      removerFromCart : (state, aciton) =>{
        state.items = state.items.filter(item => item.id !== aciton.payload);
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
      removeALL : (state) =>{
        state.items = [];
        state.total = 0;
        state.quantity = 0;
      },
      totalItems: (state) => {
        state.total = useMemo((total, item)=> total + (item.quantity + item.price),0);
      }

  }
});

export const {addToCart,removerFromCart,removeALL,updateQuantity ,totalItems} = cartSlice.actions

export default cartSlice.reducer