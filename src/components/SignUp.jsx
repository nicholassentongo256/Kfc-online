import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedErrors = { ...errors };

    if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      updatedErrors.email = 'Invalid email format.';
    } else if (name === 'password' && value.length < 8) {
      updatedErrors.password = 'Password must be at least 8 characters long.';
    } else {
      updatedErrors[name] = '';
    }

    setFormData({ ...formData, [name]: value });
    setErrors(updatedErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for form submission (e.g., sending data to backend)
    console.log('Form submitted:', formData);
    // Reset form fields and errors after submission
    setFormData({ name: '', email: '', password: '' });
    setErrors({});
  };

  const signupStyle = {
    fontFamily: 'sans-serif',
    margin: '20px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };
  const buttonstyle = {
    background: `linear-gradient(to right, #ffb800, #ff8c00)`,
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    width: '100%',
    margin: '15px 0',
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
    <div className="signup-form" style={signupStyle}>
      <h2 style={headingStyle}>Create Your KFC Online Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          style={inputStyle}
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}

        <input
          style={inputStyle}
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}

        <input
          style={inputStyle}
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}

        <button style={buttonStyle} type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
};

export default Signup;
