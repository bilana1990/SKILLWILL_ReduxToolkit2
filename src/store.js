// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import beerReducer from './beerSlice';

const store = configureStore({
  reducer: {
    beers: beerReducer
  }
});

export default store;