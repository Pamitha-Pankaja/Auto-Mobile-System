import React, { useEffect } from 'react';
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

const Carousel = () => {
  useEffect(() => {
    // Initialize the carousels after the component mounts
    const initOwlCarousels = () => {
      const owl1 = $('.our-work-section .owl-carousel');
      owl1.owlCarousel({
        margin: 30,
        nav: true,
        loop: true,
        pagination: true,
        dots: true,
        autoplay: false,
        autoplayTimeout: 4500,
        responsive: {
          0: {
            items: 1
          },
          576: {
            items: 2
          },
          992: {
            items: 3
          }
        }
      });

      const owl2 = $('.carousel-section .owl-carousel');
      owl2.owlCarousel({
        margin: 30,
        nav: true,
        loop: true,
        pagination: true,
        dots: false,
        autoplay: false,
        autoplayTimeout: 4500,
        responsive: {
          0: {
            items: 1
          },
          576: {
            items: 1
          },
          992: {
            items: 1
          }
        }
      });
    };

    initOwlCarousels();

    // Optional: Clean up event listeners if needed
    return () => {
      $('.owl-carousel').trigger('destroy.owl.carousel');
    };
  }, []);

  return (
    <div>
      <div className="our-work-section">
        <div className="owl-carousel">
          {/* Carousel items */}
        </div>
      </div>
      <div className="carousel-section">
        <div className="owl-carousel">
          {/* Carousel items */}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
