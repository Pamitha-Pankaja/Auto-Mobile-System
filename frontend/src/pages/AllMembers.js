import React from 'react';
import textIcon from '../assets/images/whychoose-bars.png';
import member1 from '../assets/images/team/member1.png'

const TeamMemberCard = ({ imgSrc, title, name }) => {
  return (
    <div className="col-lg-4 col-md-4 col-sm-6">
      <div className="teams-card position-relative teams-mb">
        <figure className="position-relative teams-card-fig">
          <img src={imgSrc} alt={name} className="img-fluid" />
        </figure>
        <h6 className="title">{title}</h6>
        <h5 className="desc">{name}</h5>
      </div>
    </div>
  );
};

const AllMembers = () => {
  const members = [
    {
      imgSrc: member1,
      title: 'Founder',
      name: 'Kevin James',
    },
    {
      imgSrc: member1,
      title: 'CEO',
      name: 'Rene Luckey',
    },
    {
      imgSrc: member1,
      title: 'Worker',
      name: 'Brian Rooney',
    },
    {
      imgSrc: member1,
      title: 'Worker',
      name: 'Jonathan Rako',
    },
    {
      imgSrc: member1,
      title: 'Mechanic',
      name: 'Mitchell Ker',
    },
    {
      imgSrc: member1,
      title: 'Worker',
      name: 'Ezreim Tanium',
    },
  ];

  return (
    <div className='user-profile'>
    <section className="teams-section overflow-hidden our-teams-page">
      <div className="container">
        <div className="row">
          <div className="col-12">
              <h6 className="autorix-text text-center">
                <img src={textIcon} alt="Why Choose Us Left Icon" className="text-icon" />
                  Mechanics we have
              </h6>
            <h2 className="text-center aos-init aos-animate" data-aos="fade-zoom-in">
              Our Expert Team members
            </h2>
          </div>
        </div>
        <div className="row">
          {members.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default AllMembers;
