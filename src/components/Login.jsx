import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for login (e.g., calling an authentication API)
    console.log('Login form submitted:', formData);
    // Reset form fields after submission
    setFormData({ email: '', password: '' });
  };

  const loginStyle = {
    fontFamily: 'sans-serif',
    margin: '20px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    color: '#ffb800',
    fontSize: '1.8em',
    fontWeight: 'bold',
    marginBottom: '15px',
    textAlign: 'center',
  };

  const inputStyle = {
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px',
    width: '100%',
    margin: '5px 0',
  };

  const buttonStyle = {
    backgroundColor: '#ffb800',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    width: '100%',
    margin: '15px 0',
  };

  return (
    <div className="login-form" style={loginStyle}>
      <h2 style={headingStyle}>Login to KFC Online</h2>
      <form onSubmit={handleSubmit}>
        <input
          style={inputStyle}
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          style={inputStyle}
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button style={buttonStyle} type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
