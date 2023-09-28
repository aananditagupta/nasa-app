import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { removeFavourite } from '../features/favourites/favouritesSlice';
import { Button, Paper, Grid, Typography, Box, AppBar, Toolbar, IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { Link } from 'react-router-dom'; // Import Link component

function FavouritesPage() {
  // Fetch the current state of favourites from the Redux store
  const favourites = useSelector((state: RootState) => state.favourites);
  
  // Get the dispatch function to dispatch actions to the Redux store
  const dispatch = useDispatch();

  /**
   * Handle the removal of a favourite.
   * This function dispatches the removeFavourite action with the URL of the favourite to be removed.
   * @param {string} url - The URL of the favourite to remove
   */
  const handleRemove = (url: string) => {
    dispatch(removeFavourite({ url }));
  };

  return (
    // Using Box as a container with some padding for spacing
    <Box p={2}>
      {/* Adding an AppBar for the header */}
      <AppBar position="static">
        <Toolbar>
          {/* IconButton with a Link to navigate back to the previous page */}
          <IconButton edge="start" color="inherit" component={Link} to="/">
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" style={{ marginLeft: '16px' }}>
            Favourites
          </Typography>
        </Toolbar>
      </AppBar>
      {/* Using Grid to layout the favourites list */}
      <Grid container spacing={1}>
        {favourites.map((favourite) => (
          // Grid item for each favourite
          <Grid item xs={4} key={favourite.url}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <Grid container spacing={1} justifyContent={"center"} textAlign={"center"}>
                {/* Grid for image */}
                <Grid item xs={6}>
                  <img src={favourite.url} alt={favourite.title} style={{ maxWidth: '50%', borderRadius: '16px' }} />
                </Grid>
                {/* Grid for title and remove button */}
                <Grid item xs={10}>
                  <Typography variant="h6">{favourite.title}</Typography>
                  <Button color="secondary" onClick={() => handleRemove(favourite.url)}>
                    Remove
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default FavouritesPage;
