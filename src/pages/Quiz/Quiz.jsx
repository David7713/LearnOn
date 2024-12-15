import React, { useState, useEffect } from 'react';
import { quizData } from '../Quiz/quizData';
import './Quiz.css';
import NavBar from '../../components/NavBar/NavBar';
import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import { useParams } from 'react-router-dom';

const Quiz = () => {
  const { category } = useParams(); // Get the category from the URL
  useEffect(() => {
    if (category && quizData[category]) {
      startQuiz(category); // Initialize the quiz for the selected category
    }
  }, [category]);
  const [quizCategory, setQuizCategory] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [reviewMode, setReviewMode] = useState(false);
  const [timer, setTimer] = useState(300); // 5 minutes (in seconds)

  useEffect(() => {
    let timerInterval;

    if (quizCategory && currentQuestionIndex < quizData[quizCategory].length && !reviewMode) {
      setTimer(300); // Reset timer for each question
      timerInterval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(timerInterval);
            handleNextQuestion();
            return 0;
          }
          return prev - 1;
        });
      }, 1000); // Decrease timer by 1 every second
    }

    return () => {
      clearInterval(timerInterval); // Cleanup interval on unmount or when a new question is shown
    };
  }, [currentQuestionIndex, quizCategory, reviewMode]);

  const startQuiz = (category) => {
    setQuizCategory(category);
    setStartTime(Date.now());
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setSelectedAnswer('');
    setUserAnswers([]);
    setEndTime(null);
    setReviewMode(false);
  };

  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleNextQuestion = () => {
    const currentQuestion = quizData[quizCategory][currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    setUserAnswers((prev) => [
      ...prev,
      { question: currentQuestion, selectedAnswer, isCorrect },
    ]);

    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
    }

    setSelectedAnswer('');
    if (currentQuestionIndex < quizData[quizCategory].length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setEndTime(Date.now());
    }
  };

  const handleReviewMode = () => {
    setReviewMode(true);
    setCurrentQuestionIndex(0);
  };

  const handlePrevQuestion = () => {
    setCurrentQuestionIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNextReview = () => {
    setCurrentQuestionIndex((prev) =>
      Math.min(userAnswers.length - 1, prev + 1)
    );
  };

  const timeSpent = () => {
    if (startTime && endTime) {
      const totalSeconds = Math.floor((endTime - startTime) / 1000);
  
      if (totalSeconds >= 60) {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes} minutes and ${seconds} seconds`;
      }
      return `${totalSeconds} seconds`;
    }
    return '0 seconds';
  };
  
  // Render method for category selection
  const renderCategorySelection = () => (
    <div className="quiz-page">
      <NavBar />
      <Carousel />
      <div className="quiz-category-selection">
        <h2>Select a Quiz</h2>
        {Object.keys(quizData).map((category) => (
          <Link
            key={category}
            to={`/quiz/${category}`} // Generate dynamic links
            className="quiz-category-button"
            onClick={() => startQuiz(category)} // Set up the quiz category on click
          >
            {category.charAt(0).toUpperCase() + category.slice(1)} Quiz
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
  // Render method for quiz results
  const renderQuizResults = () => (
    <div className="quiz-page">
      <NavBar />
      <div className="quiz-content quiz-results-container">
        <h2>Quiz Completed!</h2>
        <p>Category: {quizCategory}</p>
        <p>Time Spent: {timeSpent()}</p>
        <p>
          Correct Answers: {correctAnswers} / {quizData[quizCategory].length}
        </p>
        <button 
          onClick={handleReviewMode} 
          className="quiz-review-button"
        >
          Review Answers
        </button>
        <button 
          onClick={() => setQuizCategory(null)} 
          className="quiz-review-button"
        >
          Start Over
        </button>
      </div>
      <Footer />
    </div>
  );

  // Render method for review mode
  const renderReviewMode = () => {
    const reviewQuestion = userAnswers[currentQuestionIndex];
    const { question, selectedAnswer, isCorrect } = reviewQuestion;

    return (
      <div className="quiz-page">
        <NavBar />
        <div className="quiz-content quiz-question-container">
          <h2>Review: {quizCategory} Quiz</h2>
          <h3 className="quiz-question-title">{question.text}</h3>
          <div>
            {question.options.map((option) => (
              <label
                key={option.id}
                className={`quiz-answer-label ${
                  option.id === question.correctAnswer
                    ? 'quiz-review-label-correct'
                    : option.id === selectedAnswer && !isCorrect
                    ? 'quiz-review-label-incorrect'
                    : 'quiz-review-label'
                }`}
              >
                <input
                  type="radio"
                  value={option.id}
                  className="quiz-answer-input"
                  disabled
                  checked={selectedAnswer === option.id}
                />
                {option.text}
              </label>
            ))}
          </div>
          <div>
            <button 
              onClick={handlePrevQuestion} 
              disabled={currentQuestionIndex === 0}
              className="quiz-review-button"
            >
              Previous
            </button>
            <button
              onClick={handleNextReview}
              disabled={currentQuestionIndex === userAnswers.length - 1}
              className="quiz-review-button"
            >
              Next
            </button>
          </div>
          <button 
            onClick={() => setQuizCategory(null)}
            className="quiz-review-button"
          >
            Start Over
          </button>
        </div>
        <Footer />
      </div>
    );
  };

  // Render method for active quiz
  const renderActiveQuiz = () => {
    const currentQuestion = quizData[quizCategory][currentQuestionIndex];

    return (
      <div className="quiz-page">
        <NavBar />
        <Carousel />
        <div className="quiz-content quiz-question-container">
          <h2 className="quiz-question-title">{quizCategory} Quiz</h2>
          <h3 className="quiz-question-title">{currentQuestion.text}</h3>
          <div>
            {currentQuestion.options.map((option) => (
              <label 
                key={option.id} 
                className="quiz-answer-label"
              >
                <input
                  type="radio"
                  value={option.id}
                  className="quiz-answer-input"
                  checked={selectedAnswer === option.id}
                  onChange={handleAnswerChange}
                />
                {option.text}
              </label>
            ))}
          </div>
          <div className="quiz-timer">
            <p>Time Left: {Math.floor(timer / 60)}:{timer % 60}</p>
          </div>
          <button 
            onClick={handleNextQuestion} 
            disabled={!selectedAnswer}
            className="quiz-next-button"
          >
            {currentQuestionIndex === quizData[quizCategory].length - 1
              ? 'Finish Quiz'
              : 'Next Question'}
          </button>
        </div>
        <Footer />
      </div>
    );
  };

  // Main render logic
  if (!quizCategory) return renderCategorySelection();
  if (endTime && !reviewMode) return renderQuizResults();
  if (reviewMode) return renderReviewMode();
  return renderActiveQuiz();
};

export default Quiz;
