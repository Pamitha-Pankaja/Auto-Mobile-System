// import React , { useState , useContext } from 'react';
// import AOS from 'aos';
// import { AuthContext } from './AuthContext';
// import { useNavigate } from 'react-router-dom';

// const SignIn = ({ toggleForm }) => {
//   const navigate = useNavigate(); 
//   const [formData, setFormData] = useState({
//     username: '',
//     password: ''
//   });

//   const { dispatch } = useContext(AuthContext);

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [id]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = {
//       username: formData.username,
//       password: formData.password
//     };

//     console.log(data);


//     try {
//       const response = await fetch('http://localhost:8080/api/auth/signin', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       });

//       if (response.ok) {
//         const result = await response.json();
//         dispatch({
//           type: 'LOGIN_SUCCESS',
//           payload: {
//             user: {
//               id: result.id,
//               username: result.username,
//               email: result.email,
//               roles: result.roles,
//             },
//             token: result.accessToken,
//           },
//         });
//         alert("Login successful!");

//         // Check if the user has the "ROLE_ADMIN" role
//         if (result.roles.includes('ROLE_ADMIN')) {
//           navigate('/dashboard'); 
//         } else {
//           navigate('/'); 
//         }

//         console.log(result); // handle the response data as needed
//       } else {
//         const result = await response.json();
//         alert(`Login failed: ${result.message}`);
//       }
//     } catch (error) {
//       alert(`Login failed: ${error.message}`);
//     }
//   };


//   React.useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <div className="auth-card card p-4 shadow-lg" data-aos="fade-up" style={{ maxWidth: '400px', width: '100%' }}>
//       <div className="card-body">
//         <h2 className="card-title text-center mb-4">Sign In</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group mb-3" data-aos="fade-right">
//             <label htmlFor="username">User Name </label>
//             <input type="text" className="form-control" id="username" placeholder="User Name"  value={formData.username} onChange={handleChange} required />
//           </div>
//           <div className="form-group mb-4" data-aos="fade-right">
//             <label htmlFor="password">Password</label>
//             <input type="password" className="form-control" id="password" placeholder="Password"  value={formData.password} onChange={handleChange}  required />
//           </div>
//           <div className="form-group form-check mb-4" data-aos="fade-right">
//             <input type="checkbox" className="form-check-input" id="rememberMe" />
//             <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
//           </div>
//           <button type="submit" className="btn btn-primary btn-block" data-aos="fade-right">Sign In</button>
//           <div className="text-center mt-3" data-aos="fade-right">
//             <span>Don't have an account? <a href="#" className="toggle-form" onClick={toggleForm}>Sign Up</a></span>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignIn;


import React, { useState, useContext, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = ({ toggleForm }) => {
  let local = "http://localhost:8080";
  let deploy = "https://robust-wonder-production.up.railway.app"
  let basurl = deploy;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    username: '',
    password: ''
  });

  const { dispatch } = useContext(AuthContext);

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
      case 'password':
        if (value.length < 6) {
          errorMsg = 'Password must be at least 6 characters long';
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
      password: formData.password
    };

    try {
      const response = await fetch(basurl+'/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const result = await response.json();
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: {
            user: {
              id: result.id,
              username: result.username,
              email: result.email,
              roles: result.roles,
            },
            token: result.accessToken,
          },
        });

        toast.success("Login successful!", {
          position: "top-right",  // Positioned at the top right corner
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });


        // Check if the user has the "ROLE_ADMIN" role
        setTimeout(() => {
          if (result.roles.includes('ROLE_ADMIN')) {
            navigate('/dashboard');
          } else {
            navigate('/');
          }
        }, 3000);

      } else {
        const result = await response.json();
        toast.error(`Login failed: ${result.message}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      toast.error(`Login failed: ${error.message}`, {
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
      <div className="auth-card card p-4 shadow-lg" data-aos="fade-up" style={{ maxWidth: '400px', width: '100%' }}>

        <div className="card-body">
          <h2 className="card-title text-center mb-4">Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3" data-aos="fade-right">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                id="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
              />
              {errors.username && <div className="invalid-feedback">{errors.username}</div>}
            </div>
            <div className="form-group mb-4" data-aos="fade-right">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>
            <div className="form-group form-check mb-4" data-aos="fade-right">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
            </div>
            <button type="submit" className="btn btn-primary btn-block" data-aos="fade-right">Sign In</button>
            <div className="text-center mt-3" data-aos="fade-right">
              <span>Don't have an account? <a href="#" className="toggle-form" onClick={toggleForm}>Sign Up</a></span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
