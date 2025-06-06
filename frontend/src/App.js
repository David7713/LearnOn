import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Download from './pages/Download/Download';
import Certification from './pages/Certification/Certification';
import CertificationQuestions from './pages/Certification/CertificationQuestions';
import CertificationView from './pages/Certification/CertificationView';
import AI from './pages/AI/Ai';
import VideoCourse from './pages/VideoCourse/VideoCourse';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Reviews from './pages/Reviews/Reviews';

// Import the language/topic components
import Html from './pages/Languages/HTML/Html';
import Css from './pages/Languages/CSS/Css';
import JavaScript from './pages/Languages/JAVASCRIPT/JavaScript';
import ReactPage from './pages/Languages/REACT/ReactPage'; 
import TypeScript from './pages/Languages/TYPESCRIPT/TypeScript';
import Node from './pages/Languages/NODE/Node';
import MySQL from './pages/Languages/MYSQL/MySQL';
import Git from './pages/Languages/GIT/Git';
import GitHub from './pages/Languages/GITHUB/GitHub';
import Tailwind from './pages/Languages/TAILWIND/Tailwind';
import CPlusPlus from './pages/Languages/CPlusPlus/CPlusPlus';
import Php from './pages/Languages/PHP/Php';
import Python from './pages/Languages/PYTHON/Python';

import { ClimbingBoxLoader } from 'react-spinners'; // Import the loader
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Initialize isLoggedIn state based on localStorage
  useEffect(() => {
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    if (storedLoginStatus === 'true') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }

    setLoading(false);  // Finish loading state
  }, []);

  // Protected route component to check authentication status
  const ProtectedRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" />;
  };

  // Function to update logged in state - pass this down to components that need it
  const updateLoginState = (value) => {
    setIsLoggedIn(value);
    localStorage.setItem('isLoggedIn', value.toString());
  };

  return (
    <Router>
      {loading ? (
        <div className="loader-container">
          <ClimbingBoxLoader
            color="#7a1da1"
            cssOverride={{}}
            size={20}
            speedMultiplier={2}
          />
        </div>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />

            {/* Protected routes */}
            <Route path="/quiz" element={<ProtectedRoute><Quiz isLoggedIn={isLoggedIn} /></ProtectedRoute>} />
            <Route path="/quiz/:category" element={<ProtectedRoute><Quiz isLoggedIn={isLoggedIn} /></ProtectedRoute>} />
            <Route path="/download" element={<ProtectedRoute><Download isLoggedIn={isLoggedIn} /></ProtectedRoute>} />
            {/* Certification routes */}
            <Route path="/certification" element={<ProtectedRoute><Certification isLoggedIn={isLoggedIn} /></ProtectedRoute>} />
            <Route path="/certification/questions/:type" element={<ProtectedRoute><CertificationQuestions isLoggedIn={isLoggedIn} /></ProtectedRoute>} />
            <Route path="/ai-chat" element={<ProtectedRoute><AI isLoggedIn={isLoggedIn} /></ProtectedRoute>} />
            <Route path="/video-course" element={<ProtectedRoute><VideoCourse isLoggedIn={isLoggedIn} /></ProtectedRoute>} />
            {/* Public routes */}
            <Route path="/login" element={<Login setIsLoggedIn={updateLoginState} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/about" element={<About isLoggedIn={isLoggedIn} />} />
            <Route path="/reviews" element={<Reviews isLoggedIn={isLoggedIn} />} />
            {/* Language routes */}
            <Route path="/languages/html" element={<Html isLoggedIn={isLoggedIn} />} />
            <Route path="/languages/css" element={<Css isLoggedIn={isLoggedIn} />} />
            <Route path="/languages/javascript" element={<JavaScript isLoggedIn={isLoggedIn} />} />
            <Route path="/languages/react" element={<ReactPage isLoggedIn={isLoggedIn} />} />
            <Route path="/languages/typescript" element={<TypeScript isLoggedIn={isLoggedIn} />} />
            <Route path="/languages/node" element={<Node isLoggedIn={isLoggedIn} />} />
            <Route path="/languages/mysql" element={<MySQL isLoggedIn={isLoggedIn} />} />
            <Route path="/languages/git" element={<Git isLoggedIn={isLoggedIn} />} />
            <Route path="/languages/github" element={<GitHub isLoggedIn={isLoggedIn} />} />
            <Route path="/languages/tailwind" element={<Tailwind isLoggedIn={isLoggedIn} />} />
            <Route path="/languages/cplusplus" element={<CPlusPlus isLoggedIn={isLoggedIn} />} />
            <Route path="/languages/php" element={<Php isLoggedIn={isLoggedIn} />} />
            <Route path="/languages/python" element={<Python isLoggedIn={isLoggedIn} />} />
          </Routes>
        </>
      )}
    </Router>
  );
};

export default App;
