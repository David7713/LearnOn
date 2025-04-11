import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import NavBar from '../../components/NavBar/NavBar';
import Carousel from '../../components/Carousel/Carousel';

const Login = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      navigate('/');  // Redirect to home if already logged in
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/api/auth/login', formData)
      .then(response => {
        console.log('Login successful:', response.data);

        // Store the JWT token and user info
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', response.data.user.username);

        // Set logged-in status in parent component through props
        setIsLoggedIn(true);

        // Redirect to home page instead of user profile
        navigate('/');
      })
      .catch(error => {
        console.error('Error during login:', error);
        alert('Login failed: ' + (error.response?.data?.message || error.message));
      });
  };

  return (
    <div className="login-overlay">
      <NavBar isLoggedIn={false} />
      <Carousel />
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={6}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
