import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { saveAs } from 'file-saver';
import './CertificationView.css';

const CertificationView = ({ isLoggedIn }) => {
  const location = useLocation();
  const {
    score,
    correctAnswers,
    totalQuestions,
    certificationType,
    certificationId,
    username
  } = location.state || {};
  
  const [pdfUrl, setPdfUrl] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const passed = score >= 70;
  const completionDate = new Date().toLocaleDateString();

  // Generate PDF certificate
  const generatePDF = async () => {
    setIsGenerating(true);
    try {
      // Create a new PDF document
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage([842, 595]); // A4 landscape
      
      // Embed fonts
      const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
      
      // Set page size and margins
      const { width, height } = page.getSize();
      
      // Draw border
      page.drawRectangle({
        x: 20,
        y: 20,
        width: width - 40,
        height: height - 40,
        borderColor: rgb(0.2, 0.2, 0.8),
        borderWidth: 2,
      });
      
      // Add title
      page.drawText('CERTIFICATE OF COMPLETION', {
        x: 250,
        y: height - 80,
        size: 28,
        font: helveticaBold,
        color: rgb(0.1, 0.1, 0.7),
      });
      
      // Add icon or logo placeholder
      page.drawRectangle({
        x: 371,
        y: height - 150,
        width: 100,
        height: 50,
        color: rgb(0.9, 0.9, 0.95),
      });
      
      // Add recipient name
      page.drawText('This certifies that', {
        x: 321,
        y: height - 190,
        size: 14,
        font: helveticaFont,
      });
      
      page.drawText(username, {
        x: width / 2 - (username.length * 5),
        y: height - 230,
        size: 24,
        font: helveticaBold,
        color: rgb(0.2, 0.2, 0.8),
      });
      
      // Add certification details
      page.drawText(`has successfully completed the ${certificationType === 'frontend' ? 'Frontend' : 'Backend'} Developer Certification`, {
        x: 200,
        y: height - 280,
        size: 16,
        font: helveticaFont,
      });
      
      page.drawText(`with a score of ${score.toFixed(0)}%`, {
        x: 340,
        y: height - 320,
        size: 18,
        font: helveticaBold,
        color: passed ? rgb(0.1, 0.6, 0.1) : rgb(0.8, 0.2, 0.2),
      });
      
      page.drawText(`Correct Answers: ${correctAnswers} out of ${totalQuestions}`, {
        x: 310,
        y: height - 350,
        size: 14,
        font: helveticaFont,
      });
      
      // Add date
      page.drawText(`Issued on: ${completionDate}`, {
        x: 350,
        y: height - 400,
        size: 12,
        font: helveticaFont,
      });
      
      // Add certificate ID
      page.drawText(`Certificate ID: ${certificationId || 'CERT-' + Math.floor(Math.random() * 10000)}`, {
        x: 320,
        y: 50,
        size: 10,
        font: helveticaFont,
      });
      
      // Save the PDF
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
      setIsGenerating(false);
    } catch (error) {
      console.error('Error generating PDF:', error);
      setIsGenerating(false);
    }
  };

  // Generate PDF on component mount
  useEffect(() => {
    if (score && passed) {
      generatePDF();
    }
  }, []);

  // Download PDF function
  const downloadPDF = () => {
    if (pdfUrl) {
      saveAs(pdfUrl, `${certificationType}-certification-${username}.pdf`);
    }
  };

  return (
    <div className="certification-view-container">
      <NavBar isLoggedIn={isLoggedIn} />
      
      <div className="certification-result">
        <h1>{passed ? 'Congratulations!' : 'Almost There!'}</h1>
        
        <div className="result-details">
          <div className="score-circle">
            <div className="score-value">{score.toFixed(0)}%</div>
          </div>
          
          <div className="result-text">
            {passed ? (
              <p>You have successfully passed the {certificationType === 'frontend' ? 'Frontend' : 'Backend'} Developer Certification!</p>
            ) : (
              <p>You scored {score.toFixed(0)}%, which is below the 70% passing threshold. Try again when you're ready!</p>
            )}
            
            <div className="result-stats">
              <p><strong>Correct Answers:</strong> {correctAnswers} out of {totalQuestions}</p>
              <p><strong>Completion Date:</strong> {completionDate}</p>
              {certificationId && <p><strong>Certificate ID:</strong> {certificationId}</p>}
            </div>
          </div>
        </div>
        
        {passed && (
          <div className="certificate-actions">
            {pdfUrl ? (
              <>
                <div className="pdf-preview">
                  <iframe 
                    src={pdfUrl} 
                    title="Certificate Preview" 
                    width="100%" 
                    height="400"
                  />
                </div>
                <button onClick={downloadPDF} className="download-btn">
                  Download Certificate
                </button>
              </>
            ) : (
              <div className="generating-pdf">
                {isGenerating ? 'Generating your certificate...' : 'Failed to generate certificate. Please try again.'}
              </div>
            )}
          </div>
        )}
        
        <div className="actions">
          {!passed && (
            <button onClick={() => window.location.href = '/certification'} className="retry-btn">
              Try Again
            </button>
          )}
          <button onClick={() => window.location.href = '/'} className="home-btn">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificationView;