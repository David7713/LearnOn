import React, { useState } from 'react';
import { topicsDataPython } from './topicsDataPython'; // Import Python topics data
import './Python.css'; // Import CSS for styling
import NavBar from '../../../components/NavBar/NavBar'; // Assuming you want the same Navbar
import Footer from '../../../components/Footer/Footer';
import { FaAngleLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Carousel from '../../../components/Carousel/Carousel';
const Python = () => {
  const [selectedTopicId, setSelectedTopicId] = useState(1); // Default topic is the first one

  const handleTopicClick = (id) => {
    setSelectedTopicId(id);
  };

  const handleNextClick = () => {
    const currentIndex = topicsDataPython.findIndex((topic) => topic.id === selectedTopicId);
    const nextIndex = (currentIndex + 1) % topicsDataPython.length;
    setSelectedTopicId(topicsDataPython[nextIndex].id);
  };

  const handlePreviousClick = () => {
    const currentIndex = topicsDataPython.findIndex((topic) => topic.id === selectedTopicId);
    const previousIndex = (currentIndex - 1 + topicsDataPython.length) % topicsDataPython.length;
    setSelectedTopicId(topicsDataPython[previousIndex].id);
  };

  const selectedTopic = topicsDataPython.find((topic) => topic.id === selectedTopicId);

  return (
    <>
      <NavBar />
      <Carousel />
      <div className="python-container">
        <div className="topics-list">
          {topicsDataPython.map((topic) => (
            <button
              key={topic.id}
              className={`topic-item ${selectedTopicId === topic.id ? 'active' : ''}`}
              onClick={() => handleTopicClick(topic.id)}
            >
              {topic.name}
            </button>
          ))}
        </div>
        <div className="topic-content">
          <h2>{selectedTopic?.name}</h2>
          <Link to="/">
            <button>
              <FaAngleLeft /> Home
            </button>
          </Link>
          <p>{selectedTopic?.content}</p>
          <div className="navigation-buttons">
            <button onClick={handlePreviousClick}>
              <FaAngleLeft /> Previous
            </button>
            <button onClick={handleNextClick}>
              Next &ensp; <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Python;
