// import React, { useEffect, useState } from 'react';
// import { Link as ScrollLink, Events, scrollSpy } from 'react-scroll';
// import { Link, useLocation } from 'react-router-dom';
// import logo from '../assets/images/autorix-logo.png';
// import '../stylesheets/style.css';

// const Navbar = () => {
//     const [activeLink, setActiveLink] = useState('home');
//     const location = useLocation();

//     useEffect(() => {
//         const handleScroll = () => {
//             const sections = ['home', 'about', 'services', 'team', 'contact'];
//             const scrollY = window.scrollY;

//             sections.forEach(section => {
//                 const element = document.getElementById(section);
//                 if (element) {
//                     const offsetTop = element.offsetTop;
//                     const height = element.offsetHeight;
//                     if (scrollY >= offsetTop - 100 && scrollY < offsetTop + height - 100) {
//                         setActiveLink(section);
//                     }
//                 }
//             });
//         };

//         window.addEventListener('scroll', handleScroll);
//         scrollSpy.update();

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     const handleNavClick = (section) => {
//         if (location.pathname !== '/') {
//             // If not on the home page, navigate to the home page and then scroll to the section
//             return () => {
//                 window.location.href = `/#${section}`;
//             };
//         } else {
//             // If already on the home page, use react-scroll to scroll smoothly
//             return null;
//         }
//     };

//     return (
//         <header className="header">
//             <div className="main-header">
//                 <div className="container-fluid">
//                     <nav className="navbar navbar-expand-lg navbar-light fixed-top p-2 ">
//                         <div className="container d-flex justify-content-center">
//                             <Link className="navbar-brand pt-0" to="/"><img src={logo} alt="Logo" className="img-fluid" /></Link>
//                             <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                                 <span className="navbar-toggler-icon"></span>
//                                 <span className="navbar-toggler-icon"></span>
//                                 <span className="navbar-toggler-icon"></span>
//                             </button>
//                             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                                 <ul className="navbar-nav mr-0">
//                                     <li className={`nav-item ${activeLink === 'home' ? 'active' : ''}`}>
//                                         <ScrollLink
//                                             className="nav-link text-decoration-none navbar-text-color home-margin-top"
//                                             to="home"
//                                             smooth={true}
//                                             duration={500}
//                                             onClick={handleNavClick('home')}
//                                         >
//                                             Home
//                                         </ScrollLink>
//                                     </li>
//                                     <li className={`nav-item ${activeLink === 'about' ? 'active' : ''}`}>
//                                         <ScrollLink
//                                             className="nav-link text-decoration-none navbar-text-color"
//                                             to="about"
//                                             smooth={true}
//                                             duration={500}
//                                             onClick={handleNavClick('about')}
//                                         >
//                                             About
//                                         </ScrollLink>
//                                     </li>      
//                                     <li className={`nav-item ${activeLink === 'services' ? 'active' : ''}`}>
//                                         <ScrollLink
//                                             className="nav-link text-decoration-none navbar-text-color"
//                                             to="services"
//                                             smooth={true}
//                                             duration={500}
//                                             onClick={handleNavClick('services')}
//                                         >
//                                             Services
//                                         </ScrollLink>
//                                     </li>                          
//                                     <li className={`nav-item ${activeLink === 'team' ? 'active' : ''}`}>
//                                         <ScrollLink
//                                             className="nav-link text-decoration-none contact-us-margin navbar-text-color"
//                                             to="team"
//                                             smooth={true}
//                                             duration={500}
//                                             onClick={handleNavClick('team')}
//                                         >
//                                             Team
//                                         </ScrollLink>
//                                     </li>
//                                     <li className={`nav-item ${activeLink === 'contact' ? 'active' : ''}`}>
//                                         <ScrollLink
//                                             className="nav-link text-decoration-none contact-us-margin navbar-text-color"
//                                             to="contact"
//                                             smooth={true}
//                                             duration={500}
//                                             onClick={handleNavClick('contact')}
//                                         >
//                                             Contact
//                                         </ScrollLink>
//                                     </li>
//                                 </ul>
//                                 <div className="btn-talk ml-auto">
//                                     <ul className="m-0 p-0">
//                                         <li className="list-unstyled d-lg-inline-block">
//                                             <Link className="nav-link contact" to="/appointment">
//                                                 Get a Quote<i className="fa-solid fa-arrow-right"></i>
//                                             </Link>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </nav>
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Navbar;




import React, { useEffect, useState, useContext } from 'react';
import { Link as ScrollLink, Events, scrollSpy } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/autorix-logo.png';
import '../stylesheets/style.css';
import { AuthContext } from './AuthForms/AuthContext';

const Navbar = () => {
    const { state, dispatch } = useContext(AuthContext); // Access user state from AuthContext
    const [activeLink, setActiveLink] = useState('home');
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'services', 'team', 'contact'];
            const scrollY = window.scrollY;

            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const height = element.offsetHeight;
                    if (scrollY >= offsetTop - 100 && scrollY < offsetTop + height - 100) {
                        setActiveLink(section);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        scrollSpy.update();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNavClick = (section) => {
        if (location.pathname !== '/') {
            return () => {
                window.location.href = `/#${section}`;
            };
        } else {
            return null;
        }
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
                            <Link className="navbar-brand pt-0" to="/"><img src={logo} alt="Logo" className="img-fluid" /></Link>
                            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                <span className="navbar-toggler-icon"></span>
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className={`nav-item ${activeLink === 'home' ? 'active' : ''}`}>
                                        <ScrollLink
                                            className="nav-link text-decoration-none navbar-text-color home-margin-top"
                                            to="home"
                                            smooth={true}
                                            duration={500}
                                            onClick={handleNavClick('home')}
                                        >
                                            Home
                                        </ScrollLink>
                                    </li>
                                    <li className={`nav-item ${activeLink === 'about' ? 'active' : ''}`}>
                                        <ScrollLink
                                            className="nav-link text-decoration-none navbar-text-color"
                                            to="about"
                                            smooth={true}
                                            duration={500}
                                            onClick={handleNavClick('about')}
                                        >
                                            About
                                        </ScrollLink>
                                    </li>      
                                    <li className={`nav-item ${activeLink === 'services' ? 'active' : ''}`}>
                                        <ScrollLink
                                            className="nav-link text-decoration-none navbar-text-color"
                                            to="services"
                                            smooth={true}
                                            duration={500}
                                            onClick={handleNavClick('services')}
                                        >
                                            Services
                                        </ScrollLink>
                                    </li>                          
                                    <li className={`nav-item ${activeLink === 'team' ? 'active' : ''}`}>
                                        <ScrollLink
                                            className="nav-link text-decoration-none contact-us-margin navbar-text-color"
                                            to="team"
                                            smooth={true}
                                            duration={500}
                                            onClick={handleNavClick('team')}
                                        >
                                            Team
                                        </ScrollLink>
                                    </li>
                                    <li className={`nav-item ${activeLink === 'contact' ? 'active' : ''}`}>
                                        <ScrollLink
                                            className="nav-link text-decoration-none contact-us-margin navbar-text-color"
                                            to="contact"
                                            smooth={true}
                                            duration={500}
                                            onClick={handleNavClick('contact')}
                                        >
                                            Contact
                                        </ScrollLink>
                                    </li>
                                </ul>
                                <div className="ml-auto d-flex align-items-center">
                                    <ul className="navbar-nav mr-3">
                                        <li className="nav-item">
                                            <Link className="nav-link contact" to="/appointment">
                                                Get a Quote<i className="fa-solid fa-arrow-right ml-2"></i>
                                            </Link>
                                        </li>
                                    </ul>
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

