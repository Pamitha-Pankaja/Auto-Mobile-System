import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import Navbar from '../components/Navbar';
import missionManImg from '../assets/images/our-mission-man-img.png';

const Appointment = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [availableServices, setAvailableServices] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [carType, setCarType] = useState('');
  const [carMake, setCarMake] = useState('');
  const [carModelType, setCarModelType] = useState('');
  const [vehicleNo, setVehicleNo] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      // Fetch available services based on the selected category
      setAvailableServices(['Service 1', 'Service 2', 'Service 3']); // Replace with actual data fetching
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedDate) {
      // Fetch available time slots based on the selected date
      setAvailableTimeSlots(['10:00 AM', '12:00 PM', '2:00 PM']); // Replace with actual data fetching
    }
  }, [selectedDate]);

  return (
    <div className="mission-section overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 d-xl-block d-none mr-4">
            <figure className="our-mission-figure-box" data-aos="fade-left">
              <img src={missionManImg} alt="" />
            </figure>
          </div>
          <div className="col-xl-9 col-lg-6 col-md-6 col-sm-12">
            <div className="mission-red-box" data-aos="fade-down">
              <h5>Make An Appointment</h5>
              <form action="post">
                {/* Service Category and Service Type */}
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="serviceCategory">Service Category</label>
                    <select
                      id="serviceCategory"
                      className="form-control"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      <option value="">Select Category</option>
                      <option value="Category1">Category 1</option>
                      <option value="Category2">Category 2</option>
                      <option value="Category3">Category 3</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="serviceType">Service Type</label>
                    <select
                      id="serviceType"
                      className="form-control"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      disabled={!selectedCategory}
                    >
                      <option value="">Select Service</option>
                      {availableServices.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Date Selection and Available Time Slots */}
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="appointmentDate">Date</label>
                    <input
                      type="date"
                      id="appointmentDate"
                      className="form-control"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="timeSlot">Available Time Slots</label>
                    <select
                      id="timeSlot"
                      className="form-control"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      disabled={!selectedDate}
                    >
                      <option value="">Select Time Slot</option>
                      {availableTimeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Car Details Section */}
                <h5>Car Details</h5>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="carType">Car Type</label>
                    <select
                      id="carType"
                      className="form-control"
                      value={carType}
                      onChange={(e) => setCarType(e.target.value)}
                    >
                      <option value="">Select Car Type</option>
                      <option value="Sedan">Sedan</option>
                      <option value="SUV">SUV</option>
                      <option value="Truck">Truck</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="carMake">Make</label>
                    <input
                      type="text"
                      id="carMake"
                      className="form-control"
                      placeholder="e.g., Toyota, Mitsubishi"
                      value={carMake}
                      onChange={(e) => setCarMake(e.target.value)}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="carModelType">Model Type</label>
                    <input
                      type="text"
                      id="carModelType"
                      className="form-control"
                      placeholder="e.g., Corolla, Pajero"
                      value={carModelType}
                      onChange={(e) => setCarModelType(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="vehicleNo">Vehicle No</label>
                    <input
                      type="text"
                      id="vehicleNo"
                      className="form-control"
                      placeholder="Enter Vehicle No"
                      value={vehicleNo}
                      onChange={(e) => setVehicleNo(e.target.value)}
                    />
                  </div>
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
  );
};

export default Appointment;
