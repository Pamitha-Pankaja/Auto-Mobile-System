// import React, { useState } from 'react';
// import textIcon from '../assets/images/whychoose-bars.png';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     comments: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can handle form submission here, e.g., send the data to a server or show a success message.
//     console.log('Form data submitted:', formData);
//   };

//   return (
//     <section className="contact-us-form" data-aos="fade-up-right">
//       <div className="container text-center">
//         <div className="col-12">
//           <h6 className="autorix-text text-center">
//             <img src={textIcon} alt="Why Choose Us Left Icon" className="text-icon" />
//             get in touch
//           </h6>
//           <h2 className="text-center" data-aos="fade-left">Send us a message</h2>
//         </div>
//         <form id="form_id" onSubmit={handleSubmit}>
//           <div className="contact-us-wrapper">
//             <div className="row">
//               <div className="col-lg-4 col-md-4 col-sm-12">
//                 <div>
//                   <input
//                     type="text"
//                     name="name"
//                     className="form-control input-fill"
//                     placeholder="Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>
//               <div className="col-lg-4 col-md-4 col-sm-12">
//                 <div>
//                   <input
//                     type="text"
//                     name="phone"
//                     className="form-control input-fill"
//                     placeholder="Phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>
//               <div className="col-lg-4 col-md-4 col-sm-12">
//                 <div className="col-inner">
//                   <input
//                     type="email"
//                     name="email"
//                     className="form-control input-fill"
//                     placeholder="Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-lg-12 col-md-12 col-sm-12">
//                 <div className="col-inner-msg">
//                   <textarea
//                     name="comments"
//                     rows="3"
//                     placeholder="Message"
//                     className="form-control border-none"
//                     value={formData.comments}
//                     onChange={handleChange}
//                   ></textarea>
//                 </div>
//               </div>
//             </div>
//             <div className="form-btn">
//               <button type="submit" className="btn btn-primary">
//                 Submit Now <i className="fa-solid fa-arrow-right"></i>
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;


import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import textIcon from '../assets/images/whychoose-bars.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_6fiu4br'; // Replace with your Service ID
    const templateID = 'template_zqvwi0j'; // Replace with your Template ID
    const userID = 'lQRpj0D8qILcylxwq'; // Replace with your User ID

    emailjs.send(serviceID,templateID, formData, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been sent successfully!');
      })
      .catch((error) => {
        console.log('FAILED...', error);
        alert('Failed to send the message. Please try again later.');
      });
  };

  return (
    <section className="contact-us-form" data-aos="fade-up-right">
      <div className="container text-center">
        <div className="col-12">
          <h6 className="autorix-text text-center">
            <img src={textIcon} alt="Why Choose Us Left Icon" className="text-icon" />
            get in touch
          </h6>
          <h2 className="text-center" data-aos="fade-left">Send us a message</h2>
        </div>
        <form id="form_id" onSubmit={handleSubmit}>
          <div className="contact-us-wrapper">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div>
                  <input
                    type="text"
                    name="name"
                    className="form-control input-fill"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div>
                  <input
                    type="text"
                    name="phone"
                    className="form-control input-fill"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="col-inner">
                  <input
                    type="email"
                    name="email"
                    className="form-control input-fill"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="col-inner-msg">
                  <textarea
                    name="comments"
                    rows="3"
                    placeholder="Message"
                    className="form-control border-none"
                    value={formData.comments}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="form-btn">
              <button type="submit" className="btn btn-primary">
                Submit Now <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
