import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SignIn from '../components/AuthForms/SignIn';
import SignUp from '../components/AuthForms/SignUp';

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Set the path based on the form type
    if (isSignUp) {
      navigate('/register');
    } else {
      navigate('/login');
    }
  }, [isSignUp, navigate]);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="auth-container d-flex justify-content-center align-items-center min-vh-100">
      {isSignUp ? (
        <SignUp toggleForm={toggleForm} />
      ) : (
        <SignIn toggleForm={toggleForm} />
      )}
    </div>
  );
};

export default AuthPage;
