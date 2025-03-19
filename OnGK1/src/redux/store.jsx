import { configureStore } from '@reduxjs/toolkit';
import bicycleReducer from './bicycleSlice';

export const store = configureStore({
  reducer: {
    bicycles: bicycleReducer,
  },
});