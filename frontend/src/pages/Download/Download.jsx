import React from 'react';
import './Download.css'; // Import CSS for styling
import NavBar from '../../components/NavBar/NavBar';
import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';

import htmlImage from '../Download/book covers/html.jpg'
import cssImage from '../Download/book covers/css.jpeg'
import jsImage from '../Download/book covers/js.jpg'
import reactImage from '../Download/book covers/react.jpg'
import tsImage from '../Download/book covers/ts.jpg'
import nodeImage from '../Download/book covers/node.jpeg'
import mysqlImage from '../Download/book covers/mysql.jpg'
import cppImage from '../Download/book covers/cplusplus.jpg'
import pythonImage from '../Download/book covers/pyhton.jpg'
import phpImage from '../Download/book covers/php.jpeg'

const programmingLanguages = [
  { name: 'HTML', file: 'html.pdf', image: htmlImage },
  { name: 'CSS', file: 'css.pdf', image: cssImage },
  { name: 'JavaScript', file: 'js.pdf', image: jsImage },
  { name: 'React', file: 'react.pdf', image: reactImage },
  { name: 'TypeScript', file: 'ts.pdf', image: tsImage },
  { name: 'Node', file: 'node.pdf', image: nodeImage },
  { name: 'MySQL', file: 'mysql.pdf', image: mysqlImage },
  { name: 'C++', file: 'c++.pdf', image: cppImage },
  { name: 'PHP', file: 'php.pdf', image: phpImage },
  { name: 'Python', file: 'python.pdf', image: pythonImage },
];

const Download = ({ isLoggedIn }) => {
  return (
    <div className="download-container">
      <NavBar isLoggedIn={isLoggedIn} />
      <Carousel />
      <h1>Programming Language Books</h1>
      <p>Select a language and download the book to learn more!</p>
      <div className="languages-grid">
        {programmingLanguages.map((language) => (
          <div className="language-card" key={language.name}>
            <img
              src={language.image} // Use the imported image
              alt={`${language.name} cover`}
              className="language-cover"
            />
            <h2>{language.name}</h2>
            <button
              className="download-button"
              onClick={() => {
                const link = document.createElement('a');
                link.href = `/books/${language.file}`; // Path to the file
                link.download = language.file;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Download PDF
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Download;
