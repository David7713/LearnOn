import React, { useState } from 'react';
import { topicsDataMysql } from './topicsDataMysql'; // Import MySQL topics data
import './MySQL.css'; // Import CSS for styling
import NavBar from '../../../components/NavBar/NavBar'; // Assuming you want the same Navbar
import Footer from '../../../components/Footer/Footer';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from "react-icons/fa";
import { FaChevronRight } from 'react-icons/fa';
import Carousel from '../../../components/Carousel/Carousel';
import { Link } from 'react-router-dom';
const Mysql = ({ isLoggedIn }) => {
  const [selectedTopicId, setSelectedTopicId] = useState(1); // Default topic is the first one

  const handleTopicClick = (id) => {
    setSelectedTopicId(id);
  };

  const handleNextClick = () => {
    const currentIndex = topicsDataMysql.findIndex((topic) => topic.id === selectedTopicId);
    const nextIndex = (currentIndex + 1) % topicsDataMysql.length;
    setSelectedTopicId(topicsDataMysql[nextIndex].id);
  };

  const handlePreviousClick = () => {
    const currentIndex = topicsDataMysql.findIndex((topic) => topic.id === selectedTopicId);
    const previousIndex = (currentIndex - 1 + topicsDataMysql.length) % topicsDataMysql.length;
    setSelectedTopicId(topicsDataMysql[previousIndex].id);
  };

  const selectedTopic = topicsDataMysql.find((topic) => topic.id === selectedTopicId);

  return (
    <>
   <NavBar isLoggedIn={isLoggedIn} />
      <Carousel />
      <div className="mysql-container">
        <div className="topics-list">
          {topicsDataMysql.map((topic) => (
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

export default Mysql;
