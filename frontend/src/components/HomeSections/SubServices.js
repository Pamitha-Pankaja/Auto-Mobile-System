import React from 'react';
import { useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img2 from '../../assets/images/whychooseus-img2.png';
import textIcon from '../../assets/images/whychoose-bars.png';

const SubServices = () => {
    const location = useLocation();
    const { categoryId } = location.state || {};

    const subCategories = {
        1: [
            { id: 1, title: 'Head Gasket Replacement', description: 'Detailed description of Head Gasket Replacement', img: img2 },
            { id: 2, title: 'Oil Pan Sealing', description: 'Detailed description of Oil Pan Sealing', img: img2 },
            { id: 3, title: 'Oil Pan Sealing', description: 'Detailed description of Oil Pan Sealing', img: img2 },
            { id: 4, title: 'Oil Pan Sealing', description: 'Detailed description of Oil Pan Sealing', img: img2 },
        ],
        2: [
            { id: 1, title: 'Brake Service', description: 'Detailed description of Brake Service', img: img2 },
            { id: 2, title: 'Transmission Service', description: 'Detailed description of Transmission Service', img: img2 },
            { id: 3, title: 'Oil Pan Sealing', description: 'Detailed description of Oil Pan Sealing', img: img2 },
        ],
    };

    const services = subCategories[categoryId] || [];

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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

    return (
        <section className="main-container whychoose-section">
            <div className="container">
                <div className="row">
                    <div className="col-">
                        <h6 className="autorix-text">
                            <img src={textIcon} alt="Why Choose Us Left Icon" className="text-icon" />
                            Sub Services
                        </h6>
                        <h2 className="text-center">
                            Explore Our Specialized Services
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <Slider {...settings}>
                        {services.map(service => (
                            <div key={service.id} className="col-lg-4 col-md-4 col-sm-6 mb-md-0 mb-4 text-center">
                                <div className="blogs-section">
                                    <div className="images-blog">
                                        <figure className="mb-0">
                                            <img className="img-fluid" src={service.img} alt={service.title} />
                                        </figure>
                                    </div>
                                    <h5 className="blogs-h5">{service.title}</h5>
                                    <p className="blogs-p">{service.description}</p>
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
