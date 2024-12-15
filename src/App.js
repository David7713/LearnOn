import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Download from './pages/Download/Download';
import Certification from './pages/Certification/Certification';
import AI from './pages/AI/Ai';
import VideoCourse from './pages/VideoCourse/VideoCourse';
import Login from './pages/Login/Login';
import Footer from './components/Footer/Footer';

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

  // Simulate loading delay
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000);
  }, []);

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
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/quiz/:category" element={<Quiz />} />
            <Route path="/download" element={<Download />} />
            <Route path="/certification" element={<Certification />} />
            <Route path="/ai-chat" element={<AI />} />
            <Route path="/video-course" element={<VideoCourse />} />
            <Route path="/login" element={<Login />} />

            {/* Add new routes for individual languages/topics */}
            <Route path="/languages/html" element={<Html />} />
            <Route path="/languages/css" element={<Css />} />
            <Route path="/languages/javascript" element={<JavaScript />} />
            <Route path="/languages/react" element={<ReactPage />} />
            <Route path="/languages/typescript" element={<TypeScript />} />
            <Route path="/languages/node" element={<Node />} />
            <Route path="/languages/mysql" element={<MySQL />} />
            <Route path="/languages/git" element={<Git />} />
            <Route path="/languages/github" element={<GitHub />} />
            <Route path="/languages/tailwind" element={<Tailwind />} />
            <Route path="/languages/cplusplus" element={<CPlusPlus />} />
            <Route path="/languages/php" element={<Php />} />
            <Route path="/languages/python" element={<Python />} />
          </Routes>
   
        </>
      )}
    </Router>
  );
};

export default App;
