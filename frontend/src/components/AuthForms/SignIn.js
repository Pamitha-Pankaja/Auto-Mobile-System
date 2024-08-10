import React from 'react';
import AOS from 'aos';

const SignIn = ({ toggleForm }) => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="auth-card card p-4 shadow-lg" data-aos="fade-up" style={{ maxWidth: '400px', width: '100%' }}>
      <div className="card-body">
        <h2 className="card-title text-center mb-4">Sign In</h2>
        <form>
          <div className="form-group mb-3" data-aos="fade-right">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" required />
          </div>
          <div className="form-group mb-4" data-aos="fade-right">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" required />
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
