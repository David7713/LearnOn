import React from 'react';
import './Reviews.css'; // Import CSS for styling
import NavBar from '../../components/NavBar/NavBar';
import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';
const reviewsData = [
  {
    name: 'John Doe',
    course: 'Python Beginner',
    testimonial: 'LearnOn has transformed the way I learn programming. The courses are engaging and easy to follow!',
    rating: 5,
    image: 'john_doe.jpg',
  },
  {
    name: 'Jane Smith',
    course: 'JavaScript Advanced',
    testimonial: 'I never thought coding could be so fun. LearnOn makes it so easy to start, even as a complete beginner.',
    rating: 4,
    image: 'jane_smith.jpg',
  },
  {
    name: 'Emily Johnson',
    course: 'Data Science Mastery',
    testimonial: 'The Data Science course provided in-depth knowledge and practical skills. Highly recommend!',
    rating: 5,
    image: 'emily_johnson.jpg',
  },
  {
    name: 'Michael Brown',
    course: 'Web Development Bootcamp',
    testimonial: 'The hands-on projects and expert guidance helped me land my first web development job.',
    rating: 4,
    image: 'michael_brown.jpg',
  },
];

const Reviews = ({isLoggedIn}) => {
  return (
    <div className="reviews-container">
      <NavBar isLoggedIn={isLoggedIn} />
      <Carousel></Carousel>
      <h1>Student Reviews</h1>
      <p>Discover how LearnOn has empowered our students!</p>
      <div className="reviews-cards">
        {reviewsData.map((review, index) => (
          <div className="review-card" key={index}>
            <img
              src={`/images/reviewers/${review.image}`} // Ensure images are stored in the 'public/images/reviewers' directory
              alt={review.name}
              className="reviewer-image"
            />
            <div className="review-text">
              <p className="testimonial">"{review.testimonial}"</p>
              <div className="reviewer-info">
                <span className="reviewer-name">{review.name}</span>
                <span className="reviewer-course">{review.course}</span>
                <div className="reviewer-rating">
                  {Array.from({ length: review.rating }, (_, i) => (
                    <span key={i} className="star filled">★</span>
                  ))}
                  {Array.from({ length: 5 - review.rating }, (_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
