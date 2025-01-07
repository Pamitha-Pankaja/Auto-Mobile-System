import React, { useEffect, useState, useContext, useRef } from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/images/autodock-logo.png';
import '../stylesheets/style.css';
import { AuthContext } from './AuthForms/AuthContext';

const Navbar = () => {
    const { state, dispatch } = useContext(AuthContext);
    const [activeLink, setActiveLink] = useState('home');
    const [isCollapsed, setIsCollapsed] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const navbarRef = useRef(null); // Reference to the navbar

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

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check if click is outside of the navbar container
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setIsCollapsed(true); // Close the navbar
            }
        };

        // Add event listener to detect clicks outside the navbar
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleNavClick = (section) => {
        setActiveLink(section);
        navigate(`/#${section}`);
        setIsCollapsed(true); // Close the navbar on link click
    };

    const handleToggle = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
        setIsCollapsed(true); // Close the navbar on logout
    };

    return (
        <header className="header" ref={navbarRef}> {/* Attach the reference to the main navbar container */}
            <div className="main-header">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg navbar-light fixed-top p-2">
                        <div className="container d-flex justify-content-between">
                            <Link className="navbar-brand pt-0" to="/">
                                <img src={logo} alt="Logo" className="nav-logo img-fluid" />
                            </Link>
                            <div
                                className={`navbar-toggler ${isCollapsed ? 'collapsed' : ''}`}
                                type="button"
                                onClick={handleToggle}
                                // data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded={!isCollapsed}
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                                <span className="navbar-toggler-icon"></span>
                                <span className="navbar-toggler-icon"></span>
                            </div>
                            <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarSupportedContent">
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
                                <div className="btn-talk ml-auto">
                                    <ul className="m-0 p-0">
                                        <li className="list-unstyled d-lg-inline-block">
                                            <Link className="nav-link" to="/appointment">
                                                Book Now<i className="fa-solid fa-arrow-right"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="nav-end ml-auto d-flex">
                                    {state.user ? (
                                        <>
                                            {/* Display "Profile" link only on mobile screens (no blank space for profile icon) */}
                                            <Link to="/userprofile" className="nav-link d-lg-none mobile-profile-link">
                                                Profile
                                            </Link>
                                            {/* Display profile icon only on larger screens */}
                                            <Link to="/userprofile" className="nav-link d-none d-lg-block ">
                                                <i className="fas fa-user fa-lg profile-icon"></i>
                                            </Link>
                                            <div className="btn-login ml-auto">
                                                <ul className="m-0 p-0">
                                                    <li className="list-unstyled d-lg-inline-block">
                                                        <Link className="btn btn-outline-primary" onClick={handleLogout}>
                                                            Logout
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="btn-login ml-auto">
                                            <ul className="m-0 p-0">
                                                <li className="list-unstyled d-lg-inline-block">
                                                    <Link to="/signin" className="btn btn-outline-primary">
                                                        Sign In
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
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
