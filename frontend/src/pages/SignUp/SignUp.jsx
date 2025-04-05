import React, { useState } from 'react';
import './SignUp.css';
import NavBar from '../../components/NavBar/NavBar';
import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';
import axios from 'axios'; // Import Axios

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '', // Added username field
    userType: 'student',
    agreeTerms: false,
  });

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
      alert('You must agree to the terms and conditions');
      return;
    }
    if (!formData.username) {
      alert('Username is required');
      return;
    }

    // Send a POST request to the backend
    axios
      .post('http://localhost:5000/api/auth/register', formData)
      .then((response) => {
        console.log('User registered:', response.data);
        alert(response.data.message); // Show success message
      })
      .catch((error) => {
        console.error('Error during registration:', error);
        if (error.response) {
          alert(`Registration failed: ${error.response.data.message}`);
        } else {
          alert('An error occurred during registration');
        }
      });
  };

  return (
    <div className="signup-overlay">
      <NavBar />
      <Carousel />
      <div className="signup-container">
        <h2>Sign Up</h2>
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
            <option value="instructor">Instructor</option>
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

    </div>
  );
};

export default SignUp;
