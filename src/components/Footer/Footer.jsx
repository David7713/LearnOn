import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiGooglegemini } from "react-icons/si";
const Footer = () => {
  return (
    <div className='footer-part'>

        <div className='footer-headline-part'>
            <div>Learn <label id='on'> On</label></div>

            <ul>
                <li>Documentation</li>
                <li>Downloads</li>
                <li>Certification</li>
                <li>AI <SiGooglegemini></SiGooglegemini></li>
                <li>Video Course</li>
            </ul>
        </div>

<div className='footer-subheader-part'>
        <div className='footer-languages-learn-part'>
    <p>Languages to Learn  <label id='on'>On</label></p>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node</li>
        <li>TypeScript</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>MySQL</li>
        <li>C++</li>
        <li>Python</li>
    </ul>
</div>




<div className='footer-exercises-part'>
    <p>Exercises to Learn <label id='on'>On</label></p>
  <ul>
         <li>Exercises HTML</li>
        <li>Exercises CSS</li>
        <li>Exercises JavaScript</li>
        <li>Exercises TypeScript</li>
        <li>Exercises React</li>
        <li>Exercises Node</li>
        <li>Exercises C++</li>
        <li>Exercises Git</li>
        <li>Exercises GitHub</li>
        <li>Exercises Tailwind</li>
        <li>Exercises Python</li>
        <li>Exercises Php</li>
        <li>Exercises MySql</li>

        </ul>
</div>







<div className='footer-books-part'>
    <p>Books to Learn <label id='on'>On</label></p>
    <ul>
        <li>Books HTML</li>
        <li>Books CSS</li>
        <li>Books JavaScript</li>
        <li>Books React</li>
        <li>Books Node</li>
        <li>Books Pyhton</li>
        <li>Books MySQL</li>
        <li>Books C++</li>
      
    </ul>
</div>



</div>
<div className='footer-social-media-part'>

    <ul>
        <li><FaFacebook></FaFacebook></li>
        <li><FaInstagram></FaInstagram></li>
        <li><FaLinkedin></FaLinkedin></li>
        <li><FaGithub></FaGithub></li>
        <li><FaTwitter></FaTwitter></li>
    </ul>


    <div>
Copyright 2024 by LearnOn. All Rights Reserved. Learn <label id='on'>On</label> is Powered by DH.
</div>

</div>
    </div>
  )
}

export default Footer