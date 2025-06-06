import React, { useState } from 'react';
import { topics } from './topicsDataHtml'; // Import data
import './Html.css'
import NavBar from '../../../components/NavBar/NavBar';
import Carousel from '../../../components/Carousel/Carousel';
import { Link } from 'react-router-dom';
import Footer from '../../../components/Footer/Footer';
import { FaAngleRight } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

import { FaAngleLeft } from "react-icons/fa6";

const Html = ({ isLoggedIn }) => {
  const [selectedTopicId, setSelectedTopicId] = useState(1);

  const handleTopicClick = (id) => {
    setSelectedTopicId(id);
  };
  const handleNextClick = () => {
    // Get the index of the current topic
    const currentIndex = topics.findIndex((topic) => topic.id === selectedTopicId);
    // Get the next topic index, wrapping around if we reach the end
    const nextIndex = (currentIndex + 1) % topics.length;
    setSelectedTopicId(topics[nextIndex].id);
  };
  const handlePreviousClick = () => {
    // Get the index of the current topic
    const currentIndex = topics.findIndex((topic) => topic.id === selectedTopicId);
    // Get the previous topic index, wrapping around if we reach the beginning
    const previousIndex = (currentIndex - 1 + topics.length) % topics.length;
    setSelectedTopicId(topics[previousIndex].id);
  };
  const selectedTopic = topics.find((topic) => topic.id === selectedTopicId);
  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} />
      <Carousel />
      <div className="html-container">
        <div className="topics-list">
          {topics.map((topic) => (
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
            <button onClick={handlePreviousClick}>               <FaAngleLeft />Previous</button>
            <button onClick={handleNextClick}>Next &ensp; <FaChevronRight/></button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Html;
