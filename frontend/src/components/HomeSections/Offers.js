import React from 'react';

const Offers = () => {
  return (
    <section className="offer-section overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="offer-content" data-aos="fade-up-left">
              <h6 className="offer-text" data-aos="fade-up" data-aos-anchor-placement="top-bottom">our offer</h6>
              <h2 className="discount-text">Save Money with Special Discount</h2>
              <h2 className="offer-upto">Upto <span className="percent-off">50% off</span></h2>
              <div className="banner-btn discover-btn-banner text-center">
                <a href="aboutus.html" className="text-decoration-none">
                  Get a Quote <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
