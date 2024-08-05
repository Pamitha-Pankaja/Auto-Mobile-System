import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/style.css';

const Navbar = () => {
    return (
        <header className="header">
            <div className="main-header">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg navbar-light fixed-top p-4">
                        <div className="container d-flex justify-content-center">
                            <Link className="navbar-brand pt-0" to="/"><img src="./assets/images/autorix-logo.png" alt="" className="img-fluid" /></Link>
                            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                <span className="navbar-toggler-icon"></span>
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-0">
                                    <li className="nav-item active">
                                        <Link className="nav-link text-decoration-none navbar-text-color home-margin-top" to="/">Home<span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-decoration-none navbar-text-color" to="/aboutus">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-decoration-none navbar-text-color" to="/services">Services</Link>
                                    </li>
                                    <li className="nav-item dropdown sancare-li-color show">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Pages</a>
                                        <div className="dropdown-menu autorix-drop-down">
                                            <ul className="list-unstyled">
                                                <li className="nav-item"> <Link className="dropdown-item nav-link" to="/projects">Projects</Link></li>
                                                <li className="nav-item"> <Link className="dropdown-item nav-link" to="/cart">Cart</Link></li>
                                                <li className="nav-item"> <Link className="dropdown-item nav-link" to="/checkout">Checkout</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item navbar-text-color"><Link className="nav-link text-decoration-none contact-us-margin navbar-text-color" to="/our-team">Team</Link></li>
                                    <li className="nav-item navbar-text-color"><Link className="nav-link text-decoration-none contact-us-margin navbar-text-color" to="/shop">Shop</Link></li>
                                    <li className="nav-item navbar-text-color"><Link className="nav-link text-decoration-none contact-us-margin navbar-text-color" to="/contact">Contact</Link></li>
                                </ul>
                                <div className="btn-talk ml-auto">
                                    <ul className="m-0 p-0">
                                        <li className="list-unstyled d-lg-inline-block"><Link className="nav-link contact" to="/contact">Get a Quote<i className="fa-solid fa-arrow-right"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            </div>
                    </nav>
                </div>
            </div>
    </header >
  );
};

export default Navbar;
