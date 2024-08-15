
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { confirmAlert } from 'react-confirm-alert';
// import 'react-confirm-alert/src/react-confirm-alert.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import './AdminDashboard.css';

// const AdminDashboard = () => {
//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     const fetchAppointments = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/api/appointments/all');
//         setAppointments(response.data);
//       } catch (error) {
//         console.error('Error fetching appointments:', error);
//       }
//     };

//     fetchAppointments();
//   }, []);

//   const approveAppointment = async (appointmentId) => {
//     try {
//       const response = await axios.put(`http://localhost:8080/api/appointments/approve/${appointmentId}`);
//       if (response.data.status === 'Appointment Placed') {
//         setAppointments((prevAppointments) =>
//           prevAppointments.map((appointment) =>
//             appointment.id === appointmentId ? { ...appointment, approved: true } : appointment
//           )
//         );
//       } else {
//         console.error(response.data.status);
//       }
//     } catch (error) {
//       console.error('Error approving appointment:', error);
//     }
//   };

//   const handleApproveClick = (appointmentId) => {
//     confirmAlert({
//       title: 'Confirm to approve',
//       message: 'Are you sure to approve this appointment?',
//       buttons: [
//         {
//           label: 'Yes',
//           onClick: () => approveAppointment(appointmentId)
//         },
//         {
//           label: 'No',
//           onClick: () => {}
//         }
//       ]
//     });
//   };

//   return (
//     <div className="container-fluid admin-dashboard">
//       <h1>Admin Dashboard</h1>
//       <div className="table-responsive">
//         <table className="table table-striped">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Date</th>
//               <th>Start Time</th>
//               <th>End Time</th>
//               <th>Status</th>
//               <th>Vehicle</th>
//               <th>Service</th>
//               <th>User</th>
//             </tr>
//           </thead>
//           <tbody>
//             {appointments.map((appointment) => (
//               <tr key={appointment.id}>
//                 <td>{appointment.id}</td>
//                 <td>{appointment.date}</td>
//                 <td>{appointment.startTime}</td>
//                 <td>{appointment.endTime}</td>
//                 <td>
//                   <button
//                     onClick={() => !appointment.approved && handleApproveClick(appointment.id)}
//                     className={`btn ${appointment.approved ? 'btn-success' : 'btn-warning'}`}
//                   >
//                     {appointment.approved ? 'Approved' : 'Pending'}
//                   </button>
//                 </td>
//                 <td>{`${appointment.vehicle.model} (${appointment.vehicle.vehicleNumber})`}</td>
//                 <td>{appointment.services.name}</td>
//                 <td>{appointment.user.name}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const appointmentsPerPage = 10;

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/appointments/all');
        const sortedAppointments = response.data.sort((a, b) => b.id - a.id);
        setAppointments(sortedAppointments);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  const updateAppointmentStatus = async (appointmentId, status) => {
    try {
      const response = await axios.put(`http://localhost:8080/api/appointments/approve/${appointmentId}/${status}`);
      if (response.data.status === 'Appointment Placed' || response.data.status === 'Appointment Disallowed') {
        setAppointments((prevAppointments) =>
          prevAppointments.map((appointment) =>
            appointment.id === appointmentId ? { ...appointment, approved: status } : appointment
          )
        );
      } else {
        console.error(response.data.status);
      }
    } catch (error) {
      console.error('Error updating appointment status:', error);
    }
  };

  const handleStatusClick = (appointmentId, status) => {
    const confirmMessages = {
      1: 'Are you sure to approve this appointment?',
      2: 'Are you sure to disapprove this appointment?',
    };

    confirmAlert({
      title: `Confirm ${status === 1 ? 'Approval' : 'Disapproval'}`,
      message: confirmMessages[status],
      buttons: [
        {
          label: 'Yes',
          onClick: () => updateAppointmentStatus(appointmentId, status),
        },
        {
          label: 'No',
          onClick: () => {},
        },
      ],
    });
  };

  const indexOfLastAppointment = currentPage * appointmentsPerPage;
  const indexOfFirstAppointment = indexOfLastAppointment - appointmentsPerPage;
  const currentAppointments = appointments.slice(indexOfFirstAppointment, indexOfLastAppointment);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container-fluid admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="table-responsive">
        <table className="table table-striped">
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
            {currentAppointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.id}</td>
                <td>{appointment.date}</td>
                <td>{appointment.startTime}</td>
                <td>{appointment.endTime}</td>
                <td>
                  <button
                    onClick={() => appointment.approved === 0 && handleStatusClick(appointment.id, 1)}
                    className={`btn ${appointment.approved === 1 ? 'btn-success' : appointment.approved === 2 ? 'btn-danger' : 'btn-warning'}`}
                  >
                    {appointment.approved === 1 ? 'Approved' : appointment.approved === 2 ? 'Disapproved' : 'Pending'}
                  </button>
                  {appointment.approved === 0 && (
                    <button
                      onClick={() => handleStatusClick(appointment.id, 2)}
                      className="btn btn-danger btn-sm ml-2"
                    >
                      Disapprove
                    </button>
                  )}
                </td>
                <td>{`${appointment.vehicle.model} (${appointment.vehicle.vehicleNumber})`}</td>
                <td>{appointment.services.name}</td>
                <td>{appointment.user.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <nav>
        <ul className="pagination justify-content-center">
          {Array.from({ length: Math.ceil(appointments.length / appointmentsPerPage) }).map((_, index) => (
            <li key={index + 1} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
              <button onClick={() => paginate(index + 1)} className="page-link">
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default AdminDashboard;







