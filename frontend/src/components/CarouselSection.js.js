// src/components/CarouselSection.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is included
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Ensure Bootstrap JS is included

const CarouselSection = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="d-flex justify-content-center align-items-center" style={{height: '400px', backgroundColor: '#ddd'}}>
            <h4 className="text-center">Item 1</h4>
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-flex justify-content-center align-items-center" style={{height: '400px', backgroundColor: '#ddd'}}>
            <h4 className="text-center">Item 2</h4>
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-flex justify-content-center align-items-center" style={{height: '400px', backgroundColor: '#ddd'}}>
            <h4 className="text-center">Item 3</h4>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselSection;
