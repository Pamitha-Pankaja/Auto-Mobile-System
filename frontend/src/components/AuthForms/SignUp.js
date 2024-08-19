// import React , { useState } from 'react';
// import AOS from 'aos';

// const SignUp = ({ toggleForm }) => {

//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     phoneNumber: ''
//   });

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [id]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check if passwords match
//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     // Prepare data for submission
//     const data = {
//       username: formData.username,
//       email: formData.email,
//       password: formData.password,
//       phoneNumber: formData.phoneNumber,
//       roles: ["ROLE_USER"]
//     };

//     console.log("Login-response",data);
    

//     try {
//       const response = await fetch('http://localhost:8080/api/auth/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       });

//       if (response.ok) {
//         alert("Signup successful!");
//         toggleForm(); // Switch to Sign In form after successful signup
//       } else {
//         const result = await response.json();
//         alert(`Signup failed: ${result.message}`);
//       }
//     } catch (error) {
//       alert(`Signup failed: ${error.message}`);
//     }
//   };


//   React.useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);



//   return (
//     <div className="auth-card card mt-3 p-2 shadow-lg" data-aos="fade-up" style={{ maxWidth: '400px', width: '100%' }}>
//       <div className="card-body">
//         <h2 className="card-title text-center mb-4">Sign Up</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group mb-2" data-aos="fade-right">
//             <label htmlFor="username">Username</label>
//             <input type="text" className="form-control" id="username" placeholder="Enter username"  value={formData.username} onChange={handleChange}  required />
//           </div>
        
//           <div className="form-group mb-2" data-aos="fade-right">
//             <label htmlFor="email">Email address</label>
//             <input type="email" className="form-control" id="email" placeholder="Enter email"  value={formData.email} onChange={handleChange}  required />
//           </div>

//           <div className="form-group mb-2" data-aos="fade-right">
//             <label htmlFor="phoneNumber">Phone Number</label>
//             <input type="number" className="form-control" id="phoneNumber" placeholder="Phone Number"value={formData.phoneNumber} onChange={handleChange} required />
//           </div>

//           <div className="form-group mb-2" data-aos="fade-right">
//             <label htmlFor="password">Password</label>
//             <input type="password" className="form-control" id="password" placeholder="Password"  value={formData.password} onChange={handleChange} required />
//           </div>
//           <div className="form-group mb-2" data-aos="fade-right">
//             <label htmlFor="confirmPassword">Confirm Password</label>
//             <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
//           </div>
//           <button type="submit" className="btn btn-primary btn-block" data-aos="fade-right">Sign Up</button>
//           <div className="text-center mt-2" data-aos="fade-right">
//             <span>Already have an account? <a href="#" className="toggle-form" onClick={toggleForm}>Sign In</a></span>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = ({ toggleForm }) => {
  let local = "http://localhost:8080";
  let deploy = "https://robust-wonder-production.up.railway.app"
  let basurl = deploy;
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: ''
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value
    }));

    validateField(id, value);
  };

  const validateField = (id, value) => {
    let errorMsg = '';
    
    switch (id) {
      case 'username':
        if (value.trim().length < 3) {
          errorMsg = 'Username must be at least 3 characters long';
        }
        break;
      case 'email':
        if (!/\S+@\S+\.\S+/.test(value)) {
          errorMsg = 'Invalid email address';
        }
        break;
      case 'phoneNumber':
        if (!/^\d{10}$/.test(value)) {
          errorMsg = 'Phone number must be 10 digits long';
        }
        break;
      case 'password':
        if (value.length < 6) {
          errorMsg = 'Password must be at least 6 characters long';
        }
        break;
      case 'confirmPassword':
        if (value !== formData.password) {
          errorMsg = 'Passwords do not match';
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: errorMsg
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hasErrors = Object.values(errors).some(error => error !== '') || 
                      Object.values(formData).some(value => value === '');
    
    if (hasErrors) {
      toast.error("Please fix the errors in the form", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    const data = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      phoneNumber: formData.phoneNumber,
      roles: ["ROLE_USER"]
    };

    try {
      const response = await fetch(+basurl+'/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        toast.success("Signup successful! Redirecting to login...", {
          position: "top-right",  // Positioned at the top right corner
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setTimeout(() => {
          toggleForm(); // Switch to Sign In form after successful signup
        }, 3000);
      } else {
        const result = await response.json();
        toast.error(`Signup failed: ${result.message}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      toast.error(`Signup failed: ${error.message}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
    <ToastContainer autoClose={3000} />
    <div className="auth-card card mt-3 p-2 shadow-lg" data-aos="fade-up" style={{ maxWidth: '400px', width: '100%' }}>
      
      <div className="card-body">
        <h2 className="card-title text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              className={`form-control ${errors.username ? 'is-invalid' : ''}`} 
              id="username" 
              value={formData.username} 
              onChange={handleChange} 
              placeholder="Enter your username" 
            />
            {errors.username && <div className="invalid-feedback">{errors.username}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
              id="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Enter your email" 
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input 
              type="text" 
              className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`} 
              id="phoneNumber" 
              value={formData.phoneNumber} 
              onChange={handleChange} 
              placeholder="Enter your phone number" 
            />
            {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              className={`form-control ${errors.password ? 'is-invalid' : ''}`} 
              id="password" 
              value={formData.password} 
              onChange={handleChange} 
              placeholder="Enter your password" 
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input 
              type="password" 
              className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`} 
              id="confirmPassword" 
              value={formData.confirmPassword} 
              onChange={handleChange} 
              placeholder="Confirm your password" 
            />
            {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
          </div>
          
          <button type="submit" className="btn btn-primary btn-block" data-aos="fade-right">Sign Up</button>

          <div className="text-center mt-2" data-aos="fade-right">
            <span>Already have an account? <a href="#" className="toggle-form" onClick={toggleForm}>Sign In</a></span>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default SignUp;




