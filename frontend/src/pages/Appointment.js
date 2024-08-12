import React, { useState, useEffect,useContext  } from 'react';
import AOS from 'aos';
import axios from 'axios';
import { AuthContext } from '../components/AuthForms/AuthContext';
import Navbar from '../components/Navbar';
import missionManImg from '../assets/images/our-mission-man-img.png';
import { useNavigate } from 'react-router-dom';

const Appointment = () => {
  const navigate = useNavigate(); 
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCategoryList, setSelectedCategoryList] = useState([]);
  const [selectedService, setSelectedService] = useState('');
  const [availableServicesList, setAvailableServicesList] = useState([]);
  const [selectedavailableTimeSlots, setSelectedavailableTimeSlots] = useState('');
  const [availableServices, setAvailableServices] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  // const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [carType, setCarType] = useState('');
  const [carMake, setCarMake] = useState('');
  const [carModelType, setCarModelType] = useState('');
  const [vehicleNo, setVehicleNo] = useState('');

  const { state } = useContext(AuthContext);
  const { user, token } = state;

  useEffect(() => {
    console.log("user",user);
    if(token === null){
      navigate('/signin');
    }
    
    // AOS.init({ duration: 1000 });
    fetchCategories();
  }, []);

  useEffect(() => {

    if (selectedCategory) {
      console.log("catergory",selectedCategory);
      fetchServices(selectedCategory);
      // setAvailableServices(['Service 1', 'Service 2', 'Service 3']); // Replace with actual data fetching
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedDate) {
      console.log("date",selectedDate);
      fetchAvailableTimeSlots(selectedDate);
      // Fetch available time slots based on the selected date
      // setAvailableTimeSlots(['10:00 AM', '12:00 PM', '2:00 PM']); // Replace with actual data fetching
    }
  }, [selectedDate]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/service-categories');
      setSelectedCategoryList(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchServices = async (selectedCategory) => {
    try {
      const response = await axios.get('http://localhost:8080/api/services/category/'+selectedCategory.id);
      setAvailableServicesList(response.data)
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchAvailableTimeSlots = async (selectedDate) => {
    try {
      console.log("selectedCategory id",selectedService.id);
      let url = 'http://localhost:8080/api/appointments/available-slots?date='+selectedDate+'&serviceId='+selectedService.id;
      console.log("url",url);
      
      // http://localhost:8080/api/appointments/available-slots?date=2023-08-01&serviceId=3
      const response = await axios.get(url);
      console.log(response);
      setAvailableTimeSlots(response.data)
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const appointmentData = {
      vehicle: { 
        make: carMake,
        model: carModelType,
        vehicleNo: vehicleNo,
        type: carType,
        owner: {
          id: user.id  // Replace with the actual owner ID
        }
      },
      technician: {
        id: 1  // Replace with the actual technician ID
      },
      service: {
        id: selectedService.id
      },
      user: {
        id: user.id  // Replace with the actual user ID
      },
      date: selectedDate,
      startTime: selectedavailableTimeSlots  // Assuming this holds start time 
    };
    console.log("re",appointmentData);
    

    try {
      const response = await axios.post('http://localhost:8080/api/appointments/book', appointmentData);
      console.log('Appointment booked successfully:', response.data);
      // Handle successful booking (e.g., show a success message, reset the form, etc.)
    } catch (error) {
      console.error('Error booking appointment:', error);
      // Handle errors (e.g., show an error message)
    }
  }
  
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
                      value={selectedCategory.name}
                      onChange={(e) => {
                        const selectedOption = e.target.options[e.target.selectedIndex];
                        const selectedId = selectedOption.id;
                        const selectedValue = selectedOption.value;
                        setSelectedCategory({ id: selectedId, name: selectedValue })
                      }}
                    >
                      <option value="">Select Category</option>
                      {selectedCategoryList.map((category) => (
                        <option id={category.id} key={category.id} value={category.name}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="serviceType">Service Type</label>
                    <select
                      id="serviceType"
                      className="form-control"
                      value={selectedService.name}
                      onChange={(e) => {
                        const selectedOption = e.target.options[e.target.selectedIndex];
                        const selectedId = selectedOption.id;
                        const selectedValue = selectedOption.value;
                        console.log(selectedId);
                        
                        setSelectedService({ id: selectedId, name: selectedValue })}}
                      disabled={!selectedCategory}
                    >
                      <option value="">Select Service</option>
                      {availableServicesList.map((service) => (
                        <option id={service.id} key={service.id} value={service.name}>
                          {service.name}
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
                      value={selectedavailableTimeSlots}
                      onChange={(e) => setSelectedavailableTimeSlots(e.target.value)}
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
                <a onClick={handleSubmit} href="aboutus.html" className="text-decoration-none">Submit Now <i className="fa-solid fa-arrow-right"></i></a>
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
