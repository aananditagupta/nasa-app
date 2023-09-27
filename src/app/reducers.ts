import { ADD_FAVOURITE } from './actions';

interface FavouriteImage {
    url: string;
    title: string;
  }
  
  interface FavouritesState {
    images: FavouriteImage[];
  }

const initialState: FavouritesState = {
  images: [],
};

export function favouritesReducer(state = initialState, action: any): FavouritesState {
    console.log("favouritesReducer called");
  switch (action.type) {
    case ADD_FAVOURITE:
      return {
        ...state,
        images: [...state.images, action.payload],
      };
    default:
      return state;
  }
}
