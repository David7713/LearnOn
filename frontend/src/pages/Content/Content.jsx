import React from 'react'
import './Content.css'
import htmlImage from '../../assets/content assets/html-code-image.png'
import cssImage from '../../assets/content assets/css-code-image.png'
import jsImage from '../../assets/content assets/js-code-image.png'
import pythonImage from '../../assets/content assets/python-code-image.png'
import sqlImage from '../../assets/content assets/sql-code-image.png'
import { Link } from 'react-router-dom';
const Content = () => {
  return (
    <div>


        <div className='html-content-part'>
        <div className='html-content-text-part'>
    <h1>HTML</h1>
    <p>The language for building web pages</p>

<button><Link to="/Languages/html" className='content-link-text'>Learn HTML</Link></button>
<button><Link to="/video-course" className='content-link-text'>Video Tutorial</Link></button>
<button><Link to="/Quiz/HTML" className='content-link-text'>Quiz</Link></button>
        </div>
       <div className='html-content-image-part'>
        <img src={htmlImage}></img>
       </div>
        </div>










        <div className='css-content-part'>
        <div className='css-content-text-part'>
    <h1>CSS</h1>
    <p>The language for styling web pages</p>

    <button><Link to="/Languages/css"className='content-link-text'>Learn CSS</Link></button>
<button><Link to="/video-course" className='content-link-text'>Video Tutorial</Link></button>
<button><Link to="/Quiz/CSS" className='content-link-text'>Quiz</Link></button>
        </div>
       <div className='css-content-image-part'>
        <img src={cssImage}></img>
       </div>
        </div>











        <div className='js-content-part'>
        <div className='js-content-text-part'>
    <h1>JavaScript</h1>
    <p>The language for programming web pages</p>

    <button><Link to="/Languages/javascript" className='content-link-text'>Learn JS</Link></button>
<button><Link to="/video-course" className='content-link-text'>Video Tutorial</Link></button>
<button><Link to="/Quiz/Javascript" className='content-link-text'>Quiz</Link></button>
        </div>
       <div className='js-content-image-part'>
        <img src={jsImage}></img>
       </div>
        </div>







        <div className='python-content-part'>
        <div className='python-content-text-part'>
    <h1>Python</h1>
    <p>A popular programming language</p>

    <button><Link to="/Languages/python" className='content-link-text'>Learn Python</Link></button>
<button><Link to="/video-course" className='content-link-text'>Video Tutorial</Link></button>
<button><Link to="/Quiz/Python" className='content-link-text'>Quiz</Link></button>
        </div>
       <div className='python-content-image-part'>
        <img src={pythonImage}></img>
       </div>
        </div>






        <div className='sql-content-part'>
        <div className='sql-content-text-part'>
    <h1>MySql</h1>
    <p>A language for accessing databases

</p>

<button><Link to="/Languages/mysql" className='content-link-text'>Learn MYSQL</Link></button>
<button><Link to="/video-course" className='content-link-text'>Video Tutorial</Link></button>
<button><Link to="/Quiz/MySQL" className='content-link-text'>Quiz</Link></button>
        </div>
       <div className='sql-content-image-part'>
        <img src={sqlImage}></img>
       </div>
        </div>





    </div>
  )
}

export default Content