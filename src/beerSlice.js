// src/beerSlice.js
import { createSlice } from '@reduxjs/toolkit';

const beerSlice = createSlice({
  name: 'beers',
  initialState: {
    beers: []
  },
  reducers: {
    setBeers: (state, action) => {
      state.beers = action.payload;
    }
  }
});

export const { setBeers } = beerSlice.actions;
export default beerSlice.reducer;