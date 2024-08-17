import React, { useEffect, useState, useContext } from 'react';
import {AuthContext} from '../components/AuthForms/AuthContext'; // Assuming you have AuthContext to get user info
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const navigate = useNavigate(); 
  const { state } = useContext(AuthContext); // Get the logged-in user's info from context
  const [vehicleDetails, setVehicleDetails] = useState(null);
  const [serviceHistory, setServiceHistory] = useState([]);
  const { user, token } = state;

  useEffect(() => {
    if (!user || !user.id) {
      navigate('/signin');
      return;
    }
  }, [user,navigate]);

  useEffect(() => {
    // Fetch vehicle details
    const fetchVehicleDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/vehicles/${user.id}`);
        if (response.ok) {
          const data = await response.json();
          setVehicleDetails(data);
        } else {
          toast.error('Failed to fetch vehicle details');
        }
      } catch (error) {
        toast.error(`Error fetching vehicle details: ${error.message}`);
      }
    };

    // Fetch service history
    const fetchServiceHistory = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/appointments/history/${user.id}`);
        if (response.ok) {
          const data = await response.json();
          setServiceHistory(data);
        } else {
          toast.error('Failed to fetch service history');
        }
      } catch (error) {
        toast.error(`Error fetching service history: ${error.message}`);
      }
    };

    fetchVehicleDetails();
    fetchServiceHistory();
  }, [user]);

  if (!user) {
    return <p>Loading user data...</p>;
  }

  return (
    <div className="user-profile">
      <div className="profile-details">
        <h2>Your Profile</h2>
        <p><strong>Name:</strong> {state.user.username}</p>
        <p><strong>Email:</strong> {state.user.email}</p>
        {/* Add more personal details as needed */}
      </div>
      
      <div className="vehicle-details">
        <h2>Your Vehicles</h2>
        {vehicleDetails ? (
          <ul>
            <li><strong>Make:</strong> {vehicleDetails.make}</li>
            <li><strong>Model:</strong> {vehicleDetails.model}</li>
            <li><strong>Year:</strong> {vehicleDetails.year}</li>
            {/* Add more vehicle details as needed */}
          </ul>
        ) : (
          <p>Loading vehicle details...</p>
        )}
      </div>

      <div className="service-history">
        <h2>Your Service History</h2>
        {serviceHistory.length > 0 ? (
          <ul>
            {serviceHistory.map((appointment) => (
              <li key={appointment.id}>
                <p><strong>Date:</strong> {appointment.date}</p>
                <p><strong>Service:</strong> {appointment.serviceName}</p>
                <p><strong>Status:</strong> {appointment.status}</p>
                {/* Add more service history details as needed */}
              </li>
            ))}
          </ul>
        ) : (
          <p>No service history found.</p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
