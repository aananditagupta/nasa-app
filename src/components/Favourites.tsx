import { useSelector } from 'react-redux';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export const Favourites = () => {
  const favourites = useSelector((state: any) => state.favourites);

  return (
    <div>
      {favourites.map((favourite: any, index: number) => (
        <Card key={index}>
          <CardMedia
            component="img"
            height="140"
            image={favourite.url}
            alt={favourite.title}
          />
          <CardContent>
            <Typography variant="h5">{favourite.title}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
