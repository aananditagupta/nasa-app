import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';

const Main = () => {
  const [image, setImage] = useState<any>(null);

  // Function to fetch the Astronomy Picture of the Day from NASA's API
  const fetchImage = async () => {
    try {
      const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
      setImage(response.data);
    } catch (error) {
      console.error("Error fetching the image:", error);
    }
  };

  // Fetch the image when the component mounts
  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div>
      {/* Display the fetched image if available */}
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
          {/* Button to fetch a new image */}
          <Button onClick={fetchImage}>Next</Button>
        </Card>
      )}
      {/* Link to navigate to the favourites route */}
      <a href="/favourites">Favourites</a>
    </div>
  );
};

export default Main;
