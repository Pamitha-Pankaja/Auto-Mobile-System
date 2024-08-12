import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img2 from '../../assets/images/whychooseus-img2.png';
import textIcon from '../../assets/images/whychoose-bars.png';

const SubServices = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,  // Number of slides to show at a time
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const services = [
        { id: 1, title: 'Best Materials', description: 'Ruis autem velaum iure reare aenderit rui in ea roluptate velit esse ruam moles nulla', img: img2 },
        { id: 2, title: 'Best Materials', description: 'Ruis autem velaum iure reare aenderit rui in ea roluptate velit esse ruam moles nulla', img: img2 },
        { id: 3, title: 'Best Materials', description: 'Ruis autem velaum iure reare aenderit rui in ea roluptate velit esse ruam moles nulla', img: img2 },
        { id: 4, title: 'Best Materials', description: 'Ruis autem velaum iure reare aenderit rui in ea roluptate velit esse ruam moles nulla', img: img2 },
    ];

    return (
        <section className="whychoose-section overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h6 className="autorix-text">
                            <img src={textIcon} alt="Why Choose Us Left Icon" className="text-icon"/>
                            Why choose us
                        </h6>
                        <h2 className="text-center">
                            We Have Almost 28 Years of Experience
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <Slider {...settings}>
                        {services.map(service => (
                            <div key={service.id} className="col text-center">
                                <div className="blogs-section">
                                    <div className="images-blog">
                                        <figure className="mb-0">
                                            <img className="img-fluid" src={service.img} alt={service.title} />
                                        </figure>
                                    </div>
                                    <h5 className="blogs-h5">{service.title}</h5>
                                    <p className="blogs-p">{service.description}</p>
                                    <div className="read-more">
                                        <a href="aboutus.html" className="text-decoration-none">
                                            Read more <i className="fa-solid fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default SubServices;
