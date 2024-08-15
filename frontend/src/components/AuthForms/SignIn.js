import React , { useState , useContext } from 'react';
import AOS from 'aos';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const SignIn = ({ toggleForm }) => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username: formData.username,
      password: formData.password
    };

    console.log(data);
    

    try {
      const response = await fetch('http://localhost:8080/api/auth/signin', {
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
        alert("Login successful!");

        // Check if the user has the "ROLE_ADMIN" role
        if (result.roles.includes('ROLE_ADMIN')) {
          navigate('/dashboard'); 
        } else {
          navigate('/'); 
        }
        
        console.log(result); // handle the response data as needed
      } else {
        const result = await response.json();
        alert(`Login failed: ${result.message}`);
      }
    } catch (error) {
      alert(`Login failed: ${error.message}`);
    }
  };


  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="auth-card card p-4 shadow-lg" data-aos="fade-up" style={{ maxWidth: '400px', width: '100%' }}>
      <div className="card-body">
        <h2 className="card-title text-center mb-4">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3" data-aos="fade-right">
            <label htmlFor="username">User Name </label>
            <input type="text" className="form-control" id="username" placeholder="User Name"  value={formData.username} onChange={handleChange} required />
          </div>
          <div className="form-group mb-4" data-aos="fade-right">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password"  value={formData.password} onChange={handleChange}  required />
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
  );
};

export default SignIn;
