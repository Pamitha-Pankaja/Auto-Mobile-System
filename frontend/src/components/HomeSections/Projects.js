import React from 'react';
import textIcon from '../../assets/images/whychoose-bars.png';
import work1 from '../../assets/images/work-img1.jpg';
import work2 from '../../assets/images/work-img2.jpg';
import work3 from '../../assets/images/work-img3.jpg';

const Projects = () => {
    return (
        <section id='projects' className="our-work-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h6 className="autorix-text text-center">
                            <img src={textIcon} alt="Why Choose Us Left Icon" className="text-icon" />Our Projects
                        </h6>
                        <h2 className="text-center" data-aos="fade-zoom-in">
                            Latest projects we have done
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div id="projectsCarousel" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="case_studies_image case-img-margin">
                                            <figure className="mb-0">
                                                <img src={work1} alt="Auto Repair - Engine Repair" className="img-fluid" />
                                            </figure>
                                            <div className="case_studies_box">
                                                <h5 className="case-studies-title">Auto Repair</h5>
                                                <h5 className="case-studies-descp">Engine Repair</h5>
                                                <div className="box-arrow position-relative">
                                                    <a href="./projects.html">
                                                        <i className="fa-solid fa-arrow-right"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="case_studies_image case-img-margin2">
                                            <figure className="mb-0">
                                                <img src={work2} alt="Auto Repair - Car Tyre change" className="img-fluid" />
                                            </figure>
                                            <div className="case_studies_box ">
                                                <h5 className="case-studies-title">Auto Repair</h5>
                                                <h5 className="case-studies-descp">Car Tyre change</h5>
                                                <div className="box-arrow position-relative">
                                                    <a href="./projects.html">
                                                        <i className="fa-solid fa-arrow-right"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="case_studies_image case-img-margin">
                                            <figure className="mb-0">
                                                <img src={work3} alt="Auto Repair - Battery Adjust" className="img-fluid" />
                                            </figure>
                                            <div className="case_studies_box">
                                                <h5 className="case-studies-title">Auto Repair</h5>
                                                <h5 className="case-studies-descp">Battery Adjust</h5>
                                                <div className="box-arrow position-relative">
                                                    <a href="./projects.html">
                                                        <i className="fa-solid fa-arrow-right"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="case_studies_image case-img-margin">
                                            <figure className="mb-0">
                                                <img src={work3} alt="Auto Repair - Battery Adjust" className="img-fluid" />
                                            </figure>
                                            <div className="case_studies_box">
                                                <h5 className="case-studies-title">Auto Repair</h5>
                                                <h5 className="case-studies-descp">Battery Adjust</h5>
                                                <div className="box-arrow position-relative">
                                                    <a href="./projects.html">
                                                        <i className="fa-solid fa-arrow-right"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Add more carousel items here */}
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="case_studies_image case-img-margin">
                                            <figure className="mb-0">
                                                <img src={work3} alt="Auto Repair - Battery Adjust" className="img-fluid" />
                                            </figure>
                                            <div className="case_studies_box">
                                                <h5 className="case-studies-title">Auto Repair</h5>
                                                <h5 className="case-studies-descp">Battery Adjust</h5>
                                                <div className="box-arrow position-relative">
                                                    <a href="./projects.html">
                                                        <i className="fa-solid fa-arrow-right"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#projectsCarousel" role="button" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#projectsCarousel" role="button" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Projects;
