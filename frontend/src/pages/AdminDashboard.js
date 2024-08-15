import React, { useState } from 'react';
import Sidebar from '../components/admin/Sidebar';

import '../stylesheets/AdminDashboard.css';
import Appointments from '../components/admin/Appointments';
import ServicesDashboard from '../components/admin/Services';
import ServiceCategoriesDashboard from '../components/admin/Categories';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('appointments');

  const renderSection = () => {
    switch (activeSection) {
      case 'appointments':
        return <Appointments/>;
      case 'services':
        return <ServicesDashboard/>;
      case 'categories':
        return <ServiceCategoriesDashboard/>;
      // case 'customers':
      //   return <Customers/>;
      // case 'profile':
      //   return <Profile />;
      // case 'security':
      //   return <Security />;
      default:
        return <Appointments />;
    }
  };

  return (
    <div className="admin-dashboard container-fluid">
      <div className="row">
        <Sidebar setActiveSection={setActiveSection} />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          {renderSection()}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
