import React from 'react';
import footerLogo from "../../assets/images/autorix-logo.png";
import footerRightImg from "../../assets/images/footer-right.png";
import footerLeftImg from "../../assets/images/footer-car-img.png";
import footerLeftBarImg from "../../assets/images/footer-bar-left.png"

const Footer = () => {
    return (
        <div>
            <div className=".main-container footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-3 col-sm-6 d-xl-block d-none"></div>
                        <div className="footer-left col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                            <a className="footer-a pt-0" href="index.html">
                                <figure className="navbar-brand-footer" data-aos="flip-left">
                                    <img src={footerLogo} alt="" className="img-fluid" />
                                </figure>
                            </a>
                            <p className="foot-text" data-aos="flip-left">
                                Rerum necessitatibus saepe eveniet aut et voluptates repudiandae sint et molestiae non recusandae.
                            </p>
                            <div className="social-icons aos-init aos-animate position-relative">
                                <ul className="list-unstyled" data-aos="fade-down">
                                    <li>
                                        <a href="#" className="text-decoration-none">
                                            <i className="fa-brands fa-facebook-f social-networks"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-decoration-none">
                                            <i className="fa-brands fa-twitter social-networks"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-decoration-none">
                                            <i className="fa-brands fa-linkedin-in social-networks"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 d-md-block d-none">
                            <ul className="list-unstyled support-footer" data-aos="flip-left">
                                <li className="list-item footer-margin-left">
                                    <h5 className="footer-link footer-services-heading">Opening Hours</h5>
                                </li>
                                <li>
                                    <p className="footer-days">Monday – Saturday</p>
                                    <p className="footer-time">12.00 – 14.45</p>
                                </li>
                                <li>
                                    <p className="footer-days">Sunday – Thursday</p>
                                    <p className="footer-time">17.30 – 00.00</p>
                                </li>
                                <li>
                                    <p className="footer-days">Friday – Saturday</p>
                                    <p className="footer-time">17.30 – 00.00</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 d-sm-block d-none">
                            <div className="footer-list footer-link">
                                <div className="icon-list-box1" data-aos="flip-left">
                                    <ul className="list-unstyled contact-us-ul">
                                        <li className="list-item pl-0">
                                            <h5 className="footer-link footer-get-heading">Contact Info</h5>
                                        </li>
                                        <li className="list-item">
                                            <a href="tel:+4733378901" className="text-decoration-none footer-link-auto">
                                                +61 3 8376 6284
                                            </a>
                                            <i className="fa fa-phone fa-icon footer-location3"></i>
                                        </li>
                                        <li className="list-item">
                                            <a href="mailto:webmaster@example.com" className="text-decoration-none footer-link-auto">
                                                Info@autorix.om
                                            </a>
                                            <i className="fa fa-envelope fa-icon footer-location2"></i>
                                        </li>
                                        <li className="list-item">
                                            <a className="text-decoration-none footer-link-auto">21 King Street Melbourne, 3000, Australia</a>
                                            <i className="fa-solid fa-location-dot footer-location"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-right">
                    <figure className="left_icon">
                        <img src={footerRightImg} alt="" />
                    </figure>
                </div>
            </div>
            <div className="footer-outer-margin">
                <figure className="left_icon">
                    <img src={footerLeftImg} alt="" />
                </figure>
            </div>
            <div className="footer-bar text-center">
                <figure className="f-bar-left">
                    <img src={footerLeftBarImg} alt="" />
                </figure>
            </div>
        </div>
    );
};

export default Footer;
