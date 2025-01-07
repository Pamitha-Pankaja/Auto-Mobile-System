import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import textIcon from '../assets/images/whychoose-bars.png';
import ourServiceImg1 from '../assets/images/our-services-img1.png';
import ourServiceImg2 from '../assets/images/our-services-img2.png';
import ourServiceImg3 from '../assets/images/our-services-img3.png';
import ourServiceImg4 from '../assets/images/our-services-img4.png';
import ourServiceImg6 from '../assets/images/our-services-img6.png';

const AllServices = () => {
    const local = "http://localhost:8080";
    const deploy = "https://robust-wonder-production.up.railway.app";
    const basurl = local;

    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(local + '/api/service-categories')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    const handleReadMore = (id) => {
        navigate('/services', { state: { categoryId: id } });
    };

    const ServiceCard = ({ imgSrc, service, id }) => {
        return (
            <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="teams-card position-relative teams-mb">
                    <figure className="position-relative teams-card-fig">
                        <img src={imgSrc} alt={service} className="img-fluid" />
                    </figure>
                    <h6 className="title">{service}</h6>
                    <div className="our-services-content">
                        <button
                            onClick={() => handleReadMore(id)}
                            className="btn btn-link text-decoration-none"
                        >
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    const categoryImages = [ourServiceImg1, ourServiceImg2, ourServiceImg3, ourServiceImg4, ourServiceImg6];

    return (
        
    <div className='user-profile'>
        <section className="teams-section overflow-hidden our-teams-page">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h6 className="autorix-text text-center">
                            <img src={textIcon} alt="Why Choose Us Left Icon" className="text-icon" />
                            our services
                        </h6>
                        <h2 className="text-center aos-init aos-animate" data-aos="fade-zoom-in">What We Provide</h2>
                    </div>
                </div>
                <div className="row">
                    {categories.map((category, index) => {
                        const imgSrc = categoryImages[index % categoryImages.length];
                        return (
                            <ServiceCard 
                               key={category.id}  
                               service={category.name}  
                               imgSrc={imgSrc} 
                               id={category.id}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
        </div>
    );
};

export default AllServices;
