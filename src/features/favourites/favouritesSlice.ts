// src/features/favourites/favouritesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Favourite {
  title: string;
  url: string;
}

const initialState: Favourite[] = [];

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addFavourite: (state, action: PayloadAction<Favourite>) => {
      state.push(action.payload);
    }
  }
});

export const { addFavourite } = favouritesSlice.actions;
export default favouritesSlice.reducer;
