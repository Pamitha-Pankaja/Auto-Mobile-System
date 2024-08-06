// src/pages/AdminDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import '../stylesheets/AdminDashboard.css';
import AdminSidebar from '../components/AdminSideBar';

const AdminDashboard = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await axios.get('/api/appointments');
                setAppointments(response.data);
            } catch (error) {
                console.error('Error fetching appointments:', error);
            }
        };

        fetchAppointments();
    }, []);

    const approveAppointment = async (appointmentId) => {
        try {
            const response = await axios.put(`/api/appointments/${appointmentId}/approve`);
            if (response.data.status === 'Appointment Placed') {
                setAppointments((prevAppointments) =>
                    prevAppointments.map((appointment) =>
                        appointment.id === appointmentId ? { ...appointment, approved: true } : appointment
                    )
                );
            } else {
                console.error(response.data.status);
            }
        } catch (error) {
            console.error('Error approving appointment:', error);
        }
    };

    const handleApproveClick = (appointmentId) => {
        confirmAlert({
            title: 'Confirm to approve',
            message: 'Are you sure to approve this appointment?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => approveAppointment(appointmentId)
                },
                {
                    label: 'No',
                    onClick: () => { }
                }
            ]
        });
    };

    return (
        <div className="d-flex">
            <AdminSidebar />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <h1>Admin Dashboard</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Date</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>Status</th>
                            <th>Vehicle</th>
                            <th>Service</th>
                            <th>User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((appointment) => (
                            <tr key={appointment.id}>
                                <td>{appointment.id}</td>
                                <td>{appointment.date}</td>
                                <td>{appointment.startTime}</td>
                                <td>{appointment.endTime}</td>
                                <td>
                                    <button
                                        onClick={() => handleApproveClick(appointment.id)}
                                        className={`btn ${appointment.approved ? 'btn-success' : 'btn-warning'}`}
                                    >
                                        {appointment.approved ? 'Approved' : 'Pending'}
                                    </button>
                                </td>
                                <td>{`${appointment.vehicle.model} (${appointment.vehicle.vehicleNumber})`}</td>
                                <td>{appointment.services.name}</td>
                                <td>{appointment.user.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
};

export default AdminDashboard;
