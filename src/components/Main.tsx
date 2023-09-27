import axios from 'axios';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addFavourite } from '../features/favourites/favouritesSlice';
import React from 'react';

export const Main = () => {
  const [image, setImage] = React.useState<any>(null);
  const dispatch = useDispatch();

  const fetchImage = async () => {
    const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=1');
    setImage(response.data);
  };

  React.useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div>
      {image && (
        <Card>
          <CardMedia
            component="img"
            height="140"
            image={image.url}
            alt={image.title}
          />
          <CardContent>
            <Typography variant="h5">{image.title}</Typography>
          </CardContent>
          <Button onClick={fetchImage}>Next</Button>
          <Button onClick={() => dispatch(addFavourite({ title: image.title, url: image.url }))}>Save</Button>
        </Card>
      )}
      <a href="/favourites">Favourites</a>
    </div>
  );
};
