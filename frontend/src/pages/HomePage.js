// src/components/Home.js
import React, { useEffect } from 'react'
import '../stylesheets/style.css'
import Navbar from '../components/Navbar';
import AOS from 'aos';
import WhyChooseUs from '../components/HomeSections/WhyChooseUs';
import Banner from '../components/HomeSections/Banner';
import AboutUs from '../components/HomeSections/AboutUs';
import Services from '../components/HomeSections/Services';
import Team from '../components/HomeSections/Team';
import Contact from '../components/HomeSections/Contact';
import Footer from '../components/HomeSections/Footer';

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200, // Duration of animations
            once: true, // Whether animation should happen only once
        });
    }, []);
    return (
        <div>
            <div id='home' class="home-header-section">
                <Navbar />
                <Banner/>
            </div>  
            {/* <WhyChooseUs/>*/}
            <AboutUs/>
            <Services/>         
            <Team/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;
