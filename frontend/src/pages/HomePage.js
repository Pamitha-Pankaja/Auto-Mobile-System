// src/components/Home.js
import React, { useEffect } from 'react'
import '../stylesheets/style.css'
import Navbar from '../components/Navbar';
import bannerImg from '../assets/images/autorix-banner-img.png';
import bannerImg1 from '../assets/images/car-img-1.png';
import bannerImg2 from '../assets/images/car-image.png';
import bannerImg3 from '../assets/images/car-img-2.png';
import BannerCarousel from '../components/BannerCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'aos/dist/aos.css';
import AOS from 'aos';
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200, // Duration of animations
            once: true, // Whether animation should happen only once
        });
    }, []);
    return (
        <div>
            <div class="home-header-section">
                <Navbar />
                <div className="home-banner-section overflow-hidden">
                    <div className="banner-img-outer">
                        <figure className="banner-img mb-0 wow slideInRight left_icon" data-aos="fade-right">
                            <img className="img-fluid banner-img-width" src={bannerImg3} alt="" />
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
            </div>
            <WhyChooseUs />
        </div>
    );
};

export default Home;
