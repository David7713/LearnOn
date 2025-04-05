import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';
import { SiGooglegemini } from "react-icons/si";
import { IoMoon } from "react-icons/io5";

const NavBar = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username'); // Get username to display

  const handleLogout = () => {
    // Clear all auth data
    localStorage.removeItem('authToken');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    
    // Redirect to home page
    navigate('/');
    
    // Refresh to update the navbar (or use a state update if you have a central state)
    window.location.reload();
  };

  return (
    <div className="navBar-section">
      <div className="logo">
        <Link to="/">Learn <label>On</label></Link>
      </div>
      <ul className="nav-links">
        {/* Always visible links */}
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        
        {/* For non-logged in users */}
        {!isLoggedIn && (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">SignUp</Link></li>
          </>
        )}

        {/* For logged in users */}
        {isLoggedIn && (
          <>
            <li><Link to="/quiz">Quiz</Link></li>
            <li><Link to="/download">Download</Link></li>
            <li><Link to="/certification">Certification</Link></li>
            <li><Link to="/ai-chat">AI <SiGooglegemini /></Link></li>
            <li><Link to="/video-course">Video Course</Link></li>
            <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
            {username && <li className="username-display">Welcome, {username}</li>}
          </>
        )}
      </ul>
      <ul className="nav-actions">
        <li>
          <IoMoon />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;