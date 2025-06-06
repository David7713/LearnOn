import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import NavBar from '../../components/NavBar/NavBar';
import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer'

const Login = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
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
    // Clear error when user starts typing
    setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/api/auth/login', formData)
      .then(response => {
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', response.data.user.username);

        setIsLoggedIn(true);
        navigate('/');
      })
      .catch(error => {
        const msg = error.response?.data?.message || 'Login failed. Please try again.';
        setErrorMessage(msg);
      });
  };

  return (
 
    <div className="login-overlay">
      <NavBar isLoggedIn={false} />
      <Carousel />
      <div className="login-container">
        <h2>Login</h2>
        {errorMessage && (
          <div className="login-error-message">{errorMessage}</div>
        )}
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
