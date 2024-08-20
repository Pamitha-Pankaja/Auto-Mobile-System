import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import Appointment from './pages/Appointment';
import Navbar from './components/Navbar';
import SubServices from './components/HomeSections/SubServices';
import AdminDashboard from './pages/AdminDashboard';
import UserProfile from './pages/UserProfile';

const App = () => {
  const location = useLocation();
  const showNavbar = location.pathname !== '/dashboard';

  useEffect(() => {
    if(location.pathname ==='/userprofile') {
      document.body.style.backgroundColor = '#192541'
    }else{
      document.body.style.backgroundColor = '#192541'
    }
  }, [location.pathname]);

  return (
    <div className="App">
      {showNavbar && <Navbar />}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/signin' element={<AuthPage />} />
          <Route path='/signup' element={<AuthPage />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/services" element={<SubServices />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/userprofile" element={<UserProfile />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
