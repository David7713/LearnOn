import React, { useState } from 'react';
import { SiGooglegemini } from "react-icons/si";
import './Ai.css'; // You'll need to create this file with appropriate styles

// Set the base URL for API calls
const API_BASE_URL = 'http://localhost:5000'; // Adjust this to match your backend server

const Ai = () => {
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Hello! How can I help you today?' }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;
    
    // Add user message
    const userMessage = { sender: 'user', text: userInput };
    setMessages(prev => [...prev, userMessage]);
    
    // Clear input and set loading state
    const userMessageText = userInput;
    setUserInput('');
    setIsLoading(true);
    
    // Call the backend API for AI response
    try {
      console.log('Making API request to:', `${API_BASE_URL}/api/ai/chat`);
      
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
      console.log('API response:', data);
  
      // Add AI response with the correct property from your backend
      setMessages(prev => [
        ...prev, 
        { sender: 'ai', text: data.aiResponse || 'No response from AI' }
      ]);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      setMessages(prev => [
        ...prev, 
        { sender: 'ai', text: 'Error communicating with AI service' }
      ]);
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
    <div className="ai-page-container">
      <h1>AI Assistant</h1>
      <div className="ai-chat-container">
        <div className="ai-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}-message`}>
              {message.sender === 'ai' && <SiGooglegemini className="ai-icon" />}
              <p>{message.text}</p>
            </div>
          ))}
          {isLoading && (
            <div className="message ai-message loading">
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
  );
};

export default Ai;