import React from 'react';
import './VideoCourse.css'; // Import CSS for styling
import NavBar from '../../components/NavBar/NavBar';
import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';

const videoCourses = [
  { name: 'HTML', src: 'https://www.youtube.com/embed/kUMe1FH4CHE' },
  { name: 'JavaScript', src: 'https://www.youtube.com/embed/Zi-Q0t4gMC8' },
  { name: 'React', src: 'https://www.youtube.com/embed/SqcY0GlETPk' },
  { name: 'CSS', src: 'https://www.youtube.com/embed/OXGznpKZ_sA' },
  { name: 'TypeScript', src: 'https://www.youtube.com/embed/SpwzRDUQ1GI' },
  { name: 'Node', src: 'https://www.youtube.com/embed/32M1al-Y6Ag' },
  { name: 'MySQL', src: 'https://www.youtube.com/embed/7S_tz1z_5bA' },
  { name: 'Git', src: 'https://www.youtube.com/embed/zTjRZNkhiEU' },
  { name: 'GitHub', src: 'https://www.youtube.com/embed/RGOj5yH7evk' },
  { name: 'Tailwind', src: 'https://www.youtube.com/embed/lCxcTsOHrjo' },
  { name: 'C++', src: 'https://www.youtube.com/embed/1v_4dL8l8pQ' },
  { name: 'PHP', src: 'https://www.youtube.com/embed/zZ6vybT1HQs' },
  { name: 'Python', src: 'https://www.youtube.com/embed/eWRfhZUzrAc' },
];


const VideoCourse = () => {
  return (
    <div className="video-course-container">
      <NavBar />
      <Carousel />
      <h1>Programming Video Courses</h1>
      <p>Select a language to watch its video tutorial directly here!</p>
      <div className="videos-grid">
        {videoCourses.map((course) => (
          <div className="video-card" key={course.name}>
            <h2>{course.name}</h2>
            <iframe
              width="100%"
              height="315"
              src={course.src}
              title={course.name}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default VideoCourse;
