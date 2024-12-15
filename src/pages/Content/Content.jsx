import React from 'react'
import './Content.css'
import htmlImage from '../../assets/content assets/html-code-image.png'
import cssImage from '../../assets/content assets/css-code-image.png'
import jsImage from '../../assets/content assets/js-code-image.png'
import pythonImage from '../../assets/content assets/python-code-image.png'
import sqlImage from '../../assets/content assets/sql-code-image.png'
const Content = () => {
  return (
    <div>


        <div className='html-content-part'>
        <div className='html-content-text-part'>
    <h1>HTML</h1>
    <p>The language for building web pages</p>

<button>Learn HTML</button>
<button>Video Tutorial</button>
<button>Quiz</button>
        </div>
       <div className='html-content-image-part'>
        <img src={htmlImage}></img>
       </div>
        </div>










        <div className='css-content-part'>
        <div className='css-content-text-part'>
    <h1>CSS</h1>
    <p>The language for styling web pages</p>

<button>Learn CSS</button>
<button>Video Tutorial</button>
<button>Quiz</button>
        </div>
       <div className='css-content-image-part'>
        <img src={cssImage}></img>
       </div>
        </div>











        <div className='js-content-part'>
        <div className='js-content-text-part'>
    <h1>JavaScript</h1>
    <p>The language for styling web pages</p>

<button>Learn JS</button>
<button>Video Tutorial</button>
<button>Exercises</button>
        </div>
       <div className='js-content-image-part'>
        <img src={jsImage}></img>
       </div>
        </div>







        <div className='python-content-part'>
        <div className='python-content-text-part'>
    <h1>Python</h1>
    <p>The language for styling web pages</p>

<button>Learn Python</button>
<button>Video Tutorial</button>
<button>Quiz</button>
        </div>
       <div className='python-content-image-part'>
        <img src={pythonImage}></img>
       </div>
        </div>






        <div className='sql-content-part'>
        <div className='sql-content-text-part'>
    <h1>MySql</h1>
    <p>The language for styling web pages</p>

<button>Learn MySql</button>
<button>Video Tutorial</button>
<button>Quiz</button>
        </div>
       <div className='sql-content-image-part'>
        <img src={sqlImage}></img>
       </div>
        </div>





    </div>
  )
}

export default Content