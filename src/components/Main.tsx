import axios from 'axios';
import { Button, Card, CardContent, CardMedia, Typography, Box, Grid, AppBar, Toolbar, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addFavourite } from '../features/favourites/favouritesSlice';
import React from 'react';

// Define an interface for the image data from NASA API
interface NASAImageData {
  title: string;
  url: string;
  [key: string]: any;
}

export const Main = () => {
  const [image, setImage] = React.useState<NASAImageData | null>(null);
  const dispatch = useDispatch();

  const fetchImage = async () => {
    const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=1');
    // check if data exists
    if( response.data.length > 0) {
      setImage(response.data[0]);
    }
  };

  React.useEffect(() => {
    fetchImage();
  }, []);

  return (
    <Box p={2}>
      {/* Adding an AppBar for the header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" flexGrow={1}>
            NASA Astronomy Picture of the Day
          </Typography>
          {/* IconButton with a Link to navigate to the Favourites page */}
          <IconButton color="inherit" component={Link} to="/favourites">
            Go to Favourites
          </IconButton>
        </Toolbar>
      </AppBar>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          {image && (
            <Card>
              <CardMedia
                component="img"
                height={"500"}
                width={"500"}
                image={image.url}
                alt={image.title}
              />
              <CardContent>
                <Typography variant="h5">{image.title}</Typography>
              <Button variant="contained" color="primary" onClick={fetchImage}>
                Next
              </Button>
              <Button variant="contained" color="secondary" onClick={() => dispatch(addFavourite({ title: image.title, url: image.url }))}>
                Save
              </Button>
              </CardContent>
            </Card>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
