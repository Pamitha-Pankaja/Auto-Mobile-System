// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import img2 from '../../assets/images/whychooseus-img2.png';
// import textIcon from '../../assets/images/whychoose-bars.png';

// const SubServices = () => {
//     const location = useLocation();
//     const { categoryId } = location.state || {};

//     const subCategories = {
//         1: [
//             { id: 1, title: 'Head Gasket Replacement', description: 'Detailed description of Head Gasket Replacement', img: img2 },
//             { id: 2, title: 'Oil Pan Sealing', description: 'Detailed description of Oil Pan Sealing', img: img2 },
//             { id: 3, title: 'Oil Pan Sealing', description: 'Detailed description of Oil Pan Sealing', img: img2 },
//             { id: 4, title: 'Oil Pan Sealing', description: 'Detailed description of Oil Pan Sealing', img: img2 },
//         ],
//         2: [
//             { id: 1, title: 'Brake Service', description: 'Detailed description of Brake Service', img: img2 },
//             { id: 2, title: 'Transmission Service', description: 'Detailed description of Transmission Service', img: img2 },
//             { id: 3, title: 'Oil Pan Sealing', description: 'Detailed description of Oil Pan Sealing', img: img2 },
//         ],
//     };

//     const services = subCategories[categoryId] || [];

//     const settings = {
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2,
//                 },
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                 },
//             },
//         ],
//     };

//     return (
//         <section className="main-container whychoose-section">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-">
//                         <h6 className="autorix-text">
//                             <img src={textIcon} alt="Why Choose Us Left Icon" className="text-icon" />
//                             Sub Services
//                         </h6>
//                         <h2 className="text-center">
//                             Explore Our Specialized Services
//                         </h2>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <Slider {...settings}>
//                         {services.map(service => (
//                             <div key={service.id} className="col-lg-4 col-md-4 col-sm-6 mb-md-0 mb-4 text-center">
//                                 <div className="blogs-section">
//                                     <div className="images-blog">
//                                         <figure className="mb-0">
//                                             <img className="img-fluid" src={service.img} alt={service.title} />
//                                         </figure>
//                                     </div>
//                                     <h5 className="blogs-h5">{service.title}</h5>
//                                     <p className="blogs-p">{service.description}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </Slider>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default SubServices;



// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import img2 from '../../assets/images/whychooseus-img2.png'; // Default image import
// import textIcon from '../../assets/images/whychoose-bars.png';


// const SubServices = () => {
//     const location = useLocation();
//     const { categoryId } = location.state || {};
//     const [services, setServices] = useState([]);

//     useEffect(() => {
//         if (categoryId) {
//             fetch(`http://localhost:8080/api/services/category/${categoryId}`)
//                 .then(response => response.json())
//                 .then(data => setServices(data))
//                 .catch(error => console.error('Error fetching sub-services:', error));
//         }
//     }, [categoryId]);

//     const settings = {
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2,
//                 },
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                 },
//             },
//         ],
//     };


//     return (
//         <section className="main-container whychoose-section">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-">
//                         <h6 className="autorix-text">
//                             <img src={textIcon} alt="Why Choose Us Left Icon" className="text-icon" />
//                             Sub Services
//                         </h6>
//                         <h2 className="text-center">
//                             Explore Our Specialized Services
//                         </h2>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <Slider {...settings}>
//                         {services.map(service => (
//                             <div key={service.id} className="col-lg-4 col-md-4 col-sm-6 mb-md-0 mb-4 text-center">
//                                 <div className="blogs-section">
//                                     <div className="images-blog">
//                                         <figure className="mb-0">
//                                             <img className="img-fluid" src={img2} alt={service.name} /> {/* Use default image */}
//                                         </figure>
//                                     </div>
//                                     <h5 className="blogs-h5">{service.name}</h5>
//                                     <p className="blogs-p">{service.description}</p>
//                                     <p className="blogs-p">Cost: ${service.cost}</p> {/* Display the cost */}
//                                 </div>
//                             </div>
//                         ))}
//                     </Slider>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default SubServices;



import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import textIcon from '../../assets/images/whychoose-bars.png'; // Icon import

