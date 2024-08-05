// src/components/OurWorkCarousel.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is included
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Ensure Bootstrap JS is included

const OurWorkCarousel = () => {
  return (
    <div id="ourWorkCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="d-flex justify-content-center align-items-center" style={{height: '400px', backgroundColor: '#ddd'}}>
            <h4>Item 1</h4>
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-flex justify-content-center align-items-center" style={{height: '400px', backgroundColor: '#ddd'}}>
            <h4>Item 2</h4>
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-flex justify-content-center align-items-center" style={{height: '400px', backgroundColor: '#ddd'}}>
            <h4>Item 3</h4>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#ourWorkCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#ourWorkCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default OurWorkCarousel;
