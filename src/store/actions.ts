// Define action types
export const ADD_FAVOURITE = 'ADD_FAVOURITE';

// Define action creators
export function addFavourite(image: { title: string; url: string }) {
  return {
    type: ADD_FAVOURITE,
    payload: image
  };
}
