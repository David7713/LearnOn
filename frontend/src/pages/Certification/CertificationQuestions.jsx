import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import certificationQuestions from '../../pages/Certification/questions.json';
import './CertificationQuestions.css';
import NavBar from '../../components/NavBar/NavBar';
import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';

const CertificationQuestions = ({isLoggedIn}) => {
  const { type: course } = useParams();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [timer, setTimer] = useState(15 * 60); // 15 minutes in seconds
  const [answered, setAnswered] = useState(false);
  const [userAnswers, setUserAnswers] = useState({}); // Track user answers
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (course && certificationQuestions[course]) {
      setQuestions(certificationQuestions[course]);
    } else {
      setQuestions([]);
    }

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          alert("Time's up!");
          // Auto-submit or navigate on time expiry
          submitAnswers();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [course]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleAnswer = (questionId, selectedOption) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  };

  const submitCertification = async (courseType) => {
    try {
      setIsSubmitting(true);
      const token = localStorage.getItem('authToken');
      
      if (!token) {
        alert('You must be logged in to get certified');
        navigate('/login');
        return;
      }

      const response = await fetch('http://localhost:5000/api/certifications', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ courseType })
      });

      if (!response.ok) {
        throw new Error(`Failed to save certification: ${response.status}`);
      }

      const data = await response.json();
      console.log("Certification saved:", data);
      
      alert('Congratulations! Your certification has been recorded.');
      navigate('/certification'); // Redirect to certifications page
      
    } catch (error) {
      console.error("Error saving certification:", error);
      alert(`Failed to save certification: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const submitAnswers = () => {
    let correctAnswers = 0;

    questions.forEach((q) => {
      // Compare the user answer with the correct answer
      if (userAnswers[q.id] === q.answer) {
        correctAnswers += 1;
      }
    });

    const percentage = (correctAnswers / questions.length) * 100;

    if (percentage >= 70) {
      alert(`Congratulations, you passed with ${percentage.toFixed(2)}%!`);
      // Save the certification to the database
      submitCertification(course);
    } else {
      alert(`Unfortunately, you did not pass. You scored ${percentage.toFixed(2)}%. Try again!`);
      navigate('/certification'); 
    }

    setAnswered(true);
  };

  if (!course || !certificationQuestions[course]) {
    return <p className="invalid-course">Invalid course selected.</p>;
  }

  return (
    <div className="certification-questions-container">
      <NavBar isLoggedIn={isLoggedIn} />
      <Carousel></Carousel>
      <h1 className="certification-title">
        {course.charAt(0).toUpperCase() + course.slice(1)} Certification Exam
      </h1>
      <div className="timer-container">
        <p className="timer">Time Remaining: <span className="time">{formatTime(timer)}</span></p>
      </div>

      <div className="questions-list">
        {questions.map((q) => (
          <div key={q.id} className="question-card">
            <h3 className="question-text">{q.question}</h3>
            <div className="options-container">
              {q.options.map((option, index) => (
                <div key={index} className="option">
                  <input
                    type="radio"
                    id={`${q.id}-${index}`}
                    name={`question-${q.id}`}
                    value={option}
                    disabled={answered || isSubmitting}
                    onClick={() => handleAnswer(q.id, option)}
                    className="option-input"
                  />
                  <label htmlFor={`${q.id}-${index}`} className="option-label">{option}</label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {!answered && (
        <div className="submit-container">
          <button 
            onClick={submitAnswers} 
            disabled={isSubmitting}
            className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Answers'}
          </button>
        </div>
      )}
    </div>
  );
};

export default CertificationQuestions;