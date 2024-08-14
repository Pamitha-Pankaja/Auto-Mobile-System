import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/HomePage';
import AdminDashboard from './pages/AdminDashboard';
import AuthPage from './pages/AuthPage';
import Appointment from './pages/Appointment';
import Navbar from './components/Navbar';
import SubServices from './components/HomeSections/SubServices';

const App = () => {
  
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/signin' element={<AuthPage />} />
          <Route path='/signup' element={<AuthPage />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/services" element={<SubServices />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
