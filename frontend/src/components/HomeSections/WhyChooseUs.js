import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import img1 from '../../assets/images/whychooseus-img1.png';
import img2 from '../../assets/images/whychooseus-img2.png';
import img3 from '../../assets/images/whychooseus-img3.png';
import textIcon from '../../assets/images/whychoose-bars.png';

const WhyChooseUs = () => {
    return (
        <section className="whychoose-section overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h6 className="autorix-text">
                            <img src={textIcon} alt="Why Choose Us Left Icon" className="text-icon"/>
                             Why choose us
                        </h6>
                        <h2 className="text-center" data-aos="fade-zoom-in">
                            We Have Almost 28 Years of Experience
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-md-0 mb-4 text-center">
                        <div
                            className="blogs-section"
                            data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                        >
                            <div className="images-blog">
                                <figure className="mb-0">
                                    <img className="img-fluid" src={img2} alt="Best Materials" />
                                </figure>
                            </div>
                            <h5 className="blogs-h5">Best Materials</h5>
                            <p className="blogs-p">
                                Ruis autem velaum iure reare aenderit rui in ea roluptate velit esse ruam moles nulla
                            </p>
                            <div className="read-more">
                                <a href="aboutus.html" className="text-decoration-none">
                                    Read more <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-md-0 mb-4 text-center">
                        <div
                            className="blogs-section"
                            data-aos="fade-left"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                        >
                            <div className="images-blog">
                                <figure className="mb-0">
                                    <img className="img-fluid" src={img2} alt="Best Materials" />
                                </figure>
                            </div>
                            <h5 className="blogs-h5">Best Materials</h5>
                            <p className="blogs-p">
                                Ruis autem velaum iure reare aenderit rui in ea roluptate velit esse ruam moles nulla
                            </p>
                            <div className="read-more">
                                <a href="aboutus.html" className="text-decoration-none">
                                    Read more <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-md-0 mb-4 text-center">
                        <div
                            className="blogs-section"
                            data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                        >
                            <div className="images-blog">
                                <figure className="mb-0">
                                    <img className="img-fluid" src={img2} alt="Best Materials" />
                                </figure>
                            </div>
                            <h5 className="blogs-h5">Best Materials</h5>
                            <p className="blogs-p">
                                Ruis autem velaum iure reare aenderit rui in ea roluptate velit esse ruam moles nulla
                            </p>
                            <div className="read-more">
                                <a href="aboutus.html" className="text-decoration-none">
                                    Read more <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-md-0 mb-4 text-center">
                        <div
                            className="blogs-section"
                            data-aos="fade-left"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                        >
                            <div className="images-blog">
                                <figure className="mb-0">
                                    <img className="img-fluid" src={img2} alt="Best Materials" />
                                </figure>
                            </div>
                            <h5 className="blogs-h5">Best Materials</h5>
                            <p className="blogs-p">
                                Ruis autem velaum iure reare aenderit rui in ea roluptate velit esse ruam moles nulla
                            </p>
                            <div className="read-more">
                                <a href="aboutus.html" className="text-decoration-none">
                                    Read more <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default WhyChooseUs;
