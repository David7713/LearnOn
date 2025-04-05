import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import './CertificationQuestions.css';
import questionsData from './questions.json';

const CertificationQuestions = ({ isLoggedIn }) => {
  const { type } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load questions based on certification type
  useEffect(() => {
    if (type === 'frontend') {
      setQuestions(questionsData.frontend || []);
    } else if (type === 'backend') {
      setQuestions(questionsData.backend || []);
    }

    // Initialize answers object
    const initialAnswers = {};
    (questionsData[type] || []).forEach((q, index) => {
      initialAnswers[index] = '';
    });
    setAnswers(initialAnswers);
  }, [type]);

  // Timer logic
  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }

    const timerId = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [timeLeft]);

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // Handle answer selection
  const handleAnswerChange = (questionIndex, answerValue) => {
    setAnswers((prev) => ({
      ...prev,
      [questionIndex]: answerValue,
    }));
  };

  // Submit test
  const handleSubmit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    
    console.log("Starting submission process...");
  
    // Calculate score
    let correctAnswers = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        correctAnswers++;
      }
    });
  
    const score = (correctAnswers / questions.length) * 100;
    const passed = score >= 70;
  
    // Get user data from localStorage
    const username = localStorage.getItem('username') || 'Unknown User';
    const userId = localStorage.getItem('userId') || 0;
    
    console.log(`User ID: ${userId}, Username: ${username}, Score: ${score}`);
  
    // Create certification data object
    const certificationData = {
      userId,
      username,
      certificationType: type,
      score,
      passed,
      completedAt: new Date().toISOString(),
    };
  
    try {
      console.log('Sending data:', certificationData);
      const response = await fetch('/api/certifications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(certificationData),
      });
  
      console.log('Response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
      }
  
      const data = await response.json();
      console.log('Success response:', data);
  
      // Navigate to result page only if the certification is saved successfully
      navigate('/certification/view', {
        state: {
          score,
          correctAnswers,
          totalQuestions: questions.length,
          certificationType: type,
          certificationId: data.certificationId,
          username,
        },
      });
    } catch (error) {
      console.error('Error saving certification:', error);
      alert(`There was an error saving your certification: ${error.message}. Please try again.`);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="certification-questions-container">
      <NavBar isLoggedIn={isLoggedIn} />
      <div className="questions-header">
        <h1>{type === 'frontend' ? 'Frontend' : 'Backend'} Developer Certification</h1>
        <div className="timer">Time Remaining: {formatTime(timeLeft)}</div>
      </div>

      <div className="questions-list">
        {questions.map((question, index) => (
          <div key={index} className="question-card">
            <h3>Question {index + 1}</h3>
            <p>{question.question}</p>
            <div className="answer-options">
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex} className="option">
                  <input
                    type="radio"
                    id={`q${index}-o${optionIndex}`}
                    name={`question-${index}`}
                    value={option}
                    checked={answers[index] === option}
                    onChange={() => handleAnswerChange(index, option)}
                  />
                  <label htmlFor={`q${index}-o${optionIndex}`}>{option}</label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="questions-footer">
        <button 
          className="submit-btn"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Answers'}
        </button>
      </div>
    </div>
  );
};

export default CertificationQuestions;