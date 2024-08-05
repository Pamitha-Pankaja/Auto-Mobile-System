import React from 'react';

const BannerCarousel = () => {
  return (
    <div id="bannerCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-inner text-start">
        <div className="carousel-item active">
          <div className="home-banner-text">
            <h6 className="text-white autorix-text">We have talented engineers &amp; mechanics</h6>
            <h1 className="text-white">AUTO MAINTENANCE &amp; REPAIR SERVICE 1</h1>
            <p className="text-white banner-paragraph">Duis aute irure dolor in reprehenderit in voluptate velit esse Excepteur sint occaecat cupidatat non proident.</p>
            <div className="banner-btn discover-btn-banner" data-aos="zoom-out-left">
              <a href="services.html" className="text-decoration-none">Our Services <i className="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="home-banner-text">
            <h6 className="text-white autorix-text">We have talented engineers &amp; mechanics</h6>
            <h1 className="text-white">AUTO MAINTENANCE &amp; REPAIR SERVICE 2</h1>
            <p className="text-white banner-paragraph">Duis aute irure dolor in reprehenderit in voluptate velit esse Excepteur sint occaecat cupidatat non proident.</p>
            <div className="banner-btn discover-btn-banner" data-aos="zoom-out-left">
              <a href="services.html" className="text-decoration-none">Our Services <i className="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="home-banner-text">
            <h6 className="text-white autorix-text">We have talented engineers &amp; mechanics</h6>
            <h1 className="text-white">AUTO MAINTENANCE &amp; REPAIR SERVICE 3</h1>
            <p className="text-white banner-paragraph">Duis aute irure dolor in reprehenderit in voluptate velit esse Excepteur sint occaecat cupidatat non proident.</p>
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
