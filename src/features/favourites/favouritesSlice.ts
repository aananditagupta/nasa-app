// src/features/favourites/favouritesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Favourite {
  title: string;
  url: string;
}

const savedFavourites = localStorage.getItem('favourites')
const initialState: Favourite[] = savedFavourites ? JSON.parse(savedFavourites) : [];

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addFavourite: (state, action: PayloadAction<Favourite>) => {
      state.push(action.payload);
      localStorage.setItem('favourites', JSON.stringify(state))
    }
  }
});

export const { addFavourite } = favouritesSlice.actions;
export default favouritesSlice.reducer;
