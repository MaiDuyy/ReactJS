// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from './cartSlice';

// export const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
export const store = configureStore({
  reducer : {
    cart : cartReducer,
  },
});
export default store;