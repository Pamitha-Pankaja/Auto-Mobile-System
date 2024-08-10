// src/components/Home.js
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
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
import Appointment from './Appointment';

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200, // Duration of animations
            once: true, // Whether animation should happen only once
        });
    }, []);

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const sectionId = location.hash.replace('#', '');
            scroller.scrollTo(sectionId, {
                duration: 200,
                delay: 0,
                smooth: 'easeInOutQuart'
            });
        }
    }, [location]);
    return (
        <div>
            <section id="home" class="home-header-section">
                <Banner />
            </section>
            <section>
                <AboutUs />
            </section>
            <section id="services">
                <Services />
            </section>
            <section id="team">
                <Team />
            </section>
            <section id="contact">
                <Contact />
            </section>
            <Footer />
        </div>
    );
};

export default Home;
