import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import AdminDashboard from './pages/AdminDashboard';
import AuthPage from './pages/AuthPage';
import Appointment from './pages/Appointment';
import AboutUs from './components/HomeSections/AboutUs';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/signin' element={<AuthPage/>}/>
          <Route path='/signup' element={<AuthPage/>}/>
          <Route path="/appointment" element={<Appointment/>}/>
          <Route path="/dashboard" element={<AdminDashboard/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;
