import React, { useState } from 'react';
import { javascriptTopics } from './topicsDataJavaScript'; // Import JavaScript topics data
import './JavaScript.css'; // Import CSS for styling
import NavBar from '../../../components/NavBar/NavBar'; // Assuming you want the same Navbar
import Carousel from '../../../components/Carousel/Carousel';
import Footer from '../../../components/Footer/Footer';
import { FaAngleLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";

const Javascript = () => {
  const [selectedTopicId, setSelectedTopicId] = useState(1); // Default topic is the first one

  const handleTopicClick = (id) => {
    setSelectedTopicId(id);
  };

  const handleNextClick = () => {
    const currentIndex = javascriptTopics.findIndex((topic) => topic.id === selectedTopicId);
    const nextIndex = (currentIndex + 1) % javascriptTopics.length;
    setSelectedTopicId(javascriptTopics[nextIndex].id);
  };

  const handlePreviousClick = () => {
    const currentIndex = javascriptTopics.findIndex((topic) => topic.id === selectedTopicId);
    const previousIndex = (currentIndex - 1 + javascriptTopics.length) % javascriptTopics.length;
    setSelectedTopicId(javascriptTopics[previousIndex].id);
  };

  const selectedTopic = javascriptTopics.find((topic) => topic.id === selectedTopicId);

  return (
    <>
          <NavBar />
          <Carousel />
      <NavBar />
      <div className="javascript-container">
        <div className="topics-list">
          {javascriptTopics.map((topic) => (
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

export default Javascript;
