import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Favourites from './components/Favourites';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for displaying the main component with NASA's picture */}
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
