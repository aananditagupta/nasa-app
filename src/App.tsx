import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for displaying the main component with NASA's picture */}
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
