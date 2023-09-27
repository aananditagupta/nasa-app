import { configureStore } from '@reduxjs/toolkit';
import {favouritesReducer} from './reducers';

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    favourites: favouritesReducer
  },
});

export default store;
