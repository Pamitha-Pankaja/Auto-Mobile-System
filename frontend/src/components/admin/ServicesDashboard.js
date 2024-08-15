// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './ServicesDashboard.css';

// const ServicesDashboard = () => {
//   const [services, setServices] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [editService, setEditService] = useState(null);

//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     cost: '',
//   });

//   useEffect(() => {
//     fetchServices();
//   }, []);

//   const fetchServices = async () => {
//     const response = await axios.get('http://localhost:8080/api/services');
//     setServices(response.data);
//   };

//   const handleClose = () => {
//     setShowModal(false);
//     setEditService(null);
//     setFormData({ name: '', description: '', cost: '' });
//   };

//   const handleShow = () => setShowModal(true);

//   const handleEdit = (service) => {
//     setEditService(service);
//     setFormData({
//       name: service.name,
//       description: service.description,
//       cost: service.cost,
//     });
//     handleShow();
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (editService) {
//       await axios.put(`http://localhost:8080/api/services/${editService.id}`, formData);
//     } else {
//       await axios.post('http://localhost:8080/api/services', formData);
//     }
//     fetchServices();
//     handleClose();
//   };

//   const handleDelete = async (id) => {
//     await axios.delete(`http://localhost:8080/api/services/${id}`);
//     fetchServices();
//   };

// //   const handleApproveClick = (id) => {
// //     const confirmed = window.confirm('Are you sure to approve this service?');
// //     if (confirmed) {
// //       approveService(id);
// //     }
// //   };

//   return (
//     <div className="services-dashboard">
//       <h1 className="mt-4 text-center">Services Dashboard</h1>
//       <button className="btn btn-primary my-3" onClick={handleShow}>
//         Add Service
//       </button>
//       <div className="table-responsive">
//         <table className="table table-striped">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Description</th>
//               <th>Cost</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {services.map((service) => (
//               <tr key={service.id}>
//                 <td>{service.id}</td>
//                 <td>{service.name}</td>
//                 <td>{service.description}</td>
//                 <td>{service.cost}</td>
//                 <td>
//                   <button className="btn btn-warning btn-sm" onClick={() => handleEdit(service)}>
//                     Edit
//                   </button>
//                   {' '}
//                   <button className="btn btn-danger btn-sm" onClick={() => handleDelete(service.id)}>
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {showModal && (
//         <div className="modal fade show d-block" tabIndex="-1" role="dialog">
//           <div className="modal-dialog" role="document">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">{editService ? 'Edit Service' : 'Add Service'}</h5>
//                 <button type="button" className="close" onClick={handleClose}>
//                   <span>&times;</span>
//                 </button>
//               </div>
//               <form onSubmit={handleSubmit}>
//                 <div className="modal-body">
//                   <div className="form-group">
//                     <label htmlFor="name">Name</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="name"
//                       value={formData.name}
//                       onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                       required
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="description">Description</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="description"
//                       value={formData.description}
//                       onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//                       required
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="cost">Cost</label>
//                     <input
//                       type="number"
//                       className="form-control"
//                       id="cost"
//                       value={formData.cost}
//                       onChange={(e) => setFormData({ ...formData, cost: e.target.value })}
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div className="modal-footer">
//                   <button type="button" className="btn btn-secondary" onClick={handleClose}>
//                     Close
//                   </button>
//                   <button type="submit" className="btn btn-primary">
//                     Save Changes
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ServicesDashboard;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ServicesDashboard.css';

const ServicesDashboard = () => {
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editService, setEditService] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    cost: '',
    timePeriod: '',
    slots: '',
    categoryId: '',
    fixedTimeSlots: [],
  });

  useEffect(() => {
    fetchServices();
    fetchCategories();
  }, []);

  const fetchServices = async () => {
    const response = await axios.get('http://localhost:8080/api/services');
    setServices(response.data);
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/service-categories');
      setCategories(response.data);
      console.log(response);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setEditService(null);
    setFormData({
      name: '',
      description: '',
      cost: '',
      timePeriod: '',
      slots: '',
      categoryId: '',
      fixedTimeSlots: [],
    });
  };

  const handleShow = () => setShowModal(true);

  const handleEdit = (service) => {
    setEditService(service);
    setFormData({
      name: service.name,
      description: service.description,
      cost: service.cost,
      timePeriod: service.timePeriod,
      slots: service.slots,
      categoryId: service.category.id,
      fixedTimeSlots: service.fixedTimeSlots,
    });
    handleShow();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceData = {
      ...formData,
      category: { id: formData.categoryId },
    };
    if (editService) {
      await axios.put(`http://localhost:8080/api/services/${editService.id}`, serviceData);
    } else {
      await axios.post('http://localhost:8080/api/services', serviceData);
    }
    fetchServices();
    handleClose();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/api/services/${id}`);
    fetchServices();
  };

  return (
    <div className="services-dashboard">
      <h1 className="mt-4 text-center">Services Dashboard</h1>
      <button className="btn btn-primary my-3" onClick={handleShow}>
        Add Service
      </button>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Cost</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id}>
                <td>{service.id}</td>
                <td>{service.name}</td>
                <td>{service.description}</td>
                <td>{service.cost}</td>
                <td>
                  <button className="btn btn-warning btn-sm" onClick={() => handleEdit(service)}>
                    Edit
                  </button>
                  {' '}
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(service.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{editService ? 'Edit Service' : 'Add Service'}</h5>
                <button type="button" className="close" onClick={handleClose}>
                  <span>&times;</span>
                </button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input
                      type="text"
                      className="form-control"
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cost">Cost</label>
                    <input
                      type="number"
                      className="form-control"
                      id="cost"
                      value={formData.cost}
                      onChange={(e) => setFormData({ ...formData, cost: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="timePeriod">Time Period</label>
                    <input
                      type="number"
                      className="form-control"
                      id="timePeriod"
                      value={formData.timePeriod}
                      onChange={(e) => setFormData({ ...formData, timePeriod: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="slots">Slots</label>
                    <input
                      type="number"
                      className="form-control"
                      id="slots"
                      value={formData.slots}
                      onChange={(e) => setFormData({ ...formData, slots: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select
                      className="form-control"
                      id="category"
                      value={formData.categoryId}
                      onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
                      required
                    >
                      <option value="">Select Category</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="fixedTimeSlots">Fixed Time Slots</label>
                    <input
                      type="text"
                      className="form-control"
                      id="fixedTimeSlots"
                      value={formData.fixedTimeSlots.join(', ')}
                      onChange={(e) => setFormData({ ...formData, fixedTimeSlots: e.target.value.split(', ') })}
                      required
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={handleClose}>
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesDashboard;
