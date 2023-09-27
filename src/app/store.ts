// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import favouritesReducer from '../features/favourites/favouritesSlice';

const store = configureStore({
  reducer: {
    favourites: favouritesReducer
  }
});

export default store;
