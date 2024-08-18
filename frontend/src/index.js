import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery';
import Popper from '@popperjs/core';
import 'aos/dist/aos.css';
import './stylesheets/style.css'
import './stylesheets/mobile.css'
import App from './App';
import { AuthProvider } from './components/AuthForms/AuthContext';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <AuthProvider>
        <App />
      </AuthProvider>,
    </BrowserRouter>
  </React.StrictMode>
);

serviceWorkerRegistration.register();


