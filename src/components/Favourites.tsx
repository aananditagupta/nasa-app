import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Favourites = () => {
  const favourites = useSelector((state: RootState) => state.favourites.images);

  return (
    <div>
      {favourites.map((image, index) => (
        <div key={index}>
          <img src={image.url} alt={image.title} style={{ width: '100%' }} />
          <p>{image.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Favourites;
