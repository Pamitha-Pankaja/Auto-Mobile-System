import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-dark sidebar">
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              <i className="fas fa-tachometer-alt"></i>
              Appointments
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services">
              <i className="fas fa-box"></i>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/categories">
              <i className="fas fa-box-open"></i>
              Categories
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/customers">
              <i className="fas fa-users"></i>
              Customers
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#submenu1" data-bs-toggle="collapse">
              <i className="fas fa-cogs"></i>
              Settings
            </Link>
            <ul className="collapse" id="submenu1">
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  <i className="fas fa-user-cog"></i>
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/security">
                  <i className="fas fa-lock"></i>
                  Security
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
