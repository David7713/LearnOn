import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';
import { SiGooglegemini } from "react-icons/si";
import { IoMoon } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";




const API_BASE_URL = 'http://localhost:5000';

const NavBar = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');
  const [showAiPopup, setShowAiPopup] = useState(false);
  const [aiMessages, setAiMessages] = useState([
    { sender: 'ai', text: 'Hello! How can I help you today?' }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    navigate('/');
    window.location.reload();
  };

  const toggleAiPopup = (e) => {
    e.preventDefault();
    setShowAiPopup(!showAiPopup);
  };

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;
    const userMessage = { sender: 'user', text: userInput };
    setAiMessages(prev => [...prev, userMessage]);
    const userMessageText = userInput;
    setUserInput('');
    setIsLoading(true);
    
    try {
      const response = await fetch(`${API_BASE_URL}/api/ai/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessageText }),
      });
      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }
      const data = await response.json();
      setAiMessages(prev => [...prev, { sender: 'ai', text: data.aiResponse || 'No response from AI' }]);
    } catch (error) {
      setAiMessages(prev => [...prev, { sender: 'ai', text: 'Error communicating with AI service' }]);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      <div className="navBar-section">
        <div className="logo">
          <Link to="/">Learn <label>On</label></Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/reviews">Reviews</Link></li>
          {!isLoggedIn && (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">SignUp</Link></li>
            </>
          )}
          {isLoggedIn && (
            <>
              <li><Link to="/quiz">Quiz</Link></li>
              <li><Link to="/download">Download</Link></li>
              <li><Link to="/certification">Certification</Link></li>
              <li><Link to="#" onClick={toggleAiPopup}>AI <SiGooglegemini /></Link></li>
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

      {showAiPopup && (
        <div className="ai-popup">
          <div className="ai-popup-header">
            <h3>AI Assistant <SiGooglegemini /></h3>
            <button onClick={toggleAiPopup} className="close-btn"><IoMdClose /></button>
          </div>
          <div className="ai-popup-content">
            <div className="ai-messages">
              {aiMessages.map((message, index) => (
                <div key={index} className={`${message.sender}-message`}>
                  {message.sender === 'ai' && <SiGooglegemini className="ai-icon" />}
                  <p>{message.text}</p>
                </div>
              ))}
              {isLoading && (
                <div className="ai-message loading">
                  <SiGooglegemini className="ai-icon" />
                  <p>Thinking...</p>
                </div>
              )}
            </div>
            <div className="ai-input-container">
              <input 
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..." 
                className="ai-input"
                disabled={isLoading}
              />
              <button 
                onClick={handleSendMessage} 
                className="ai-send-btn"
                disabled={isLoading || !userInput.trim()}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
