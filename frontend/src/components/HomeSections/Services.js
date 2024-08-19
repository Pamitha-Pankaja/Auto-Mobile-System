// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import textIcon from '../../assets/images/whychoose-bars.png';
// import ourServiceImg1 from '../../assets/images/our-services-img1.png'; 
// import ourServiceImg2 from '../../assets/images/our-services-img2.png';
// import ourServiceImg3 from '../../assets/images/our-services-img3.png';
// import ourServiceImg4 from '../../assets/images/our-services-img4.png';
// import ourServiceImg6 from '../../assets/images/our-services-img6.png';
// import ourServiceCar from '../../assets/images/our-services-car-img.png';

// const Services = () => {
//     const navigate = useNavigate();

//     const handleReadMore = (id) => {
//         navigate('/services', { state: { categoryId: id } });
//     };

//     return (
//         <section id='services' className="our-services-section overflow-hidden">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-12">
//                         <h6 className="autorix-text text-center">
//                             <img src={textIcon} alt="Why Choose Us Left Icon" className="text-icon" />
//                             our services
//                         </h6>
//                         <h2 className="text-center" data-aos="fade-zoom-in">We Provide Great Services For your Vehicle</h2>
//                     </div>
//                     <div className="col-lg-4 col-md-4 col-sm-6">
//                         <div className="our-services-outer our-services-outer1 our-services-left-img">
//                             <figure className="our-services-figure mb-0" data-aos="flip-left">
//                                 <img src={ourServiceImg1} alt="" className="img-fluid" />
//                             </figure>
//                             <div className="our-services-content">
//                                 <h5>ENGINE REPAIR</h5>
//                                 <p>This can include things like replacing a head gasket or belt or sealing an oil pan.</p>
//                                 <button onClick={() => handleReadMore(1)} className="btn btn-link text-decoration-none">Read more</button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-4 col-sm-6">
//                         <div className="our-services-outer">
//                             <figure className="our-services-figure mb-0" data-aos="flip-left">
//                                 <img src={ourServiceImg2} alt="" className="img-fluid" />
//                             </figure>
//                             <div className="our-services-content">
//                                 <h5>VEHICLE SERVICES</h5>
//                                 <p className="our-services-center-box">Service vehicle means a new or used vehicle which is used for purposes other than demonstration.</p>
//                                 <button onClick={() => handleReadMore(2)} className="btn btn-link text-decoration-none">Read more</button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-4 col-sm-6">
//                         <div className="our-services-outer our-services-outer1 our-services-right-img">
//                             <figure className="our-services-figure mb-0" data-aos="flip-left">
//                                 <img src={ourServiceImg3} alt="" className="img-fluid" />
//                             </figure>
//                             <div className="our-services-content">
//                                 <h5>PAINTING REPAIR</h5>
//                                 <p>Maintenance painting involves a lot more than just applying a fresh layer of paint.</p>
//                                 <button onClick={() => handleReadMore(3)} className="btn btn-link text-decoration-none">Read more</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-lg-3 col-md-4 col-sm-6">
//                         <div className="our-services-outer">
//                             <figure className="our-services-figure mb-0" data-aos="flip-left">
//                                 <img src={ourServiceImg4} alt="" className="img-fluid" />
//                             </figure>
//                             <div className="our-services-content">
//                                 <h5>HYBRID REPAIR</h5>
//                                 <p className="paragraph2">Autem velaum iure reare aenderit rui in ea roluptate esse ruam moles</p>
//                                 <button onClick={() => handleReadMore(4)} className="btn btn-link text-decoration-none">Read more</button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-6 col-md-4 col-sm-4 d-md-block d-none">
//                         <div className="our-services-outer position-relative" data-aos="fade-down-left">
//                             <figure className="our-services-car-img mb-0 left_icon">
//                                 <img src={ourServiceCar} alt="" />
//                             </figure>
//                         </div>
//                     </div>
//                     <div className="col-lg-3 col-md-4 col-sm-6">
//                         <div className="our-services-outer">
//                             <figure className="our-services-figure mb-0" data-aos="flip-left">
//                                 <img src={ourServiceImg6} alt="" className="img-fluid" />
//                             </figure>
//                             <div className="our-services-content steering-margin-bottom">
//                                 <h5>ACCIDENT REPAIR</h5>
//                                 <p className="paragraph2">Accident repair involves restoring vehicles that have been damaged in accidents</p>
//                                 <button onClick={() => handleReadMore(6)} className="btn btn-link text-decoration-none">Read more</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="banner-btn discover-btn-banner text-center">
//                     <a href="services.html" className="text-decoration-none">View All services <i className="fa-solid fa-arrow-right"></i></a>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Services;


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import textIcon from '../../assets/images/whychoose-bars.png';
import ourServiceImg1 from '../../assets/images/our-services-img1.png';
import ourServiceImg2 from '../../assets/images/our-services-img2.png';
import ourServiceImg3 from '../../assets/images/our-services-img3.png';
import ourServiceImg4 from '../../assets/images/our-services-img4.png';
import ourServiceImg6 from '../../assets/images/our-services-img6.png';
import ourServiceCar from '../../assets/images/our-services-car-img.png';

