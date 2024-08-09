import React from 'react';
import missionManImg from '../../assets/images/our-mission-man-img.png'; // Adjust the path as necessary
import missionRightImg from '../../assets/images/our-mission-right-img.png';

const Mission = () => {
  return (
    <section id='mission'>
      <div className="mission-section overflow-hidden position-relative">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 d-xl-block d-none mr-4">
              <figure className="our-mission-figure-box" data-aos="fade-left">
                <img src={missionManImg} alt="" />
              </figure>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="about-us-content" data-aos="fade-up">
                <h6 className="autorix-text">our mission</h6>
                <h2 data-aos="fade-zoom-in">Your Safety is our first priority</h2>
                <p className="our-mission-p1">Duis autem vel eum iure reprehenderit velit esse quam nihil molestiae conseuaeu dolorem eum fugiat ruo.</p>
                <p className="our-mission-p2">Reprehenderit qui in ea volu velit essestia consequatur, vel illum eui.</p>
                <ul className="list-unstyled list-margin-bottom">
                  <li className="d-inline-block mb-lg-0 mb-3"><i className="fa-solid fa-check ml-0"></i><span className="d-inline-block email-span text-decoration-none list-span">24/7 Support</span></li>
                  <li className="d-inline-block user-li"><i className="fa-solid fa-check margin-left-checkk"></i><span className="d-inline-block user-span text-decoration-none list-span">Expert Team</span></li>
                </ul>
                <ul className="list-unstyled left-section-margin-bottom">
                  <li className="d-inline-block mb-lg-0 mb-3 mr-lg-1 smart-tools-li"><i className="fa-solid fa-check ml-0 last-li-form-section"></i><span className="d-inline-block email-span text-decoration-none list-span">Smart Tools</span></li>
                  <li className="d-inline-block user-li"><i className="fa-solid fa-check margin-left-checkk"></i><span className="d-inline-block user-span text-decoration-none list-span">Fast Work</span></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12">
              <div className="mission-red-box" data-aos="fade-down">
                <h5>GET a Quote</h5>
                <form action="post">
                  <div className="form-group contact-form-margin">
                    <input type="text" className="form-control input-text" id="validationCustom01" placeholder="Name" required name="name" />
                  </div>
                  <div className="form-group contact-form-margin">
                    <input type="text" className="form-control input-text" id="validationCustom02" placeholder="Email" required name="email" />
                  </div>
                  <div className="form-group contact-form-margin-car">
                    <input type="text" className="form-control input-text" id="validationCustom03" placeholder="Car issue" required name="carissue" />
                  </div>
                </form>
                <div className="banner-btn discover-btn-banner text-center" data-aos="fade-right">
                  <a href="aboutus.html" className="text-decoration-none">Submit Now <i className="fa-solid fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
            {/* <figure className="our-mission-right left_icon">
            <img src={missionRightImg} alt="" />
          </figure> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
