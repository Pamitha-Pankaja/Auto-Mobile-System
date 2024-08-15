import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ServiceCategoriesDashboard.css';

const ServiceCategoriesDashboard = () => {
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editCategory, setEditCategory] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/service-categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setEditCategory(null);
    setFormData({ name: '' });
  };

  const handleShow = () => setShowModal(true);

  const handleEdit = (category) => {
    setEditCategory(category);
    setFormData({ name: category.name });
    handleShow();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editCategory) {
      await axios.put(`http://localhost:8080/api/service-categories/${editCategory.id}`, formData);
    } else {
      await axios.post('http://localhost:8080/api/service-categories', formData);
    }
    fetchCategories();
    handleClose();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/api/service-categories/${id}`);
    fetchCategories();
  };

  return (
    <div className="service-categories-dashboard">
      <h1 className="mt-4 text-center">Service Categories Dashboard</h1>
      <button className="btn btn-primary my-3" onClick={handleShow}>
        Add Category
      </button>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>
                  <button className="btn btn-warning btn-sm" onClick={() => handleEdit(category)}>
                    Edit
                  </button>
                  {' '}
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(category.id)}>
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
                <h5 className="modal-title">{editCategory ? 'Edit Category' : 'Add Category'}</h5>
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

export default ServiceCategoriesDashboard;
