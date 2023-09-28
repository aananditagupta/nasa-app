// src/features/favourites/favouritesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Favourite {
  title: string;
  url: string;
}

const savedFavourites = localStorage.getItem('favourites');
const initialState: Favourite[] = savedFavourites ? JSON.parse(savedFavourites) : [];

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addFavourite: (state, action: PayloadAction<Favourite>) => {
      // Check if an image with the same URL is already in the state
      const isAlreadyAdded = state.some(fav => fav.url === action.payload.url);

      if (!isAlreadyAdded) {
        // If not, add it
        state.push(action.payload);
        localStorage.setItem('favourites', JSON.stringify(state));
      }
      // If it's already in the state, do nothing
    },
    /* 
      - When removing a favorite, the reducer returns the new state directly. This is because, by default, createSlice assumes you're using the Immer 
      library (which is included with Redux Toolkit). Immer lets you write "mutative" logic, but it actually works in an immutable way. So while with 
      Immer you can use state.push or other mutative methods, to remove an item from the array, it's simpler to return a new array directly.
      - Every time a favorite is added or removed, we update the localStorage to reflect this change. This way, even if the user reloads the page or 
      comes back later, their list of favorites will remain the same.
    */
    removeFavourite: (state, action: PayloadAction<{ url: string }>) => {
      // Find the index of the favourite to remove
      const index = state.findIndex(fav => fav.url === action.payload.url);
      if (index !== -1) {
        state.splice(index, 1);
        localStorage.setItem('favourites', JSON.stringify(state));
      }
    },
  }
});

export const { addFavourite, removeFavourite } = favouritesSlice.actions;
export default favouritesSlice.reducer;
