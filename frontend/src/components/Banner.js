import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/style.css';
import bannerImg from '../assets/images/car-img-2.png';
import BannerCarousel from '../components/BannerCarousel';

const Banner = () => {
    return (
        <div className="home-banner-section overflow-hidden">
            <div className="banner-img-outer">
                <figure className="banner-img mb-0 wow slideInRight left_icon" data-aos="fade-right">
                    <img className="img-fluid banner-img-width" src={bannerImg} alt="" />
                </figure>
            </div>
            <div className="banner-container-box" data-aos="flip-up">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 mb-md-0 mb-4 text-md-left text-center">
                            <div className="social-icons position-relative" data-aos="zoom-out-left">
                                <ul className="list-unstyled position-absolute">
                                    <li><a className="text-decoration-none" href="#"><i className="fa-regular fa-horizontal-rule"></i></a></li>
                                    <li><a href="" className="text-decoration-none"><i className="fa-brands fa-facebook-f social-networks"></i></a></li>
                                    <li><a href="" className="text-decoration-none"><i className="fa-brands fa-twitter social-networks"></i></a></li>
                                    <li><a href="" className="text-decoration-none"><i className="fa-brands fa-linkedin-in social-networks"></i></a></li>
                                </ul>
                            </div>
                            <BannerCarousel />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
