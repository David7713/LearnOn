import React, { useState } from 'react';
import { topicsDataGit } from './topicsDataGit'; // Import Git topics data
import './Git.css'; // Import CSS for styling
import NavBar from '../../../components/NavBar/NavBar'; // Assuming you want the same Navbar
import Footer from '../../../components/Footer/Footer';
import { FaAngleLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Carousel from '../../../components/Carousel/Carousel';
const Git = () => {
  const [selectedTopicId, setSelectedTopicId] = useState(1); // Default topic is the first one

  const handleTopicClick = (id) => {
    setSelectedTopicId(id);
  };

  const handleNextClick = () => {
    const currentIndex = topicsDataGit.findIndex((topic) => topic.id === selectedTopicId);
    const nextIndex = (currentIndex + 1) % topicsDataGit.length;
    setSelectedTopicId(topicsDataGit[nextIndex].id);
  };

  const handlePreviousClick = () => {
    const currentIndex = topicsDataGit.findIndex((topic) => topic.id === selectedTopicId);
    const previousIndex = (currentIndex - 1 + topicsDataGit.length) % topicsDataGit.length;
    setSelectedTopicId(topicsDataGit[previousIndex].id);
  };

  const selectedTopic = topicsDataGit.find((topic) => topic.id === selectedTopicId);

  return (
    <>
      <NavBar />
      <Carousel />
      <div className="git-container">
        <div className="topics-list">
          {topicsDataGit.map((topic) => (
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

export default Git;
