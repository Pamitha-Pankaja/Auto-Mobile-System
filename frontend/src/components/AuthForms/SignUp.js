import React , { useState } from 'react';
import AOS from 'aos';

const SignUp = ({ toggleForm }) => {

  const [formData, setFormData] = useState({
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Prepare data for submission
    const data = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      phoneNumber: formData.phoneNumber,
      roles: ["ROLE_USER"]
    };

    console.log("Login-response",data);
    

    try {
      const response = await fetch('http://localhost:8080/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert("Signup successful!");
        toggleForm(); // Switch to Sign In form after successful signup
      } else {
        const result = await response.json();
        alert(`Signup failed: ${result.message}`);
      }
    } catch (error) {
      alert(`Signup failed: ${error.message}`);
    }
  };


  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);



  return (
    <div className="auth-card card p-4 shadow-lg" data-aos="fade-up" style={{ maxWidth: '400px', width: '100%' }}>
      <div className="card-body">
        <h2 className="card-title text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3" data-aos="fade-right">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" id="username" placeholder="Enter username"  value={formData.username} onChange={handleChange}  required />
          </div>
        
          <div className="form-group mb-3" data-aos="fade-right">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email"  value={formData.email} onChange={handleChange}  required />
          </div>

          <div className="form-group mb-3" data-aos="fade-right">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="number" className="form-control" id="phoneNumber" placeholder="Phone Number"value={formData.phoneNumber} onChange={handleChange} required />
          </div>

          <div className="form-group mb-4" data-aos="fade-right">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password"  value={formData.password} onChange={handleChange} required />
          </div>
          <div className="form-group mb-4" data-aos="fade-right">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary btn-block" data-aos="fade-right">Sign Up</button>
          <div className="text-center mt-3" data-aos="fade-right">
            <span>Already have an account? <a href="#" className="toggle-form" onClick={toggleForm}>Sign In</a></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
