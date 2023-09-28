import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Main} from './components/Main';
import Favourites from './components/Favourites';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for displaying the main component with NASA's picture */}
        <Route path="/" element={<Main />} />
        
        {/* Route for displaying the favourites (currently a placeholder) */}
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </Router>
  );
}

export default App;
