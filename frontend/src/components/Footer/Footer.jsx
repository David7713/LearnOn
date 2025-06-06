import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { SiGooglegemini } from "react-icons/si";

const Footer = () => {
  return (
    <div className="footer-part">
  

      <div className="footer-subheader-part">
        <div className="footer-languages-learn-part">
          <p>Languages to Learn <label id="on">On</label></p>
          <ul>
            <li><Link to="/Languages/html" className='language-link'>HTML</Link></li>
            <li><Link to="/Languages/css" className='language-link'>CSS</Link></li>
            <li><Link to="/Languages/javascript" className='language-link'>JavaScript</Link></li>
            <li><Link to="/Languages/react" className='language-link'>React</Link></li>
            <li><Link to="/Languages/node" className='language-link'>Node</Link></li>
            <li><Link to="/Languages/typescript" className='language-link'>TypeScript</Link></li>
            <li><Link to="/Languages/git" className='language-link'>Git</Link></li>
            <li><Link to="/Languages/github" className='language-link'>GitHub</Link></li>
            <li><Link to="/Languages/mysql" className='language-link'>MySQL</Link></li>
            <li><Link to="/Languages/tailwind" className='language-link'>Tailwind</Link></li>
            <li><Link to="/Languages/cplusplus" className='language-link'>C++</Link></li>
            <li><Link to="/Languages/python" className='language-link'>Python</Link></li>
            <li><Link to="/Languages/php" className='language-link'>PHP</Link></li>
          </ul>
        </div>

        <div className="footer-exercises-part">
          <p>Quiz to Learn <label id="on">On</label></p>
          <ul>
            <li><Link to="/Quiz/HTML" className='quiz-link'>Quiz HTML</Link></li>
            <li><Link to="/Quiz/CSS" className='quiz-link'>Quiz CSS</Link></li>
            <li><Link to="/Quiz/JavaScript" className='quiz-link'>Quiz JavaScript</Link></li>
            <li><Link to="/Quiz/TypeScript" className='quiz-link'>Quiz TypeScript</Link></li>
            <li><Link to="/Quiz/React" className='quiz-link'>Quiz React</Link></li>
            <li><Link to="/Quiz/Node" className='quiz-link'>Quiz Node</Link></li>
            <li><Link to="/Quiz/C++" className='quiz-link'>Quiz C++</Link></li>
            <li><Link to="/Quiz/Git" className='quiz-link'>Quiz Git</Link></li>
            <li><Link to="/Quiz/GitHub" className='quiz-link'>Quiz GitHub</Link></li>
            <li><Link to="/Quiz/Tailwind" className='quiz-link'>Quiz Tailwind</Link></li>
            <li><Link to="/Quiz/Python" className='quiz-link'>Quiz Python</Link></li>
            <li><Link to="/Quiz/PHP" className='quiz-link'>Quiz Php</Link></li>
            <li><Link to="/Quiz/MySQL" className='quiz-link'>Quiz MySQL</Link></li>
          </ul>
        </div>
        <div className="footer-books-part">
  <p>Books to Learn <label id="on">On</label></p>
  <ul>
    <li>
      <Link to="/download" className="books-link">Books HTML</Link>
    </li>
    <li>
      <Link to="/download" className="books-link">Books CSS</Link>
    </li>
    <li>
      <Link to="/download" className="books-link">Books JavaScript</Link>
    </li>
    <li>
      <Link to="/download" className="books-link">Books React</Link>
    </li>
    <li>
      <Link to="/download" className="books-link">Books Node</Link>
    </li>
    <li>
      <Link to="/download" className="books-link">Books Python</Link>
    </li>
    <li>
      <Link to="/download" className="books-link">Books PHP</Link>
    </li>
    <li>
      <Link to="/download" className="books-link">Books MySQL</Link>
    </li>
    <li>
      <Link to="/download" className="books-link">Books C++</Link>
    </li>
  </ul>
</div>

      </div>

      <div className="footer-social-media-part">
        <ul>
          <li><FaFacebook /></li>
          <li><FaInstagram /></li>
          <li><FaLinkedin /></li>
          <li><FaGithub /></li>
          <li><FaTwitter /></li>
        </ul>

        <div>
          Copyright 2024 by LearnOn. All Rights Reserved. Learn <label id="on">On</label> is Powered by DH.
        </div>
      </div>
    </div>
  );
};

export default Footer;
