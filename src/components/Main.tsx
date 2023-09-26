// Import necessary libraries and components
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, CardContent, CardMedia, Typography, Container, Link } from '@mui/material';

const Main = () => {
  // Define state for storing the fetched image data
  const [image, setImage] = useState<any>(null);

  // Function to fetch the Astronomy Picture of the Day from NASA's API
  const fetchImage = async () => {
    try {
      const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
      
      // Set the fetched data to the state
      setImage(response.data);
    } catch (error) {
      // Log any errors that occur during the fetch operation
      console.error("Error fetching the image:", error);
    }
  };

  // useEffect hook to fetch the image when the component mounts
  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <Container>
      {/* Conditional rendering: If an image is available in the state, display it */}
      {image && (
        <Card>
          {/* Display the fetched image */}
          <CardMedia
            component="img"
            height="140"
            image={image.url}
            alt={image.title}
          />
          <CardContent>
            {/* Display the title of the fetched image */}
            <Typography variant="h5">{image.title}</Typography>
          </CardContent>
          
          {/* Button to fetch a new image */}
          <Button variant="contained" color="primary" onClick={fetchImage}>Next</Button>
        </Card>
      )}
      
      {/* MUI Link component for navigation to the Favourites page */}
      <Link href="/favourites" color="secondary">
        Favourites
      </Link>
    </Container>
  );
};

export default Main;
