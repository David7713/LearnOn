import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { SiGooglegemini } from "react-icons/si";
import { IoMoon } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className="navBar-section">
      <div className="logo">
        <Link to="/">Learn <label>On</label></Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/quiz">Quiz</Link>
        </li>
        <li>
          <Link to="/download">Download</Link>
        </li>
        <li>
          <Link to="/certification">Certification</Link>
        </li>
        <li id='ai'>
          <Link to="/ai-chat">AI <SiGooglegemini></SiGooglegemini></Link>
        </li>
        <li>
          <Link to="/video-course">Video Course</Link>
        </li>
      </ul>
      <ul className="nav-actions">
        <li>
          <IoMoon></IoMoon>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
