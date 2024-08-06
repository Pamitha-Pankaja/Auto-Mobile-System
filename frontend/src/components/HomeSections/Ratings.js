import React from 'react';
import LeftImage from '../../assets/images/carousel-left-img.png';

const Ratings = () => {
    return (
        <section className="carousel-section overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="carousel-content position-relative" data-aos="fade-up-left">
                            <div className="row">
                                <div className="col-lg-5 col-md-5 col-sm-12">
                                    <div className="red-box" data-aos="fade-down-right"></div>
                                    <figure className="carousel-left-img-fig">
                                        <img src={LeftImage} alt="" className="img-fluid" />
                                    </figure>
                                </div>
                                <div className="col-lg-7 col-md-7 col-sm-12">
                                    <div id="carouselExampleIndicators " className="carousel slide">
                                        <ol className="carousel-indicators">
                                            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                                            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                                        </ol>
                                        <div className="carousel-inner owl-carousel owl-theme">
                                            <div className="carousel-item active">
                                                <div className="carosel-text">
                                                    <figure className="carosel-img">
                                                        <img src="./assets/images/carosel-logo.png" alt="" />
                                                    </figure>
                                                    <h5 className="carosel-p">
                                                        ”Quisquam est, qui dolorem ipsum quia dolor sit consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem”
                                                    </h5>
                                                    <ul className="list-unstyled carosel-ul">
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                    </ul>
                                                    <div className="carosel-tiltes d-inline-block">
                                                        <h6>Kevin James</h6> <p className="ceo">Ceo, GTD</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="carosel-text">
                                                    <figure className="carosel-img">
                                                        <img src="./assets/images/carosel-logo.png" alt="" />
                                                    </figure>
                                                    <h5 className="carosel-p">
                                                        ”Quisquam est, qui dolorem ipsum quia dolor sit consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem”
                                                    </h5>
                                                    <ul className="list-unstyled carosel-ul">
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                        <li><i className="fa-solid fa-star"></i></li>
                                                    </ul>
                                                    <div className="carosel-tiltes d-inline-block">
                                                        <h6>Kevin James</h6> <p className="ceo">Ceo, GTD</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ratings;
