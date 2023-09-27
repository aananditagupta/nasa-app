// Import necessary libraries and components
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, CardMedia, Typography, Container, Link } from '@mui/material';
import Button from './Button'; 
import { useDispatch } from 'react-redux';
import { addFavourite } from '../store/actions';

const Main = () => {
  // Define state for storing the fetched image data
  const [image, setImage] = useState<any>(null);
  const dispatch = useDispatch();

  // Function to fetch the Astronomy Picture of the Day from NASA's API
  const fetchImage = async () => {
    try {
      const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=1');
      
      // Set the fetched data to the state -> since this is always going to return an array, [0] will ensure that only the first image is stored
      setImage(response.data[0]);
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
            height="75%"
            width="100%"
            image={image.url}
            alt={image.title}
          />
          <CardContent>
            {/* Display the title of the fetched image */}
            <Typography variant="h5">{image.title}</Typography>
          </CardContent>
          
          <Button label="Next" color="primary" onClick={fetchImage} />
          <Button onClick={() => dispatch(addFavourite({ title: image.title, url: image.url }))} label="Save"></Button>
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
