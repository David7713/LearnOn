import React from 'react';
import './Reviews.css';
import image1 from '../Reviews/Reviews-assets/john.jpeg'
import image2 from '../Reviews/Reviews-assets/aria.jpeg'
import image3 from '../Reviews/Reviews-assets/adrian.jpeg'
import image4 from '../Reviews/Reviews-assets/merry.jpg'
import image5 from '../Reviews/Reviews-assets/zoe.jpg'
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
      name: 'Aria Hayes',
      profession: 'Full Stack Developer',
      city: 'London',
      comment: 'The full stack course was perfectly structured. I loved the mix of theory and hands-on practice.',
      image: image2
    },
    {
      name: 'Adrian Carter',
      profession: 'Backend Developer',
      city: 'Toronto',
      comment: 'Excellent backend tutorials. The Node.js section gave me a solid foundation for my current job.',
      image: image3
    },
    {
      name: 'Marry Morgan',
      profession: 'Database Developer',
      city: 'Amsterdam',
      comment: 'The SQL and database design sections were top-notch. I now feel confident managing complex data systems.',
      image: image4
    },
    {
      name: 'Zoe Harris',
      profession: 'Software Engineer',
      city: 'Sydney',
      comment: 'This platform is a great resource. The quizzes helped me retain what I learned through coding challenges.',
      image: image5
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
