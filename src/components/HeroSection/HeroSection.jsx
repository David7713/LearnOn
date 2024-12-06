import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css'
import { CiSearch } from "react-icons/ci";

const HeroSection = () => {
  const [inputValue, setInputValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);
  const navigate = useNavigate();

  const languages = [
    { name: 'JavaScript', path: '/Languages/javascript' },
    { name: 'HTML', path: '/Languages/html' },
    { name: 'CSS', path: '/Languages/css' },
    { name: 'React', path: '/Languages/react' },
    { name: 'TypeScript', path: '/Languages/typescript' },
    { name: 'Node', path: '/Languages/node' },
    { name: 'MySQL', path: '/Languages/mysql' },
    { name: 'Git', path: '/Languages/git' },
    { name: 'GitHub', path: '/Languages/github' },
    { name: 'Tailwind', path: '/Languages/tailwind' },
    { name: 'C++', path: '/Languages/cplusplus' },
    { name: 'Python', path: '/Languages/python' },
    { name: 'PHP', path: '/Languages/php' },
  ];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.trim()) {
      const matches = languages.filter((lang) =>
        lang.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredOptions(matches);
    } else {
      setFilteredOptions([]);
    }
  };

  const handleOptionClick = (path) => {
    navigate(path);
  };

  return (
    <div className='heroSection-part'>
      <div className="search-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search for a language..."
        />
        <CiSearch />
      </div>
      {filteredOptions.length > 0 && (
        <ul>
          {filteredOptions.map((lang) => (
            <li key={lang.name} onClick={() => handleOptionClick(lang.path)}>
              {lang.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HeroSection;
