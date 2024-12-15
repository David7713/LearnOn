import React from 'react';
import './Download.css'; // Import CSS for styling
import NavBar from '../../components/NavBar/NavBar';
import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';

const programmingLanguages = [
  { name: 'HTML', file: 'html.pdf' },
  { name: 'CSS', file: 'css.pdf' },
  { name: 'JavaScript', file: 'js.pdf' },
  { name: 'React', file: 'react.pdf' },
  { name: 'TypeScript', file: 'ts.pdf' },
  { name: 'Node', file: 'node.pdf' },
  { name: 'MySQL', file: 'mysql.pdf' },
  { name: 'C++', file: 'c++.pdf' },
  { name: 'PHP', file: 'php.pdf' },
  { name: 'Python', file: 'python.pdf' },
];

const Download = () => {
  return (
    <div className="download-container">
      <NavBar />
      <Carousel />
      <h1>Programming Language Books</h1>
      <p>Select a language and download the book to learn more!</p>
      <div className="languages-grid">
        {programmingLanguages.map((language) => (
          <div className="language-card" key={language.name}>
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
