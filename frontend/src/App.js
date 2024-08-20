import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import Appointment from './pages/Appointment';
import Navbar from './components/Navbar';
import SubServices from './components/HomeSections/SubServices';
import AdminDashboard from './pages/AdminDashboard';
import UserProfile from './pages/UserProfile';

const App = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const location = useLocation();
  const showNavbar = location.pathname !== '/dashboard';

  useEffect(() => {
    // Capture the `beforeinstallprompt` event
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault(); // Prevent the automatic display
      setDeferredPrompt(e); // Save the event
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  // Function to show the install prompt when user clicks a button
  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt(); // Show the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        setDeferredPrompt(null); // Reset the prompt after interaction
      });
    }
  };

  return (
    <div className="App">
      {showNavbar && <Navbar />}
      {/* Install button can be displayed conditionally */}
      <button onClick={handleInstallClick}>Install App</button>

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
