import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import './Certification.css';

const Certification = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  const handleCertificationClick = (type) => {
    navigate(`/certification/questions/${type}`);
  };

  return (
    <div className="certification-container">
      <NavBar isLoggedIn={isLoggedIn} />
      <div className="certification-header">
        <h1>Professional Certification</h1>
        <p>Choose your certification path and test your skills with our timed assessment.</p>
        <p>You'll have 15 minutes to answer 10 questions. Score 70% or higher to receive your certification.</p>
      </div>

      <div className="certification-options">
        <div 
          className="certification-card frontend"
          onClick={() => handleCertificationClick('frontend')}
        >
          <h2>Frontend Developer Certification</h2>
          <p>Test your knowledge of HTML, CSS, JavaScript, React, and modern frontend technologies.</p>
          <div className="cert-details">
            <span>10 Questions</span>
            <span>15 Minutes</span>
            <span>70% Pass Rate</span>
          </div>
          <button className="start-cert-btn">Start Certification</button>
        </div>

        <div 
          className="certification-card backend"
          onClick={() => handleCertificationClick('backend')}
        >
          <h2>Backend Developer Certification</h2>
          <p>Test your knowledge of Node.js, Databases, APIs, and server-side programming concepts.</p>
          <div className="cert-details">
            <span>10 Questions</span>
            <span>15 Minutes</span>
            <span>70% Pass Rate</span>
          </div>
          <button className="start-cert-btn">Start Certification</button>
        </div>
      </div>
    </div>
  );
};

export default Certification;