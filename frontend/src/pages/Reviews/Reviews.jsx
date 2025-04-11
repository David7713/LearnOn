import React from 'react';
import './Reviews.css';
import image1 from '../Reviews/Reviews-assets/john.jpeg'
import NavBar from '../../components/NavBar/NavBar'
import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';
const Reviews = ({ isLoggedIn }) => {
  const reviews = [
    {
      name: 'John Doe',
      profession: 'Frontend Developer',
      city: 'New York',
      comment: 'This platform helped me learn React and build my first web app. Highly recommended!',
      image: image1
    },
    {
      name: 'Jane Smith',
      profession: 'Backend Developer',
      city: 'London',
      comment: 'The backend tutorials were very comprehensive, and the quizzes helped solidify my knowledge.',
      image: image1
    },
    ,
    {
      name: 'Jane Smith',
      profession: 'Backend Developer',
      city: 'London',
      comment: 'The backend tutorials were very comprehensive, and the quizzes helped solidify my knowledge.',
      image: image1
    },
    ,
    {
      name: 'Jane Smith',
      profession: 'Backend Developer',
      city: 'London',
      comment: 'The backend tutorials were very comprehensive, and the quizzes helped solidify my knowledge.',
      image: image1
    },
    ,
    {
      name: 'Jane Smith',
      profession: 'Backend Developer',
      city: 'London',
      comment: 'The backend tutorials were very comprehensive, and the quizzes helped solidify my knowledge.',
      image: image1
    },
    // Add more reviews here
  ];

  return (
    <div className="reviews-container">
      <NavBar isLoggedIn={isLoggedIn} />
      <Carousel></Carousel>
      {reviews.map((review, index) => (
        <div key={index} className="review-card">
          {/* Left side: Image */}
          <div>
            <img
              src={review.image}
              alt={review.name}
            />
          </div>

          {/* Right side: Text */}
          <div>
            <h4>{review.name}</h4>
            <p>{review.profession}</p>
            <p>{review.city}</p>
            <p className="comment">"{review.comment}"</p>
          </div>
        </div>
      ))}
      <Footer></Footer>
    </div>
  );
};

export default Reviews;
