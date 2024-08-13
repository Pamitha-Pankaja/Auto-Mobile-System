import React from 'react';

const BannerCarousel = () => {
  return (
    <div id="bannerCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-inner text-start">
        <div className="carousel-item active">
          <div className="home-banner-text">
            <h6 className="text-white autorix-text">We have talented engineers &amp; mechanics</h6>
            <h1 className="text-white">The #1 Destination for Vehicle Care</h1>
            <p className="text-white banner-paragraph">Exceptional service, expert technicians, and a commitment to your vehicle’s health</p>
            <div className="banner-btn discover-btn-banner" data-aos="zoom-out-left">
              <a href="services.html" className="text-decoration-none">Our Services <i className="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="home-banner-text">
            <h6 className="text-white autorix-text">We have talented engineers &amp; mechanics</h6>
            <h1 className="text-white">A Legacy of Excellence for 50 Years</h1>
            <p className="text-white banner-paragraph">Celebrating five decades of unmatched service and reliability in vehicle care</p>
            <div className="banner-btn discover-btn-banner" data-aos="zoom-out-left">
              <a href="services.html" className="text-decoration-none">Our Services <i className="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="home-banner-text">
            <h6 className="text-white autorix-text">We have talented engineers &amp; mechanics</h6>
            <h1 className="text-white">Love and Protect the ORIGINAL</h1>
            <p className="text-white banner-paragraph">Preserving the true essence of your vehicle with expert care and attention.</p>
            <div className="banner-btn discover-btn-banner" data-aos="zoom-out-left">
              <a href="services.html" className="text-decoration-none">Our Services <i className="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCarousel;