// Hybrid Services Images
import batteryReplacements from '../../assets/images/hybrid/batteryReplacements.jpg';
import cellReplacements from '../../assets/images/hybrid/cellReplacements.jpg';
import batteryScanning from '../../assets/images/hybrid/batteryScanning.jpg';
import ecoBatteryReplace from '../../assets/images/hybrid/ecoBatteryReplace.jpg';

// Vehicle Services Images
import bodyWash from '../../assets/images/vehicleService/bodyWash.jpg';
import fullService from '../../assets/images/vehicleService/fullService.jpg';
import oilChange from '../../assets/images/vehicleService/oilChange.jpg';
import airFilterChange from '../../assets/images/vehicleService/airFilterChange.jpg';
import interim from '../../assets/images/vehicleService/interim.jpg'

//Painting Services Images
import cutPolish from '../../assets/images/painting/cutPolish.jpg';
import fullBodyPaint from '../../assets/images/painting/fullBodyPaint.jpg';
import nanoCoat from '../../assets/images/painting/nanoCoating.jpg';
import panelPaint from '../../assets/images/painting/panelPaint.jpg'

//Accident Repair Images
import dentRepair from '../../assets/images/accidentRepair/dentRepair.jpg';
import bumpRepair from '../../assets/images/accidentRepair/bumpRepair.jpg';
import scratchRemove from '../../assets/images/accidentRepair/scratchRemove.jpg'

//Engine Repair Images
import  tuneUp from '../../assets/images/engineRepair/tuneUp.jpg';
import  valveAdjust from '../../assets/images/engineRepair/valveAdjust.jpg';
import  engineRebuild from '../../assets/images/engineRepair/engineRebuild.jpg';
import { timers } from 'jquery';


// Service Image Mapping
const imageMap = {
    // Vehicle Services
    'BodyWash': bodyWash,
    'Full Service': fullService,
    'Oil Change': oilChange,
    'Air-Filter Change': airFilterChange,
    'Interim Service': interim,

    // Hybrid Services
    'Battery Replacements': batteryReplacements,
    'Battery Scanning': batteryScanning,
    'Cell Replacements': cellReplacements,
    'Eco Battery Replace': ecoBatteryReplace,

    //Painting Services
    'Nano Coating': nanoCoat,
    'Full Body Paint': fullBodyPaint,
    'Panel Painting': panelPaint,
    'Cut And Polish':cutPolish,
    
    //Accident Repair
    'Dent Repairs': dentRepair,
    'Bumper Repair': bumpRepair,
    'Scratch Removal': scratchRemove,

    //Engine Repair
    'Tune-Ups': tuneUp,
    'Valve Adjustments': valveAdjust,
    'Engine Rebuilds': engineRebuild,
};

const SubServices = () => {

    let local = "http://localhost:8080";
  let deploy = "https://robust-wonder-production.up.railway.app"
  let basurl = local;

    const location = useLocation();
    const { categoryId } = location.state || {};
    console.log("Category ID:", categoryId);
    const [services, setServices] = useState([]);

    useEffect(() => {
        if (categoryId) {
            fetch(local+`/api/services/category/${categoryId}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => setServices(data))
                .catch(error => console.error('Error fetching sub-services:', error));
        }
    }, [categoryId]);

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

    const getImageForService = (serviceName) => {
        return imageMap[serviceName] || null; // Use the imageMap to get the image for the service
    };

    return (
        <div className='user-profile'>
        <section className="whychoose-section overflowY-auto">
            <div className="container">
                <div className="row">
                    <div className="col-">
                        <h6 className="autorix-text text-center">
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
                        {services.length > 0 ? (
                            services.map(service => (
                                <div key={service.id} className="col-lg-4 col-md-4 col-sm-6 mb-md-0 mb-4 text-center">
                                    <div className="blogs-section">
                                        <div className="images-blog">
                                            <figure className="mb-0">
                                                <img className="img-fluid" src={getImageForService(service.name)} alt={service.name} />
                                            </figure>
                                        </div>
                                        <h5 className="blogs-h5">{service.name}</h5>
                                        <p className="blogs-p">{service.description}</p>
                                        <p className="blogs-p">Cost: ${service.cost}</p> {/* Display the cost */}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No services available for this category.</p>
                        )}
                    </Slider>
                </div>
            </div>
        </section>
        </div>
    );
};

export default SubServices;



