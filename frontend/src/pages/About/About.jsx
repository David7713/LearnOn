import React, { useEffect, useState } from 'react';
import './About.css';
import NavBar from '../../components/NavBar/NavBar'
import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';
const About = ({ isLoggedIn }) => {
  const [students, setStudents] = useState(0);
  const [courses, setCourses] = useState(0);
  const [yearsOfExperience, setYearsOfExperience] = useState(0);

  useEffect(() => {
    let studentCount = 0;
    let courseCount = 0;
    let experienceCount = 0;

    const intervalStudents = setInterval(() => {
      if (studentCount < 500) {
        studentCount++;
        setStudents(studentCount);
      } else {
        clearInterval(intervalStudents);
      }
    }, 5); // Speed of student counter

    const intervalCourses = setInterval(() => {
      if (courseCount < 13) {
        courseCount++;
        setCourses(courseCount);
      } else {
        clearInterval(intervalCourses);
      }
    }, 100); // Speed of course counter

    const intervalExperience = setInterval(() => {
      if (experienceCount < 5) {
        experienceCount++;
        setYearsOfExperience(experienceCount);
      } else {
        clearInterval(intervalExperience);
      }
    }, 500); // Speed of experience counter

    return () => {
      clearInterval(intervalStudents);
      clearInterval(intervalCourses);
      clearInterval(intervalExperience);
    };
  }, []);

  return (

    <div className="about-container">
        <NavBar isLoggedIn={isLoggedIn} />
        <Carousel></Carousel>
      {/* About Us Section */}
      <div className="about-section">
        <h2>About Us</h2>
        <p>
          We are a leading platform in the tech education space, empowering the next generation of developers. Our goal is to provide comprehensive, interactive learning experiences that help individuals transform their skills and pursue careers in technology. Whether you're just starting out or looking to enhance your expertise, we offer the tools you need to succeed.
        </p>
      </div>

      {/* Vision Section */}
      <div className="about-section">
        <h2>Our Vision</h2>
        <p>
          Our vision is to make high-quality technology education accessible to everyone, regardless of their background or experience level. We believe in creating an inclusive, collaborative environment that inspires creativity, fosters continuous learning, and equips learners with the skills they need to thrive in the ever-evolving tech industry.
        </p>
      </div>

      {/* Stats Section */}
      <div className="about-section stats">
        <h2>Our Impact</h2>
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-circle">
              <span>{students}</span>
            </div>
            <p>Students Trained</p>
          </div>
          <div className="stat-item">
            <div className="stat-circle">
              <span>{courses}</span>
            </div>
            <p>Courses Offered</p>
          </div>
          <div className="stat-item">
            <div className="stat-circle">
              <span>{yearsOfExperience}</span>
            </div>
            <p>Years of Experience</p>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="about-section">
        <h2>Our Courses</h2>
        <p>
          We offer an extensive range of courses that cover the most sought-after technologies in the industry. From frontend development with React, HTML, CSS, and JavaScript to backend development with Node.js, Python, and more, our courses provide in-depth learning with practical examples and hands-on projects. Stay ahead of the curve with courses that evolve with the latest trends in the tech world.
        </p>
      </div>

      {/* Join the Community Section */}
      <div className="about-section">
        <h2>Join the Community</h2>
        <p>
          Join thousands of students from around the world who are advancing their careers in software development. Our interactive learning platform, expert instructors, and vibrant community of developers will support you every step of the way. Whether you're a beginner or an experienced developer, we have a place for you to grow and connect.
        </p>
        
      </div>
      <Footer></Footer>
    </div>


  );
};

export default About;
