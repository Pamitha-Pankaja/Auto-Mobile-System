import React from 'react';
import missionManImg from '../../assets/images/our-mission-man-img.png'; // Adjust the path as necessary
import ContactForm from '../ContactForm';

const Contact = () => {
  return (
    <section id='contact'>
      <div className="mission-section overflow-hidden position-relative">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 d-xl-block d-none mr-4">
              <figure className="our-mission-figure-box" data-aos="fade-left">
                <img src={missionManImg} alt="" />
              </figure>
            </div>
            <div className="col-xl-8 col-lg-6 col-md-6 col-sm-12">
            <ContactForm/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
