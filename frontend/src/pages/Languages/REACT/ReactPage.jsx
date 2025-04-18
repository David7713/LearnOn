import React, { useState } from 'react';
import { topicsDataReact } from './topicsDataReact'; // Import React topics data
import './ReactPage.css'; // Import CSS for styling
import NavBar from '../../../components/NavBar/NavBar'; // Assuming you want the same Navbar
import Footer from '../../../components/Footer/Footer';
import { FaAngleLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import Carousel from '../../../components/Carousel/Carousel';
import { Link } from 'react-router-dom';
const ReactPage = () => {
  const [selectedTopicId, setSelectedTopicId] = useState(1); // Default topic is the first one

  const handleTopicClick = (id) => {
    setSelectedTopicId(id);
  };

  const handleNextClick = () => {
    const currentIndex = topicsDataReact.findIndex((topic) => topic.id === selectedTopicId);
    const nextIndex = (currentIndex + 1) % topicsDataReact.length;
    setSelectedTopicId(topicsDataReact[nextIndex].id);
  };

  const handlePreviousClick = () => {
    const currentIndex = topicsDataReact.findIndex((topic) => topic.id === selectedTopicId);
    const previousIndex = (currentIndex - 1 + topicsDataReact.length) % topicsDataReact.length;
    setSelectedTopicId(topicsDataReact[previousIndex].id);
  };

  const selectedTopic = topicsDataReact.find((topic) => topic.id === selectedTopicId);

  return (
    <>

      <NavBar />
      <Carousel />
      <div className="react-container">
        <div className="topics-list">
          {topicsDataReact.map((topic) => (
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

export default ReactPage;
