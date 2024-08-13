import React, { useEffect, useState, useContext } from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/images/autorix-logo.png';
import '../stylesheets/style.css';
import { AuthContext } from './AuthForms/AuthContext';

const Navbar = () => {
    const { state, dispatch } = useContext(AuthContext);
    const [activeLink, setActiveLink] = useState('home');
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const section = location.hash.replace('#', '') || 'home';
        setActiveLink(section);

        if (section) {
            scroller.scrollTo(section, {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart',
            });
        }
    }, [location]);

    const handleNavClick = (section) => {
        setActiveLink(section);
        navigate(`/#${section}`);
    };

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
        // Additional actions on logout if needed
    };

    return (
        <header className="header">
            <div className="main-header">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg navbar-light fixed-top p-2">
                        <div className="container d-flex justify-content-between">
                            <Link className="navbar-brand pt-0" to="/">
                                <img src={logo} alt="Logo" className="img-fluid" />
                            </Link>
                            <button
                                className="navbar-toggler collapsed"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                                <span className="navbar-toggler-icon"></span>
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className={`nav-item ${activeLink === 'home' ? 'active' : ''}`}>
                                        <ScrollLink
                                            className="nav-link text-decoration-none navbar-text-color home-margin-top"
                                            onClick={() => handleNavClick('home')}
                                        >
                                            Home
                                        </ScrollLink>
                                    </li>
                                    <li className={`nav-item ${activeLink === 'about' ? 'active' : ''}`}>
                                        <ScrollLink
                                            className="nav-link text-decoration-none navbar-text-color"
                                            onClick={() => handleNavClick('about')}
                                        >
                                            About
                                        </ScrollLink>
                                    </li>
                                    <li className={`nav-item ${activeLink === 'services' ? 'active' : ''}`}>
                                        <ScrollLink
                                            className="nav-link text-decoration-none navbar-text-color"
                                            onClick={() => handleNavClick('services')}
                                        >
                                            Services
                                        </ScrollLink>
                                    </li>
                                    <li className={`nav-item ${activeLink === 'team' ? 'active' : ''}`}>
                                        <ScrollLink
                                            className="nav-link text-decoration-none contact-us-margin navbar-text-color"
                                            onClick={() => handleNavClick('team')}
                                        >
                                            Team
                                        </ScrollLink>
                                    </li>
                                    <li className={`nav-item ${activeLink === 'contact' ? 'active' : ''}`}>
                                        <ScrollLink
                                            className="nav-link text-decoration-none contact-us-margin navbar-text-color"
                                            onClick={() => handleNavClick('contact')}
                                        >
                                            Contact
                                        </ScrollLink>
                                    </li>
                                </ul>
                                <div className="ml-auto d-flex align-items-center">
                                    <div className="btn-talk ml-auto">
                                        <ul className="m-0 p-0">
                                            <li className="list-unstyled d-lg-inline-block">
                                                <Link className="nav-link contact" to="/appointment">
                                                    Book Now<i className="fa-solid fa-arrow-right"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    {state.user ? (
                                        <>
                                            <span className="navbar-text mr-3">Hello, {state.user.username}</span>
                                            <button className="btn btn-outline-secondary" onClick={handleLogout}>
                                                Logout
                                            </button>
                                        </>
                                    ) : (
                                        <Link to="/signin" className="btn btn-outline-primary">
                                            Login
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
