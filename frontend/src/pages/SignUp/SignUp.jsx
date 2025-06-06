import React, { useState } from 'react';
import './SignUp.css';
import NavBar from '../../components/NavBar/NavBar';
import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    userType: 'student',
    agreeTerms: false,
  });

  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.agreeTerms) {
      setMessage('You must agree to the terms and conditions');
      setMessageType('error');
      return;
    }

    if (!formData.username) {
      setMessage('Username is required');
      setMessageType('error');
      return;
    }

    axios
      .post('http://localhost:5000/api/auth/register', formData)
      .then((response) => {
        setMessage(response.data.message || 'Registered successfully!');
        setMessageType('success');
        setTimeout(() => navigate('/login'), 2000); // Navigate to /login after 2 sec
      })
      .catch((error) => {
        console.error('Error during registration:', error);
        if (error.response) {
          setMessage(error.response.data.message || 'Registration failed.');
        } else {
          setMessage('An error occurred during registration');
        }
        setMessageType('error');
      });
  };

  return (
    <div className="signup-overlay">
      <NavBar />
      <Carousel />
      <div className="signup-container">
        <h2>Sign Up</h2>

        {message && (
          <div className={`message-box ${messageType}`}>
            {message}
          </div>
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

          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <label>User Type:</label>
          <select name="userType" value={formData.userType} onChange={handleChange}>
            <option value="student">Student</option>
            <option value="developer">Developer</option>
          </select>

          <label className="checkbox-label">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
            />
            I agree to the terms and conditions
          </label>

          <button type="submit">Sign Up</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
