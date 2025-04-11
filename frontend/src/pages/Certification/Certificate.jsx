import React, { useRef, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Certificate = () => {
  const { id } = useParams();
  const [certification, setCertification] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const certificateRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCertificationAndUser = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('authToken');
        if (!token) {
          navigate('/login');
          return;
        }

        // Fetch certification details
        const certResponse = await fetch(`http://localhost:5000/api/certifications/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!certResponse.ok) {
          throw new Error(`Failed to fetch certification: ${certResponse.status}`);
        }

        const certData = await certResponse.json();
        setCertification(certData);

        // Fetch user profile
        const userResponse = await fetch('http://localhost:5000/api/user/profile', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!userResponse.ok) {
          throw new Error(`Failed to fetch user profile: ${userResponse.status}`);
        }

        const userData = await userResponse.json();
        setUser(userData);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificationAndUser();
  }, [id, navigate]);

  const generatePDF = async () => {
    if (!certificateRef.current) return;

    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2, // Higher scale for better quality
        useCORS: true,
        logging: false
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });
      
      const imgWidth = 297; // A4 landscape width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`${user?.username || 'user'}-${certification?.course_type}-certificate.pdf`);
    } catch (err) {
      console.error("Error generating PDF:", err);
      alert("Failed to generate PDF. Please try again.");
    }
  };

  if (loading) return <div>Loading certificate...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!certification || !user) return <div>Certificate or user data not found</div>;

  const certDate = new Date(certification.certification_date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Generate random signature (for demo purposes)
  const signatures = [
    "John Hancock",
    "Ada Lovelace",
    "Alan Turing",
    "Grace Hopper",
    "Tim Berners-Lee"
  ];
  const randomSignature = signatures[Math.floor(Math.random() * signatures.length)];

  return (
    <div className="certificate-page">
      <h1>Your Certificate</h1>
      <p>Congratulations on your achievement! You can download your certificate below.</p>
      
      <div className="certificate-actions">
        <button 
          onClick={generatePDF}
          style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            marginBottom: '20px'
          }}
        >
          Download Certificate
        </button>
      </div>
      
      <div 
        ref={certificateRef} 
        className="certificate-container"
        style={{
          width: '800px',
          height: '600px',
          border: '15px solid #a67c00',
          padding: '20px',
          textAlign: 'center',
          position: 'relative',
          margin: '0 auto',
          backgroundColor: '#fffaf0',
          boxShadow: '0 0 15px rgba(0,0,0,0.2)',
          overflow: 'hidden'
        }}
      >
        {/* Certificate Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle, transparent 20%, #fffaf0 20%, #fffaf0 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, #fffaf0 20%, #fffaf0 80%, transparent 80%, transparent) 50px 50px',
          backgroundSize: '100px 100px',
          backgroundPosition: '0 0, 50px 50px',
          opacity: 0.1,
          zIndex: 0
        }}></div>
        
        {/* Certificate Content */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ marginBottom: '20px' }}>
            <h1 style={{ color: '#a67c00', fontSize: '48px', fontFamily: 'Georgia, serif', margin: '30px 0 10px' }}>Certificate of Completion</h1>
            <h2 style={{ fontSize: '24px', fontWeight: 'normal', margin: '0 0 40px' }}>
              This certifies that
            </h2>
          </div>
          
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '36px', color: '#333', fontFamily: 'Georgia, serif', borderBottom: '2px solid #a67c00', display: 'inline-block', padding: '0 20px 5px' }}>
              {user.username || 'Student'}
            </h2>
            <p style={{ fontSize: '20px', margin: '20px 0' }}>
              has successfully completed the
            </p>
            <h3 style={{ fontSize: '28px', color: '#a67c00', margin: '10px 0' }}>
              {certification.course_type === 'frontend' ? 'Frontend Development' : 'Backend Development'} Certification
            </h3>
            <p style={{ fontSize: '20px', margin: '20px 0' }}>
              with a score of <strong>{certification.score?.toFixed(1) || '70.0'}%</strong>
            </p>
          </div>
          
          <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end' }}>
            <div>
              <p style={{ borderTop: '2px solid #000', paddingTop: '10px', width: '200px' }}>
                <span style={{ fontFamily: 'cursive', fontSize: '24px' }}>{randomSignature}</span><br />
                <span style={{ fontSize: '14px' }}>Instructor</span>
              </p>
            </div>
            <div>
              <p style={{ borderTop: '2px solid #000', paddingTop: '10px', width: '200px' }}>
                <span style={{ fontFamily: 'serif', fontSize: '18px' }}>{certDate}</span><br />
                <span style={{ fontSize: '14px' }}>Date</span>
              </p>
            </div>
          </div>
          
          <div style={{ marginTop: '50px' }}>
            <p style={{ fontSize: '16px', fontStyle: 'italic' }}>
              Time Completed: {Math.floor(certification.completion_time / 60)}:{(certification.completion_time % 60).toString().padStart(2, '0')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;