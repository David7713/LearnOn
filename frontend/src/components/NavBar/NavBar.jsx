import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';
import { SiGooglegemini } from "react-icons/si";
import { IoMoon } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { Menu, X } from 'lucide-react';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Reset body overflow when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

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
    // Close mobile menu if it's open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = 'unset';
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  // Handle overlay click
  const handleOverlayClick = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleNavLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = 'unset';
    }
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
      {isMenuOpen && (
        <div 
          className="mobile-overlay" 
          onClick={handleOverlayClick}
        />
      )}
      <div className="navBar-section">
        <div className="logo">
          <Link to="/">Learn <label>On</label></Link>
        </div>
        
        <div className="nav-container">
          {/* Mobile-visible auth buttons and username */}
          <div className="mobile-visible-elements">
            {!isLoggedIn && (
              <div className="mobile-auth-buttons">
                <Link to="/login" className="auth-btn login-btn">Login</Link>
                <Link to="/signup" className="auth-btn signup-btn">SignUp</Link>
              </div>
            )}
            
            {isLoggedIn && (
              <div className="mobile-user-info">
                <span className="username-display">Welcome, {username}</span>
                <button onClick={handleLogout} className="mobile-logout-btn">
                  <CiLogout className='logout-icon' />
                </button>
              </div>
            )}
          </div>
          
          <button 
            className="mobile-menu-button"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/about" onClick={handleNavLinkClick}>About Us</Link></li>
          <li><Link to="/reviews" onClick={handleNavLinkClick}>Reviews</Link></li>
          {!isLoggedIn && (
            // These will only show in desktop view or when mobile menu is open
            <div className="desktop-only-auth">
              <li>
                <Link to="/login" className="auth-btn login-btn" onClick={handleNavLinkClick}>Login</Link>
              </li>
              <li>
                <Link to="/signup" className="auth-btn signup-btn" onClick={handleNavLinkClick}>SignUp</Link>
              </li>
            </div>
          )}
          {isLoggedIn && (
            <>
              <li><Link to="/quiz" onClick={handleNavLinkClick}>Quiz</Link></li>
              <li><Link to="/download" onClick={handleNavLinkClick}>Download</Link></li>
              <li><Link to="/certification" onClick={handleNavLinkClick}>Certification</Link></li>
              <li><Link to="#" onClick={toggleAiPopup}>AI <SiGooglegemini /></Link></li>
              <li><Link to="/video-course" onClick={handleNavLinkClick}>Video Course</Link></li>
              
              {/* Username will display in desktop view or when mobile menu is open */}
              <li className="desktop-only-username">Welcome, {username}</li>
              <li className="desktop-only-logout">
                <button onClick={handleLogout} className="logout-btn">
                  <CiLogout className='logout-icon' />Logout
                </button>
              </li>
            </>
          )}
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