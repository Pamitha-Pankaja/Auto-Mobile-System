import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/HomePage';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