const Services = () => {
    let local = "http://localhost:8080";
  let deploy = "https://robust-wonder-production.up.railway.app"
  let basurl = deploy;

    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(deploy+'/api/service-categories')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    const handleReadMore = (id) => {
        navigate('/services', { state: { categoryId: id } });
    };

    const categoryImages = [ourServiceImg1, ourServiceImg2, ourServiceImg3, ourServiceImg4, ourServiceImg6];

    return (
        <section id='services' className="our-services-section overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h6 className="autorix-text text-center">
                            <img src={textIcon} alt="Why Choose Us Left Icon" className="text-icon" />
                            our services
                        </h6>
                        <h2 className="text-center" data-aos="fade-zoom-in">We Provide Great Services For your Vehicle</h2>
                    </div>

                    {categories[0] && (
                        <div key={categories[0].id} className="col-lg-4 col-md-4 col-sm-6">
                            <div className="our-services-outer our-services-outer1 our-services-left-img">
                                <figure className="our-services-figure mb-0" data-aos="flip-left">
                                    <img src={categoryImages[0]} alt="" className="img-fluid" />
                                </figure>
                                <div className="our-services-content">
                                    <h5>{categories[0].name.toUpperCase()}</h5>
                                    <button onClick={() => handleReadMore(categories[0].id)} className="btn btn-link text-decoration-none">Read more</button>
                                </div>
                            </div>
                        </div>
                    )}
                    {categories[1] && (
                        <div key={categories[1].id} className="col-lg-4 col-md-4 col-sm-6">
                            <div className="our-services-outer">
                                <figure className="our-services-figure mb-0" data-aos="flip-left">
                                    <img src={categoryImages[0]} alt="" className="img-fluid" />
                                </figure>
                                <div className="our-services-content">
                                    <h5>{categories[1].name.toUpperCase()}</h5>
                                    <button onClick={() => handleReadMore(categories[1].id)} className="btn btn-link text-decoration-none">Read more</button>
                                </div>
                            </div>
                        </div>
                    )}
                    {categories[2] && (
                        <div key={categories[2].id} className="col-lg-4 col-md-4 col-sm-6">
                            <div className="our-services-outer our-services-outer1 our-services-right-img">
                                <figure className="our-services-figure mb-0" data-aos="flip-left">
                                    <img src={categoryImages[2]} alt="" className="img-fluid" />
                                </figure>
                                <div className="our-services-content">
                                    <h5>{categories[2].name.toUpperCase()}</h5>
                                    <button onClick={() => handleReadMore(categories[2].id)} className="btn btn-link text-decoration-none">Read more</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="row">
                    {categories[3] && (
                        <div key={categories[3].id} className="col-lg-3 col-md-4 col-sm-6">
                            <div className="our-services-outer">
                                <figure className="our-services-figure mb-0" data-aos="flip-left">
                                    <img src={categoryImages[3]} alt="" className="img-fluid" />
                                </figure>
                                <div className="our-services-content">
                                    <h5>{categories[3].name.toUpperCase()}</h5>
                                    <button onClick={() => handleReadMore(categories[3].id)} className="btn btn-link text-decoration-none">Read more</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Car image section */}
                    <div className="col-lg-6 col-md-4 col-sm-4 d-md-block d-none">
                        <div className="our-services-outer position-relative" data-aos="fade-down-left">
                            <figure className="our-services-car-img mb-0 left_icon">
                                <img src={ourServiceCar} alt="Car" />
                            </figure>
                        </div>
                    </div>

                    {categories[4] && (
                        <div key={categories[4].id} className="col-lg-3 col-md-4 col-sm-6">
                            <div className="our-services-outer">
                                <figure className="our-services-figure mb-0" data-aos="flip-left">
                                    <img src={categoryImages[4]} alt="" className="img-fluid" />
                                </figure>
                                <div className="our-services-content steering-margin-bottom">
                                    <h5>{categories[4].name.toUpperCase()}</h5>
                                    <button onClick={() => handleReadMore(categories[4].id)} className="btn btn-link text-decoration-none">Read more</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="banner-btn discover-btn-banner text-center">
                    <a href="services.html" className="text-decoration-none">View All services <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </section>
    );
};

export default Services;
