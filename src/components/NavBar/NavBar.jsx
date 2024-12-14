import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';
import { SiGooglegemini } from "react-icons/si";
import { IoMoon } from "react-icons/io5";

const NavBar = () => {
  const location = useLocation(); // Get the current location

  // Scroll to top when the page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); // This will ensure scroll to top on every route change

  return (
    <div className="navBar-section">
      <div className="logo">
        <Link to="/">Learn <label>On</label></Link>
      </div>
      <ul className="nav-links">
        <li className={location.pathname === '/quiz' ? 'active' : ''}>
          <Link to="/quiz">Quiz</Link>
        </li>
        <li className={location.pathname === '/download' ? 'active' : ''}>
          <Link to="/download">Download</Link>
        </li>
        <li className={location.pathname === '/certification' ? 'active' : ''}>
          <Link to="/certification">Certification</Link>
        </li>
        <li id='ai' className={location.pathname === '/ai-chat' ? 'active' : ''}>
          <Link to="/ai-chat">AI <SiGooglegemini /></Link>
        </li>
        <li className={location.pathname === '/video-course' ? 'active' : ''}>
          <Link to="/video-course">Video Course</Link>
        </li>
      </ul>
      <ul className="nav-actions">
        <li>
          <IoMoon />
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
