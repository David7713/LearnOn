import React from 'react';
import { Link } from 'react-router-dom';
import './Carousel.css';

const Carousel = () => {
  const languages = [
    { name: 'HTML', path: '/Languages/html' },
    { name: 'CSS', path: '/Languages/css' },
    { name: 'JavaScript', path: '/Languages/javascript' },
    { name: 'React', path: '/Languages/react' },
    { name: 'TypeScript', path: '/Languages/typescript' },
    { name: 'Node', path: '/Languages/node' },
    { name: 'MySQL', path: '/Languages/mysql' },
    { name: 'Git', path: '/Languages/git' },
    { name: 'GitHub', path: '/Languages/github' },
    { name: 'Tailwind', path: '/Languages/tailwind' },
    { name: 'C++', path: '/Languages/cplusplus' },
    { name: 'PHP', path: '/Languages/php' },
    { name: 'HTML', path: '/Languages/html' },
    { name: 'CSS', path: '/Languages/css' },
    { name: 'JavaScript', path: '/Languages/javascript' },
    { name: 'React', path: '/Languages/react' },
    { name: 'TypeScript', path: '/Languages/typescript' },
    { name: 'Node', path: '/Languages/node' },
    { name: 'MySQL', path: '/Languages/mysql' },
    { name: 'Git', path: '/Languages/git' },
    { name: 'GitHub', path: '/Languages/github' },
    { name: 'Tailwind', path: '/Languages/tailwind' },
    { name: 'C++', path: '/Languages/cplusplus' },
    { name: 'HTML', path: '/Languages/html' },
    { name: 'CSS', path: '/Languages/css' },
    { name: 'Python', path: '/Languages/python' },
    { name: 'JavaScript', path: '/Languages/javascript' },
    { name: 'React', path: '/Languages/react' },
    { name: 'TypeScript', path: '/Languages/typescript' },
    { name: 'Node', path: '/Languages/node' },
    { name: 'MySQL', path: '/Languages/mysql' },
    { name: 'Git', path: '/Languages/git' },
    { name: 'GitHub', path: '/Languages/github' },
    { name: 'Tailwind', path: '/Languages/tailwind' },
    { name: 'C++', path: '/Languages/cplusplus' },
    { name: 'Python', path: '/Languages/python' },
  ];

  return (
    <div className="carousel-section">
      <ul>
        {languages.map((lang, index) => (
          <li key={index}>
            <Link to={lang.path}>{lang.name}</Link>
          </li>
        ))}
        {languages.map((lang, index) => (
          <li key={`duplicate-${index}`}>
            <Link to={lang.path}>{lang.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
