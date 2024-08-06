// src/components/Sidebar.js
import React, { useState } from 'react';
import '../stylesheets/AdminSideBar.css'; // Ensure you create or update this CSS file

const AdminSidebar = () => {
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
      <div className="position-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              <i className="fas fa-tachometer-alt"></i>
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-box"></i>
              Orders
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-box-open"></i>
              Products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-users"></i>
              Customers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#submenu1" data-bs-toggle="collapse">
              <i className="fas fa-cogs"></i>
              Settings
            </a>
            <ul className="collapse" id="submenu1">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-user-cog"></i>
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-lock"></i>
                  Security
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminSidebar;
