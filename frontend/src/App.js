import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import Navbar from './components/Navbar';
import AdminDashboard from './pages/AdminDashboard';
import AboutUs from './components/HomeSections/AboutUs';

const App = () => {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/dashboard" element={<AdminDashboard/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;
