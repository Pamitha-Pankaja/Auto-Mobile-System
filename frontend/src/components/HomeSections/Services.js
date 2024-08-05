import React from 'react';
import ourServiceImg1 from '../../assets/images/our-services-img1.png'; // Adjust the path as necessary
import ourServiceImg2 from '../../assets/images/our-services-img2.png';
import ourServiceImg3 from '../../assets/images/our-services-img3.png';
import ourServiceImg4 from '../../assets/images/our-services-img4.png';
import ourServiceImg5 from '../../assets/images/our-services-img5.png';
import ourServiceImg6 from '../../assets/images/our-services-img6.png';
import ourServiceCar from '../../assets/images/our-services-car-img.png';

const Services = () => {
  return (
    <section className="our-services-section overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h6 className="autorix-text text-center">our services</h6>
            <h2 className="text-center" data-aos="fade-zoom-in">We Provide Great Services For your Vehicle</h2>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="our-services-outer our-services-outer1 our-services-left-img">
              <figure className="our-services-figure mb-0" data-aos="flip-left">
                <img src={ourServiceImg1} alt="" className="img-fluid" />
              </figure>
              <div className="our-services-content">
                <h5>ENGINE REPAIR</h5>
                <p>Autem velaum iure reare aenderit rui in ea roluptate esse ruam moles</p>
                <a href="aboutus.html">Read more</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="our-services-outer">
              <figure className="our-services-figure mb-0" data-aos="flip-left">
                <img src={ourServiceImg2} alt="" className="img-fluid" />
              </figure>
              <div className="our-services-content">
                <h5>BRAKE REPAIR</h5>
                <p className="our-services-center-box">Autem velaum iure reare aenderit rui in ea roluptate esse ruam moles</p>
                <a href="aboutus.html">Read more</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="our-services-outer our-services-outer1 our-services-right-img">
              <figure className="our-services-figure mb-0" data-aos="flip-left">
                <img src={ourServiceImg3} alt="" className="img-fluid" />
              </figure>
              <div className="our-services-content">
                <h5>TIRE REPAIR</h5>
                <p>Autem velaum iure reare aenderit rui in ea roluptate esse ruam moles</p>
                <a href="aboutus.html">Read more</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="our-services-outer">
              <figure className="our-services-figure mb-0" data-aos="flip-left">
                <img src={ourServiceImg4} alt="" className="img-fluid" />
              </figure>
              <div className="our-services-content">
                <h5>BATTERY REPAIR</h5>
                <p className="paragraph2">Autem velaum iure reare aenderit rui in ea roluptate esse ruam moles</p>
                <a href="aboutus.html">Read more</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-4 col-sm-4 d-md-block d-none">
            <div className="our-services-outer position-relative" data-aos="fade-down-left">
              <figure className="our-services-car-img mb-0 left_icon">
                <img src={ourServiceCar} alt="" />
              </figure>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="our-services-outer">
              <figure className="our-services-figure mb-0" data-aos="flip-left">
                <img src={ourServiceImg6} alt="" className="img-fluid" />
              </figure>
              <div className="our-services-content steering-margin-bottom">
                <h5>STEERING REPAIR</h5>
                <p className="paragraph2">Autem velaum iure reare aenderit rui in ea roluptate esse ruam moles</p>
                <a href="aboutus.html">Read more</a>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-btn discover-btn-banner text-center">
          <a href="services.html" className="text-decoration-none">View All services <i className="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </section>
  );
};

export default Services;
