import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ setActiveSection }) => {
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-dark sidebar">
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link active" onClick={() => setActiveSection('appointments')}>
              <i className="fas fa-tachometer-alt"></i> Appointments
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" onClick={() => setActiveSection('services')}>
              <i className="fas fa-box"></i> Services
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" onClick={() => setActiveSection('categories')}>
              <i className="fas fa-box-open"></i> Categories
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" onClick={() => setActiveSection('customers')}>
              <i className="fas fa-users"></i> Customers
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#submenu1" data-bs-toggle="collapse">
              <i className="fas fa-cogs"></i> Settings
            </Link>
            <ul className="collapse" id="submenu1" style={{ listStyleType: 'none', paddingLeft: 0, marginLeft: 0 }}>
              <li className="nav-item">
                <Link className="nav-link" onClick={() => setActiveSection('profile')}>
                  <i className="fas fa-user-cog"></i> Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={() => setActiveSection('security')}>
                  <i className="fas fa-lock"></i> Security
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
