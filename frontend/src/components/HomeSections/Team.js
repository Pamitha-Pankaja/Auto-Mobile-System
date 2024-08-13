import React from 'react';
import teamImg1 from '../../assets/images/teams-img1.png';
import teamImg2 from '../../assets/images/teams-img2.png';
import teamImg3 from '../../assets/images/teams-img3.png';
import teamImg4 from '../../assets/images/teams-img4.png';
import teamBottomImg from '../../assets/images/teams-bottom-img.png';

const Team= () => {
  return (
    <section id='team' className="teams-section overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6 col-sm-12">
            <div className="teams-content">
              <h6 className="autorix-text teams-text" data-aos="flip-up">Mechanics we have</h6>
              <h2>Our Expert Team members</h2>
              <p className="teams-p1" data-aos="fade-left">At our service station, our expert team is dedicated to providing top-notch care and attention to your vehicle. With years of industry experience and a commitment to excellence, our skilled professionals are trained to handle all your automotive needs.</p>
              <p className="teams-p2" data-aos="fade-right">From routine maintenance to complex repairs, we pride ourselves on delivering exceptional service with a focus on quality, efficiency, and customer satisfaction. Trust our experts to keep your vehicle running smoothly and safely.</p>
              <div className="banner-btn discover-btn-banner" data-aos="fade-up">
                <a href="our-team.html" className="text-decoration-none">View All members <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div className="col-xl-1 col-lg-1 col-md-3 col-sm-3 d-xl-block d-none"></div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="teams-card position-relative teams-mb" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                  <figure className="position-relative">
                    <img src={teamImg1} alt="" className="img-fluid" />
                  </figure>
                  <div className="teams-icon Show"></div>
                  <div className="teams-cross-icon Hide"></div>
                  <div id="target" className="teams-social-icons Hide">
                    <ul className="list-unstyled mb-0">
                      <li className="social-icons social-icons-outer1"><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                      <li className="social-icons social-icons-outer2"><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                      <li className="social-icons social-icons-outer3"><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                      <li className="social-icons-outer4"><a href="#"><img src="./assets/images/text-bars.png" alt="" /></a></li>
                    </ul>
                  </div>
                  <h6 className="title">Founder</h6>
                  <h5 className="desc">Pamitha Lokuge</h5>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="teams-card position-relative teams-mb" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                  <figure>
                    <img src={teamImg2} alt="" className="img-fluid" />
                  </figure>
                  <div className="teams-icon Show2"></div>
                  <div className="teams-cross-icon Hide2"></div>
                  <div id="target2" className="teams-social-icons Hide2">
                    <ul className="list-unstyled mb-0">
                      <li className="social-icons social-icons-outer1"><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                      <li className="social-icons social-icons-outer2"><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                      <li className="social-icons social-icons-outer3"><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                      <li className="social-icons-outer4"><a href="#"><img src="./assets/images/text-bars.png" alt="" /></a></li>
                    </ul>
                  </div>
                  <h6 className="title">TECHNICIAN</h6>
                  <h5 className="desc">Yeran Fernando</h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="teams-card position-relative team-card-margin" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                  <figure>
                    <img src={teamImg3} alt="" className="img-fluid" />
                  </figure>
                  <div className="teams-icon Show3"></div>
                  <div className="teams-cross-icon Hide3"></div>
                  <div id="target3" className="teams-social-icons Hide3">
                    <ul className="list-unstyled mb-0">
                      <li className="social-icons social-icons-outer1"><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                      <li className="social-icons social-icons-outer2"><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                      <li className="social-icons social-icons-outer3"><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                      <li className="social-icons-outer4"><a href="#"><img src="./assets/images/text-bars.png" alt="" /></a></li>
                    </ul>
                  </div>
                  <h6 className="title">Mechanic</h6>
                  <h5 className="desc">Mitchell Ker</h5>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="teams-card position-relative" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                  <figure>
                    <img src={teamImg4} alt="" className="img-fluid" />
                  </figure>
                  <div className="teams-icon Show4"></div>
                  <div className="teams-cross-icon Hide4"></div>
                  <div id="target4" className="teams-social-icons Hide4">
                    <ul className="list-unstyled mb-0">
                      <li className="social-icons social-icons-outer1"><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                      <li className="social-icons social-icons-outer2"><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                      <li className="social-icons social-icons-outer3"><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                      <li className="social-icons-outer4"><a href="#"><img src="./assets/images/text-bars.png" alt="" /></a></li>
                    </ul>
                  </div>
                  <h6 className="title">Worker</h6>
                  <h5 className="desc">Kusal Mendis</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <figure className="teams-bottom-img left_icon">
        <img src={teamBottomImg} alt="" />
      </figure>
    </section>
  );
};

export default Team;
