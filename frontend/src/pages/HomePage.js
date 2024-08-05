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
import Banner from '../components/Banner';

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
                <Banner/>
            </div>
            <WhyChooseUs />
        </div>
    );
};

export default Home;
