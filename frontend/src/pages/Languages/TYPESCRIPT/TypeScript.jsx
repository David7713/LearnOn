import React, { useState } from 'react';
import { topicsDataTypescript } from './topicsDataTypescript'; // Import TypeScript topics data
import './TypeScript.css'; // Import CSS for styling
import NavBar from '../../../components/NavBar/NavBar'; // Assuming you want the same Navbar
import Footer from '../../../components/Footer/Footer';
import { FaAngleLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import Carousel from '../../../components/Carousel/Carousel';
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Typescript = ({ isLoggedIn }) => {
  const [selectedTopicId, setSelectedTopicId] = useState(1); // Default topic is the first one

  const handleTopicClick = (id) => {
    setSelectedTopicId(id);
  };

  const handleNextClick = () => {
    const currentIndex = topicsDataTypescript.findIndex((topic) => topic.id === selectedTopicId);
    const nextIndex = (currentIndex + 1) % topicsDataTypescript.length;
    setSelectedTopicId(topicsDataTypescript[nextIndex].id);
  };

  const handlePreviousClick = () => {
    const currentIndex = topicsDataTypescript.findIndex((topic) => topic.id === selectedTopicId);
    const previousIndex = (currentIndex - 1 + topicsDataTypescript.length) % topicsDataTypescript.length;
    setSelectedTopicId(topicsDataTypescript[previousIndex].id);
  };

  const selectedTopic = topicsDataTypescript.find((topic) => topic.id === selectedTopicId);

  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} />
      <Carousel />
      <div className="typescript-container">
        <div className="topics-list">
          {topicsDataTypescript.map((topic) => (
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

export default Typescript;
