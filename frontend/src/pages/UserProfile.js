import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../components/AuthForms/AuthContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const navigate = useNavigate(); 
  const { state, dispatch } = useContext(AuthContext); // Get the logged-in user's info from context
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
    const fetchVehicleDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/vehicles/${user.id}`);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setVehicleDetails(data);
        } else {
          toast.error('Failed to fetch vehicle details');
        }
      } catch (error) {
        toast.error(`Error fetching vehicle details: ${error.message}`);
      }
    };

    const fetchServiceHistory = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/appointments/history/${user.id}`);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
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
      </div>

      <div className="vehicle-details">
        <h2>Your Vehicles</h2>
        {vehicleDetails.length > 0 ? (
          <table className="vehicle-table">
            <thead>
              <tr>
                <th>Model</th>
                <th>Type</th>
                <th>Vehicle Number</th>
              </tr>
            </thead>
            <tbody>
              {vehicleDetails.map((vehicle) => (
                <tr key={vehicle.id}>
                  <td>{vehicle.model}</td>
                  <td>{vehicle.type}</td>
                  <td>{vehicle.vehicleNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No vehicles found.</p>
        )}
      </div>

      <div className="service-history">
        <h2>Your Service History</h2>
        {serviceHistory.length > 0 ? (
          <table className="service-history-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Service Name</th>
                <th>Status</th>
                <th>Vehicle Number</th>
              </tr>
            </thead>
            <tbody>
              {serviceHistory.map((appointment) => (
                <tr key={appointment.id}>
                  <td>{appointment.date}</td>
                  <td>{appointment.services.name}</td>
                  <td>{appointment.approved === 1 ? 'Approved' : 'Pending'}</td>
                  <td>{appointment.vehicle.vehicleNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No service history found.</p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;



