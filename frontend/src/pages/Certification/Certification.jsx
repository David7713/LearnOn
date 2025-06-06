import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import './Certification.css';
import NavBar from '../../components/NavBar/NavBar';
import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';
import frontendImage from '../Certification/certfication assets/frontendCertification.png'
import backendImage from '../Certification/certfication assets/backendCertification.png'

const Certification = ({isLoggedIn}) => {
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState(''); // Changed from userName to username

  const navigate = useNavigate();

  const checkCertifications = async () => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        setError('You must be logged in to check certifications');
        setLoading(false);
        return;
      }

      const response = await fetch('http://localhost:5000/api/certifications', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      setCertifications(data);

      // Fetch user info for username
      const userResponse = await fetch('http://localhost:5000/api/user', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (userResponse.ok) {
        const userData = await userResponse.json();
        setUsername(userData.username); // Changed from userData.name to userData.username
      }

    } catch (err) {
      setError(`Failed to check certifications: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkCertifications();
  }, []);

  const downloadCertificate = (cert) => {
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4'
    });
    
    // Background
    doc.setFillColor(252, 252, 252);
    doc.rect(0, 0, 297, 210, 'F');
    
    // Fancy border
    doc.setDrawColor('#9228e9');
    doc.setLineWidth(2);
    doc.rect(10, 10, 277, 190, 'D');
    
    // Inner decorative border
    doc.setDrawColor('#9228e9');
    doc.setLineWidth(0.5);
    doc.rect(15, 15, 267, 180, 'D');
    
    // Header with gradient background
    doc.setFillColor(146, 40, 233, 0.1);
    doc.rect(15, 15, 267, 30, 'F');
    
    // Logo or banner at top
    doc.setTextColor('#9228e9');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(36);
    doc.text('LearnOn', 148.5, 30, null, null, 'center');
    
    // Certificate title
    doc.setTextColor('#333333');
    doc.setFontSize(28);
    doc.text('CERTIFICATE OF COMPLETION', 148.5, 55, null, null, 'center');
    
    // Decorative line
    doc.setDrawColor('#9228e9');
    doc.setLineWidth(1);
    doc.line(74, 60, 223, 60);
    
    // Certificate text
    doc.setFont('helvetica', 'normal');
    doc.setTextColor('#555555');
    doc.setFontSize(16);
    doc.text('This is to certify that', 148.5, 80, null, null, 'center');
    
    // Username - changed from userName to username
    doc.setFont('helvetica', 'bold');
    doc.setTextColor('#111111');
    doc.setFontSize(24);
    doc.text(username || 'LearnOn Student', 148.5, 95, null, null, 'center'); // Changed fallback to 'LearnOn Student'
    
    // More certificate text
    doc.setFont('helvetica', 'normal');
    doc.setTextColor('#555555');
    doc.setFontSize(16);
    doc.text('has successfully completed the', 148.5, 110, null, null, 'center');
    
    // Course name
    doc.setFont('helvetica', 'bold');
    doc.setTextColor('#9228e9');
    doc.setFontSize(20);
    const courseName = cert.course_type === 'frontend' ? 'Frontend Development' : 'Backend Development';
    doc.text(courseName, 148.5, 125, null, null, 'center');
    
    // Date
    doc.setFont('helvetica', 'italic');
    doc.setTextColor('#555555');
    doc.setFontSize(14);
    doc.text(`Completion Date: ${new Date(cert.certification_date).toLocaleDateString()}`, 148.5, 145, null, null, 'center');
    
    // Add signature
    doc.setFont('times', 'italic'); // Using times italic for signature
    doc.setTextColor('#000066');
    doc.setFontSize(20);
    doc.text('H. David', 111, 160, null, null, 'center');
    
    // Add signature line
    doc.setDrawColor('#333333');
    doc.setLineWidth(0.5);
    doc.line(74, 165, 148, 165);
    
    doc.setFont('helvetica', 'normal');
    doc.setTextColor('#333333');
    doc.setFontSize(12);
    doc.text('Director Signature', 111, 175, null, null, 'center');
    
    // Try to add the seal image
    try {
      const imgData = new Image();
      imgData.src = '/seal.jpg';
      
      imgData.onload = function() {
        // Add the image once it's loaded
        const imgWidth = 40;
        const imgHeight = 40;
        doc.addImage(this, 'JPEG', 225, 155, imgWidth, imgHeight);
        doc.save(`${courseName}_Certificate.pdf`);
      };
      
      imgData.onerror = function() {
        console.error('Could not load seal image');
        
        // If image fails to load, create a circular seal instead
        doc.setDrawColor('#9228e9');
        doc.setFillColor('#f0e6fa');
        doc.circle(245, 175, 20, 'FD');
        
        doc.setTextColor('#9228e9');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.text('CERTIFIED', 245, 175, null, null, 'center');
        
        doc.save(`${courseName}_Certificate.pdf`);
      };
      
      // Add a timeout to save the PDF even if image operations fail
      setTimeout(() => {
        // If 2 seconds pass and the PDF hasn't been saved yet, save it without the image
        doc.save(`${courseName}_Certificate.pdf`);
      }, 2000);
      
    } catch (err) {
      console.error('Error generating certificate:', err);
      
      // Fallback if anything goes wrong
      doc.setFont('helvetica', 'normal');
      doc.setTextColor('#333333');
      doc.setFontSize(12);
      doc.text('© LearnOn 2025', 148.5, 185, null, null, 'center');
      
      doc.save(`${courseName}_Certificate.pdf`);
    }
  };

  const renderCertificationInfo = () => {
    if (!certifications.length) {
      return <p>You don't have any certifications yet.</p>;
    }

    return (

 
      <div className="certification-list">
            <NavBar isLoggedIn={isLoggedIn} />
             <Carousel></Carousel>
      <h3>Your Certifications:</h3>
   <div className='my-certification-container'>
   {certifications.map(cert => (
        <div key={cert.id} className="certification-card">
          <img
            src={cert.course_type === 'frontend' ? frontendImage : backendImage}
            alt={`${cert.course_type} certification`}
            className="certification-image"
          />
          <h4>{cert.course_type === 'frontend' ? 'Frontend Development' : 'Backend Development'}</h4>
          <p>Issued on: {new Date(cert.certification_date).toLocaleDateString()}</p>
          <button className="download-btn" onClick={() => downloadCertificate(cert)}>
            Download PDF
          </button>
        </div>
      ))}
   </div>

    </div>
    );
  };

  const hasCertification = (courseType) => {
    return certifications.some(cert => cert.course_type === courseType);
  };

  const handleNavigate = (courseType) => {
    navigate(`/certification/questions/${courseType}`);
  };

  const renderCertificationOptions = () => {
    return (
      <div className="certification-options">
        {!hasCertification('frontend') && (
          <div className="certification-card clickable" onClick={() => handleNavigate('frontend')}>
            <h3>Frontend Certification</h3>
            <p>Click to start the Frontend certification exam.</p>
          </div>
        )}

        {!hasCertification('backend') && (
          <div className="certification-card clickable" onClick={() => handleNavigate('backend')}>
            <h3>Backend Certification</h3>
            <p>Click to start the Backend certification exam.</p>
          </div>
        )}

        {hasCertification('frontend') && hasCertification('backend') && (
          <p className='certification-options-complated'>You have completed all available certifications. Congratulations!</p>
        )}
      </div>
    );
  };
  

  return (
    <div className="certification-container">
      <h1>My Certifications</h1>
      {loading && <p>Checking certifications...</p>}
      {error && <p className="error-message">{error}</p>}
      {!loading && certifications !== null && renderCertificationInfo()}
      {!loading && renderCertificationOptions()}
      <Footer></Footer>
    </div>
    
  );
};

export default Certification;