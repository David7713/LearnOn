export const quizData = {
    HTML: [
      {
        text: 'What does HTML stand for?',
        options: [
          { id: 'a', text: 'Hyper Text Markup Language' },
          { id: 'b', text: 'Hyperlinks and Text Markup Language' },
          { id: 'c', text: 'Home Tool Markup Language' },
        ],
        correctAnswer: 'a',
      },
      {
        text: 'What is the correct HTML element for the largest heading?',
        options: [
          { id: 'a', text: '<heading>' },
          { id: 'b', text: '<h1>' },
          { id: 'c', text: '<h6>' },
        ],
        correctAnswer: 'b',
      },
      {
        text: 'Which HTML element is used to define an unordered list?',
        options: [
          { id: 'a', text: '<ul>' },
          { id: 'b', text: '<ol>' },
          { id: 'c', text: '<li>' },
        ],
        correctAnswer: 'a',
      },
      {
        text: 'Which attribute specifies an alternate text for an image?',
        options: [
          { id: 'a', text: 'alt' },
          { id: 'b', text: 'title' },
          { id: 'c', text: 'src' },
        ],
        correctAnswer: 'a',
      },
      {
        text: 'Which HTML element is used for creating a hyperlink?',
        options: [
          { id: 'a', text: '<a>' },
          { id: 'b', text: '<link>' },
          { id: 'c', text: '<href>' },
        ],
        correctAnswer: 'a',
      },
      {
        text: 'How can you open a link in a new tab?',
        options: [
          { id: 'a', text: 'target="_self"' },
          { id: 'b', text: 'target="_blank"' },
          { id: 'c', text: 'target="_new"' },
        ],
        correctAnswer: 'b',
      },
      {
        text: 'What is the correct way to add a comment in HTML?',
        options: [
          { id: 'a', text: '<!-- This is a comment -->' },
          { id: 'b', text: '// This is a comment' },
          { id: 'c', text: '/* This is a comment */' },
        ],
        correctAnswer: 'a',
      },
      {
        text: 'Which element is used to display a title for a table?',
        options: [
          { id: 'a', text: '<caption>' },
          { id: 'b', text: '<thead>' },
          { id: 'c', text: '<title>' },
        ],
        correctAnswer: 'a',
      },
      {
        text: 'What does the <br> tag do?',
        options: [
          { id: 'a', text: 'Makes text bold' },
          { id: 'b', text: 'Creates a new paragraph' },
          { id: 'c', text: 'Inserts a line break' },
        ],
        correctAnswer: 'c',
      },
      {
        text: 'Which doctype declaration is correct for HTML5?',
        options: [
          { id: 'a', text: '<!DOCTYPE HTML5>' },
          { id: 'b', text: '<!DOCTYPE html>' },
          { id: 'c', text: '<!DOCTYPE document>' },
        ],
        correctAnswer: 'b',
      },
      
    ],

  CSS: [
    {
      text: 'What does CSS stand for?',
      options: [
        { id: 'a', text: 'Cascading Style Sheets' },
        { id: 'b', text: 'Colorful Style Sheets' },
        { id: 'c', text: 'Creative Style Sheets' },
      ],
      correctAnswer: 'a',
    },
    {
      text: 'Which property is used to change the background color?',
      options: [
        { id: 'a', text: 'color' },
        { id: 'b', text: 'background-color' },
        { id: 'c', text: 'bgcolor' },
      ],
      correctAnswer: 'b',
    },
    {
      text: 'Which property is used to change the font size?',
      options: [
        { id: 'a', text: 'font-style' },
        { id: 'b', text: 'text-size' },
        { id: 'c', text: 'font-size' },
      ],
      correctAnswer: 'c',
    },
    {
      text: 'What is the correct syntax for adding a comment in CSS?',
      options: [
        { id: 'a', text: '// This is a comment' },
        { id: 'b', text: '/* This is a comment */' },
        { id: 'c', text: '<!-- This is a comment -->' },
      ],
      correctAnswer: 'b',
    },
    {
      text: 'Which CSS property controls the text color?',
      options: [
        { id: 'a', text: 'color' },
        { id: 'b', text: 'text-color' },
        { id: 'c', text: 'font-color' },
      ],
      correctAnswer: 'a',
    },
    {
      text: 'How do you apply a CSS style to a specific ID?',
      options: [
        { id: 'a', text: '#idName' },
        { id: 'b', text: '.idName' },
        { id: 'c', text: 'idName' },
      ],
      correctAnswer: 'a',
    },
    {
      text: 'Which property is used to change the text alignment?',
      options: [
        { id: 'a', text: 'align' },
        { id: 'b', text: 'text-align' },
        { id: 'c', text: 'text-position' },
      ],
      correctAnswer: 'b',
    },
    {
      text: 'Which property is used to set the spacing between lines of text?',
      options: [
        { id: 'a', text: 'spacing' },
        { id: 'b', text: 'line-spacing' },
        { id: 'c', text: 'line-height' },
      ],
      correctAnswer: 'c',
    },
    {
      text: 'How do you select an element with a specific class in CSS?',
      options: [
        { id: 'a', text: '.className' },
        { id: 'b', text: '#className' },
        { id: 'c', text: 'className' },
      ],
      correctAnswer: 'a',
    },
    {
      text: 'Which property specifies the stack order of elements?',
      options: [
        { id: 'a', text: 'z-stack' },
        { id: 'b', text: 'z-order' },
        { id: 'c', text: 'z-index' },
      ],
      correctAnswer: 'c',
    },
  ]
  ,

    JavaScript: [
        {
            text: 'Which type of JavaScript language is?',
            options: [
                { id: 'a', text: 'Object-Oriented' },
                { id: 'b', text: 'Object-Based' },
                { id: 'c', text: 'Assembly-language' },
            ],
            correctAnswer: 'b',
        },
        {
            text: 'Which method is used to write HTML content into the browser?',
            options: [
                { id: 'a', text: 'document.write()' },
                { id: 'b', text: 'console.log()' },
                { id: 'c', text: 'window.write()' },
            ],
            correctAnswer: 'a',
        },
        {
            text: 'Which company developed JavaScript?',
            options: [
                { id: 'a', text: 'Netscape' },
                { id: 'b', text: 'Microsoft' },
                { id: 'c', text: 'Sun Microsystems' },
            ],
            correctAnswer: 'a',
        },
        {
            text: 'What keyword is used to declare a variable in JavaScript?',
            options: [
                { id: 'a', text: 'var' },
                { id: 'b', text: 'let' },
                { id: 'c', text: 'Both a and b' },
            ],
            correctAnswer: 'c',
        },
        {
            text: 'Which operator is used to compare both value and type?',
            options: [
                { id: 'a', text: '==' },
                { id: 'b', text: '===' },
                { id: 'c', text: '=' },
            ],
            correctAnswer: 'b',
        },
        {
            text: 'What is the output of "2" + 2 in JavaScript?',
            options: [
                { id: 'a', text: '22' },
                { id: 'b', text: '4' },
                { id: 'c', text: 'Error' },
            ],
            correctAnswer: 'a',
        },
        {
            text: 'Which method is used to convert JSON to a JavaScript object?',
            options: [
                { id: 'a', text: 'JSON.parse()' },
                { id: 'b', text: 'JSON.stringify()' },
                { id: 'c', text: 'JSON.objectify()' },
            ],
            correctAnswer: 'a',
        },
        {
            text: 'What does "this" keyword refer to in JavaScript?',
            options: [
                { id: 'a', text: 'Current object' },
                { id: 'b', text: 'Global object' },
                { id: 'c', text: 'Depends on the context' },
            ],
            correctAnswer: 'c',
        },
        {
            text: 'Which method adds an element to the end of an array?',
            options: [
                { id: 'a', text: 'push()' },
                { id: 'b', text: 'pop()' },
                { id: 'c', text: 'unshift()' },
            ],
            correctAnswer: 'a',
        },
        {
            text: 'Which function is used to set a timer in JavaScript?',
            options: [
                { id: 'a', text: 'setTimeout()' },
                { id: 'b', text: 'setInterval()' },
                { id: 'c', text: 'setTimer()' },
            ],
            correctAnswer: 'a',
        },
    ],

    React: [
        {
            text: 'What is React primarily used for?',
            options: [
                { id: 'a', text: 'Backend development' },
                { id: 'b', text: 'User interface development' },
                { id: 'c', text: 'Database management' },
            ],
            correctAnswer: 'b',
        },
        {
            text: 'Which syntax is used to create a React component?',
            options: [
                { id: 'a', text: 'function Component() {}' },
                { id: 'b', text: 'class Component extends React.Component' },
                { id: 'c', text: 'Both a and b' },
            ],
            correctAnswer: 'c',
        },
        {
            text: 'What is JSX?',
            options: [
                { id: 'a', text: 'JavaScript extension for writing HTML' },
                { id: 'b', text: 'JavaScript XML' },
                { id: 'c', text: 'Both a and b' },
            ],
            correctAnswer: 'c',
        },
        {
            text: 'Which method is used to update state in a React component?',
            options: [
                { id: 'a', text: 'setState()' },
                { id: 'b', text: 'updateState()' },
                { id: 'c', text: 'changeState()' },
            ],
            correctAnswer: 'a',
        },
        {
            text: 'What is the use of useState in React?',
            options: [
                { id: 'a', text: 'To manage side effects' },
                { id: 'b', text: 'To manage state in functional components' },
                { id: 'c', text: 'To handle API calls' },
            ],
            correctAnswer: 'b',
        },
        {
            text: 'How do you pass data from a parent to a child component in React?',
            options: [
                { id: 'a', text: 'Props' },
                { id: 'b', text: 'State' },
                { id: 'c', text: 'Hooks' },
            ],
            correctAnswer: 'a',
        },
        {
            text: 'What does React use to increase performance by avoiding real DOM manipulation?',
            options: [
                { id: 'a', text: 'Shadow DOM' },
                { id: 'b', text: 'Virtual DOM' },
                { id: 'c', text: 'None of the above' },
            ],
            correctAnswer: 'b',
        },
        {
            text: 'Which lifecycle method is called after a component is rendered?',
            options: [
                { id: 'a', text: 'componentDidMount' },
                { id: 'b', text: 'componentWillMount' },
                { id: 'c', text: 'shouldComponentUpdate' },
            ],
            correctAnswer: 'a',
        },
        {
            text: 'Which hook is used to perform side effects in functional components?',
            options: [
                { id: 'a', text: 'useEffect' },
                { id: 'b', text: 'useState' },
                { id: 'c', text: 'useReducer' },
            ],
            correctAnswer: 'a',
        },
        {
            text: 'How do you conditionally render a component in React?',
            options: [
                { id: 'a', text: 'Using if-else or ternary operator' },
                { id: 'b', text: 'Using a switch statement' },
                { id: 'c', text: 'Both a and b' },
            ],
            correctAnswer: 'c',
        },
    ],





}
  
   

    
     