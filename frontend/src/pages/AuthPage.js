import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SignIn from '../components/AuthForms/SignIn';
import SignUp from '../components/AuthForms/SignUp';
import Navbar from '../components/Navbar';

const AuthPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isLoginPage = location.pathname === '/signin';

    const toggleForm = () => {
        if (isLoginPage) {
            navigate('/signup');
        } else {
            navigate('/signin');
        }
    };

    return (
        <div className="auth-container d-flex justify-content-center align-items-center min-vh-100">
            {isLoginPage ? (
                <SignIn toggleForm={toggleForm} />
            ) : (
                <SignUp toggleForm={toggleForm} />
            )}
        </div>
    );
};

export default AuthPage;
