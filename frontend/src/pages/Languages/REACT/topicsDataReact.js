export const topicsDataReact = [
  {
    id: 1,
    name: 'Introduction to React',
    content: (
      <>
        <p>
          React is a JavaScript library for building user interfaces. Developed by Facebook, it allows developers to create reusable UI components that efficiently update when data changes.
        </p>
        <p>
          React uses a virtual DOM to optimize rendering, making it highly performant for complex applications.
        </p>
        
        <h4>Simple React Component Example:</h4>
        <pre>{`import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>Welcome to your first React component.</p>
    </div>
  );
}

export default App;`}</pre>
        <p>This is a basic functional component in React. Components are the building blocks of React applications.</p>
      </>
    )
  },
  {
    id: 2,
    name: 'React Components',
    content: (
      <>
        <p>
          In React, components can be either functions or classes that return JSX (JavaScript XML) to describe what should appear on the screen.
        </p>
        
        <h4>Functional Component:</h4>
        <pre>{`function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}`}</pre>
        
        <h4>Class Component:</h4>
        <pre>{`class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}`}</pre>
        <p>Functional components with hooks are now the preferred way to write components in modern React.</p>
      </>
    )
  },
  {
    id: 3,
    name: 'React State and Props',
    content: (
      <>
        <p>
          State is used to manage data within a component, while props allow data to be passed from parent to child components.
        </p>
        
        <h4>Using State with useState Hook:</h4>
        <pre>{`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`}</pre>
        
        <h4>Using Props:</h4>
        <pre>{`function UserProfile({ name, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}

// Usage: <UserProfile name="John" age={30} />`}</pre>
      </>
    )
  },
  {
    id: 4,
    name: 'React Hooks',
    content: (
      <>
        <p>
          Hooks allow you to use state and other React features without writing classes. They were introduced in React 16.8.
        </p>
        
        <h4>useState Hook:</h4>
        <pre>{`const [state, setState] = useState(initialState);`}</pre>
        
        <h4>useEffect Hook:</h4>
        <pre>{`useEffect(() => {
  // Side effect code here
  return () => {
    // Cleanup code (optional)
  };
}, [dependencies]);`}</pre>
        
        <h4>Custom Hook Example:</h4>
        <pre>{`function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return width;
}`}</pre>
      </>
    )
  },
  {
    id: 5,
    name: 'React Router',
    content: (
      <>
        <p>
          React Router enables navigation between different components in a React application, changing the browser URL, and keeping the UI in sync with the URL.
        </p>
        
        <h4>Basic Routing Setup:</h4>
        <pre>{`import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Router>
  );
}`}</pre>
        
        <h4>Dynamic Routing:</h4>
        <pre>{`<Route path="/users/:id" component={UserProfile} />

// Access params in component:
function UserProfile({ match }) {
  const userId = match.params.id;
  // Fetch user data based on ID
}`}</pre>
      </>
    )
  },
  {
    id: 6,
    name: 'React Context API',
    content: (
      <>
        <p>
          The Context API provides a way to share values between components without explicitly passing props through every level of the component tree.
        </p>
        
        <h4>Creating Context:</h4>
        <pre>{`const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}`}</pre>
        
        <h4>Consuming Context:</h4>
        <pre>{`function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Themed Button</button>;
}`}</pre>
        
        <h4>Context with useReducer:</h4>
        <pre>{`const [state, dispatch] = useReducer(reducer, initialState);
<AppContext.Provider value={{ state, dispatch }}>
  {/* Child components */}
</AppContext.Provider>`}</pre>
      </>
    )
  },
  {
    id: 7,
    name: 'React Lifecycle Methods',
    content: (
      <>
        <p>
          Class components have lifecycle methods that run at specific points in a component's lifecycle. Functional components use hooks to achieve similar functionality.
        </p>
        
        <h4>Class Component Lifecycle:</h4>
        <pre>{`class Example extends React.Component {
  componentDidMount() {
    // Runs after component is mounted to DOM
  }
  
  componentDidUpdate(prevProps, prevState) {
    // Runs after component updates
  }
  
  componentWillUnmount() {
    // Runs before component is removed from DOM
  }
  
  render() {
    return <div>Example</div>;
  }
}`}</pre>
        
        <h4>Equivalent Hooks:</h4>
        <pre>{`function Example() {
  // componentDidMount equivalent
  useEffect(() => {
    // Mount code here
    return () => {
      // componentWillUnmount equivalent
    };
  }, []);

  // componentDidUpdate equivalent
  useEffect(() => {
    // Update code here
  }); // No dependency array
}`}</pre>
      </>
    )
  },
  {
    id: 8,
    name: 'React Redux',
    content: (
      <>
        <p>
          Redux is a predictable state container for JavaScript apps that helps manage global state in large applications.
        </p>
        
        <h4>Redux Store Setup:</h4>
        <pre>{`import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <MyApp />
    </Provider>
  );
}`}</pre>
        
        <h4>Connecting Components:</h4>
        <pre>{`import { connect } from 'react-redux';

function Counter({ count, increment }) {
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}

const mapState = state => ({ count: state.count });
const mapDispatch = { increment: () => ({ type: 'INCREMENT' }) };

export default connect(mapState, mapDispatch)(Counter);`}</pre>
        
        <h4>Redux Toolkit (Modern Approach):</h4>
        <pre>{`import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1
  }
});

const store = configureStore({
  reducer: counterSlice.reducer
});`}</pre>
      </>
    )
  },
  {
    id: 9,
    name: 'React Performance Optimization',
    content: (
      <>
        <p>
          Optimizing React applications involves techniques to reduce unnecessary renders and improve loading performance.
        </p>
        
        <h4>React.memo for Component Memoization:</h4>
        <pre>{`const MemoizedComponent = React.memo(function MyComponent(props) {
  /* render using props */
});`}</pre>
        
        <h4>useCallback Hook:</h4>
        <pre>{`const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b], // Dependencies
);`}</pre>
        
        <h4>useMemo Hook:</h4>
        <pre>{`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`}</pre>
        
        <h4>Lazy Loading Components:</h4>
        <pre>{`const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OtherComponent />
    </Suspense>
  );
}`}</pre>
      </>
    )
  },
  {
    id: 10,
    name: 'React Forms and Validation',
    content: (
      <>
        <p>
          React provides controlled components to handle form inputs, where form data is handled by the component state.
        </p>
        
        <h4>Controlled Form Component:</h4>
        <pre>{`function MyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}`}</pre>
        
        <h4>Form Validation:</h4>
        <pre>{`const [errors, setErrors] = useState({});

const validate = () => {
  const newErrors = {};
  if (!formData.name) newErrors.name = 'Name is required';
  if (!formData.email.includes('@')) newErrors.email = 'Invalid email';
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};`}</pre>
      </>
    )
  },
  {
    id: 11,
    name: 'React Styling Solutions',
    content: (
      <>
        <p>
          React offers multiple approaches to styling components, each with its own advantages.
        </p>
        
        <h4>CSS Modules:</h4>
        <pre>{`/* styles.module.css */
.button {
  background: blue;
  color: white;
}

// Component
import styles from './styles.module.css';

function Button() {
  return <button className={styles.button}>Click</button>;
}`}</pre>
        
        <h4>Styled-components:</h4>
        <pre>{`import styled from 'styled-components';

const StyledButton = styled.button\`
  background: \${props => props.primary ? 'blue' : 'white'};
  color: \${props => props.primary ? 'white' : 'blue'};
  padding: 1em;
\`;

function MyComponent() {
  return (
    <div>
      <StyledButton>Normal</StyledButton>
      <StyledButton primary>Primary</StyledButton>
    </div>
  );
}`}</pre>
        
        <h4>Inline Styles:</h4>
        <pre>{`const divStyle = {
  color: 'blue',
  backgroundColor: 'lightgray'
};

function MyComponent() {
  return <div style={divStyle}>Hello</div>;
}`}</pre>
      </>
    )
  },
  {
    id: 12,
    name: 'Server-Side Rendering (SSR) with React',
    content: (
      <>
        <p>
          Server-side rendering improves performance and SEO by rendering React components on the server before sending them to the client.
        </p>
        
        <h4>Basic Next.js Page:</h4>
        <pre>{`// pages/index.js
export default function Home({ serverTime }) {
  return (
    <div>
      <h1>Server-Side Rendering Example</h1>
      <p>Server time: {serverTime}</p>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      serverTime: new Date().toISOString()
    }
  };
}`}</pre>
        
        <h4>Static Site Generation (SSG):</h4>
        <pre>{`export async function getStaticProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return {
    props: {
      data
    },
    revalidate: 60 // Regenerate page every 60 seconds
  };
}`}</pre>
      </>
    )
  },
  {
    id: 13,
    name: 'React Testing',
    content: (
      <>
        <p>
          Testing React applications ensures reliability and helps catch bugs early in the development process.
        </p>
        
        <h4>Jest Test Example:</h4>
        <pre>{`test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});`}</pre>
        
        <h4>React Testing Library Example:</h4>
        <pre>{`import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('button click triggers onClick', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click</Button>);
  
  fireEvent.click(screen.getByText('Click'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});`}</pre>
        
        <h4>Testing Components with Context:</h4>
        <pre>{`test('displays user name from context', () => {
  const user = { name: 'John' };
  
  render(
    <UserContext.Provider value={user}>
      <UserProfile />
    </UserContext.Provider>
  );
  
  expect(screen.getByText('John')).toBeInTheDocument();
});`}</pre>
      </>
    )
  },
  {
    id: 14,
    name: 'React and REST APIs',
    content: (
      <>
        <p>
          React applications often need to communicate with backend services through REST APIs.
        </p>
        
        <h4>Fetch API Example:</h4>
        <pre>{`function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://api.example.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`}</pre>
        
        <h4>Axios Example:</h4>
        <pre>{`import axios from 'axios';

async function postData(data) {
  try {
    const response = await axios.post('https://api.example.com/data', data);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}`}</pre>
      </>
    )
  },
  {
    id: 15,
    name: 'React and GraphQL',
    content: (
      <>
        <p>
          GraphQL provides a more efficient alternative to REST for data fetching in React applications.
        </p>
        
        <h4>Apollo Client Setup:</h4>
        <pre>{`import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.example.com/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <MyApp />
    </ApolloProvider>
  );
}`}</pre>
        
        <h4>Querying Data with useQuery:</h4>
        <pre>{`import { gql, useQuery } from '@apollo/client';

const GET_USERS = gql\`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
\`;

function UserList() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`}</pre>
        
        <h4>Mutating Data with useMutation:</h4>
        <pre>{`const ADD_USER = gql\`
  mutation AddUser($name: String!, $email: String!) {
    addUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
\`;

function AddUserForm() {
  const [addUser, { data }] = useMutation(ADD_USER);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addUser({ variables: { name, email } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} />
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <button type="submit">Add User</button>
    </form>
  );
}`}</pre>
      </>
    )
  },
  {
    id: 16,
    name: 'React Portals',
    content: (
      <>
        <p>
          Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
        </p>
        
        <h4>Portal Example:</h4>
        <pre>{`import ReactDOM from 'react-dom';

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal">
      {children}
    </div>,
    document.getElementById('modal-root')
  );
}

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>
        Show Modal
      </button>
      {showModal && (
        <Modal>
          <h1>Modal Title</h1>
          <p>Modal content goes here.</p>
          <button onClick={() => setShowModal(false)}>
            Close
          </button>
        </Modal>
      )}
    </div>
  );
}`}</pre>
        <p>Portals are useful for modals, tooltips, and other UI elements that need to break out of their container.</p>
      </>
    )
  },
  {
    id: 17,
    name: 'React Refs',
    content: (
      <>
        <p>
          Refs provide a way to access DOM nodes or React elements created in the render method.
        </p>
        
        <h4>Creating Refs:</h4>
        <pre>{`function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  
  const onButtonClick = () => {
    inputEl.current.focus();
  };
  
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}`}</pre>
        
        <h4>Forwarding Refs:</h4>
        <pre>{`const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="fancy-button">
    {props.children}
  </button>
));

// Usage:
const ref = useRef();
<FancyButton ref={ref}>Click me!</FancyButton>`}</pre>
      </>
    )
  },
  {
    id: 18,
    name: 'React Error Boundaries',
    content: (
      <>
        <p>
          Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI.
        </p>
        
        <h4>Error Boundary Component:</h4>
        <pre>{`class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

// Usage:
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>`}</pre>
      </>
    )
  },
  {
    id: 19,
    name: 'React Suspense',
    content: (
      <>
        <p>
          Suspense lets your components "wait" for something before rendering, such as data loading or code splitting.
        </p>
        
        <h4>Code Splitting with Suspense:</h4>
        <pre>{`const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}`}</pre>
        
        <h4>Data Fetching with Suspense (Experimental):</h4>
        <pre>{`function ProfileDetails() {
  const user = resource.user.read();
  return <h1>{user.name}</h1>;
}

function App() {
  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <ProfileDetails />
    </Suspense>
  );
}`}</pre>
      </>
    )
  },
  {
    id: 20,
    name: 'React Custom Hooks',
    content: (
      <>
        <p>
          Custom Hooks let you extract component logic into reusable functions.
        </p>
        
        <h4>useLocalStorage Hook:</h4>
        <pre>{`function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = value => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

// Usage:
const [name, setName] = useLocalStorage('name', 'John');`}</pre>
        
        <h4>useFetch Hook:</h4>
        <pre>{`function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Usage:
const { data, loading, error } = useFetch('https://api.example.com/data');`}</pre>
      </>
    )
  }
];