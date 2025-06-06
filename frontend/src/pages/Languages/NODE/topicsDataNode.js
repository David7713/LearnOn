export const topicsDataNode = [
  {
    id: 1,
    name: 'Introduction to Node.js',
    content: (
      <>
        <p>Node.js is an open-source, cross-platform JavaScript runtime environment built on Chrome's V8 JavaScript engine.</p>
        <p>It allows developers to run JavaScript code outside of the browser, primarily used for building fast and scalable server-side and networking applications.</p>
        <ul>
          <li>Single-threaded and event-driven</li>
          <li>Non-blocking I/O operations</li>
          <li>Commonly used for web servers, APIs, and real-time applications</li>
        </ul>
        <pre><code>{`console.log('Hello from Node.js!');`}</code></pre>
      </>
    ),
  },
  {
    id: 2,
    name: 'Setting Up Node.js',
    content: (
      <>
        <p>To get started with Node.js:</p>
        <ol>
          <li>Go to the <a href="https://nodejs.org/" target="_blank" rel="noreferrer">official Node.js website</a></li>
          <li>Download the LTS (Long-Term Support) version</li>
          <li>Install using the setup wizard</li>
        </ol>
        <p>Verify the installation:</p>
        <pre><code>{`node -v\nnpm -v`}</code></pre>
        <p>This checks if Node.js and npm (Node Package Manager) are installed.</p>
      </>
    ),
  },
  {
    id: 3,
    name: 'Node.js Modules',
    content: (
      <>
        <p>Modules are like JavaScript libraries that can be used in your Node.js application.</p>
        <ul>
          <li><strong>Built-in Modules</strong>: HTTP, Path, File System (fs)</li>
          <li><strong>User-defined Modules</strong>: Create your own reusable modules</li>
        </ul>
        <pre><code>{`// Using built-in fs module
const fs = require('fs');

fs.writeFileSync('hello.txt', 'Hello World');`}</code></pre>
      </>
    ),
  },
  {
    id: 4,
    name: 'Event Loop in Node.js',
    content: (
      <>
        <p>Node.js uses an event-driven architecture with an event loop that handles asynchronous operations.</p>
        <p>This allows Node.js to process many operations without blocking the main thread.</p>
        <pre><code>{`console.log('Start');
setTimeout(() => {
  console.log('This runs after 2 seconds');
}, 2000);
console.log('End');`}</code></pre>
        <p>Output:</p>
        <pre><code>{`Start\nEnd\nThis runs after 2 seconds`}</code></pre>
      </>
    ),
  },
  {
    id: 5,
    name: 'Express.js Framework',
    content: (
      <>
        <p>Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile apps.</p>
        <ul>
          <li>Routing</li>
          <li>Middleware support</li>
          <li>Request and response handling</li>
        </ul>
        <pre><code>{`const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});`}</code></pre>
      </>
    ),
  },
  {
    id: 6,
    name: 'Working with File System in Node.js',
    content: (
      <>
        <p>Node.js provides the <code>fs</code> module to interact with the file system.</p>
        <p>It supports both synchronous and asynchronous file operations.</p>
        <pre><code>{`const fs = require('fs');

// Write to a file
fs.writeFile('example.txt', 'Hello Node.js!', (err) => {
  if (err) throw err;
  console.log('File saved!');
});`}</code></pre>
      </>
    ),
  },
  {
    id: 7,
    name: 'Node.js Asynchronous Programming',
    content: (
      <>
        <p>Node.js is non-blocking and supports asynchronous programming using callbacks, promises, and async/await.</p>
        <pre><code>{`// Using promises
const fs = require('fs').promises;

async function readFile() {
  try {
    const data = await fs.readFile('example.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
readFile();`}</code></pre>
      </>
    ),
  },
  {
    id: 8,
    name: 'REST APIs with Node.js',
    content: (
      <>
        <p>Node.js and Express are widely used to build RESTful APIs.</p>
        <p>These APIs follow the HTTP protocol methods like GET, POST, PUT, DELETE.</p>
        <pre><code>{`const express = require('express');
const app = express();
app.use(express.json());

let users = [];

app.get('/users', (req, res) => res.json(users));

app.post('/users', (req, res) => {
  users.push(req.body);
  res.status(201).send('User added');
});

app.listen(3000);`}</code></pre>
      </>
    ),
  },
  {
    id: 9,
    name: 'Node.js Middleware',
    content: (
      <>
        <p>Middleware functions are functions that have access to the request and response objects.</p>
        <p>They can be used for logging, authentication, error handling, etc.</p>
        <pre><code>{`app.use((req, res, next) => {
  console.log('Request received at ' + new Date());
  next();
});`}</code></pre>
      </>
    ),
  },
  {
    id: 10,
    name: 'Error Handling in Node.js',
    content: (
      <>
        <p>Common error-handling techniques include:</p>
        <ul>
          <li>Try-catch blocks</li>
          <li>Error-first callbacks</li>
          <li>Custom error middleware in Express</li>
        </ul>
        <pre><code>{`// Express error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});`}</code></pre>
      </>
    ),
  },
  {
    id: 11,
    name: 'Node.js Streams',
    content: (
      <>
        <p>Streams are used to read and write data in chunks, making them efficient for handling large files or continuous data.</p>
        <p>There are four types of streams in Node.js:</p>
        <ul>
          <li><strong>Readable</strong> – stream from which data can be read</li>
          <li><strong>Writable</strong> – stream to which data can be written</li>
          <li><strong>Duplex</strong> – stream that is both readable and writable</li>
          <li><strong>Transform</strong> – stream that modifies the data while reading/writing</li>
        </ul>
        <pre><code>{`const fs = require('fs');
  const readStream = fs.createReadStream('largefile.txt', 'utf8');
  
  readStream.on('data', chunk => {
    console.log('Received:', chunk);
  });`}</code></pre>
      </>
    ),
  },
  {
    id: 12,
    name: 'Using npm (Node Package Manager)',
    content: (
      <>
        <p><strong>npm</strong> is the default package manager for Node.js. It allows you to install, manage, and share packages.</p>
        <ul>
          <li>Install a package: <code>npm install package-name</code></li>
          <li>Initialize a project: <code>npm init</code></li>
          <li>Install all dependencies: <code>npm install</code></li>
        </ul>
        <p>Example:</p>
        <pre><code>{`npm install express`}</code></pre>
        <p>This will install Express.js and add it to your <code>package.json</code>.</p>
      </>
    ),
  },
  {
    id: 13,
    name: 'WebSockets with Node.js',
    content: (
      <>
        <p>WebSockets provide a way to open a persistent connection between the client and server, enabling real-time data exchange.</p>
        <p>One of the most popular libraries for WebSockets in Node.js is <strong>Socket.IO</strong>.</p>
        <pre><code>{`const express = require('express');
  const http = require('http');
  const socketIo = require('socket.io');
  
  const app = express();
  const server = http.createServer(app);
  const io = socketIo(server);
  
  io.on('connection', (socket) => {
    console.log('User connected');
    socket.on('message', (msg) => {
      io.emit('message', msg);
    });
  });
  
  server.listen(3000, () => console.log('Server running on port 3000'));`}</code></pre>
      </>
    ),
  },
  {
    id: 14,
    name: 'Testing in Node.js',
    content: (
      <>
        <p>Testing helps ensure your Node.js applications work as expected. Popular testing frameworks include:</p>
        <ul>
          <li><strong>Mocha</strong> – test runner</li>
          <li><strong>Chai</strong> – assertion library</li>
          <li><strong>Jest</strong> – all-in-one solution</li>
        </ul>
        <p>Example with Mocha and Chai:</p>
        <pre><code>{`// test.js
  const assert = require('chai').assert;
  
  describe('Array', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });`}</code></pre>
        <p>Run test: <code>mocha test.js</code></p>
      </>
    ),
  },
  {
    id: 15,
    name: 'Deploying Node.js Applications',
    content: (
      <>
        <p>You can deploy your Node.js app on various platforms:</p>
        <ul>
          <li><strong>Heroku</strong> – quick cloud platform for Node.js</li>
          <li><strong>Vercel</strong> – great for frontend + API backend</li>
          <li><strong>AWS EC2</strong> – scalable, manual configuration</li>
        </ul>
        <p>Deployment steps:</p>
        <ol>
          <li>Push your code to GitHub</li>
          <li>Create an account on Heroku (or similar)</li>
          <li>Connect your GitHub repo and deploy</li>
        </ol>
        <p>Example start script in <code>package.json</code>:</p>
        <pre><code>{`"scripts": {
    "start": "node index.js"
  }`}</code></pre>
      </>
    ),
  },
  {
    id: 16,
    name: 'Environment Variables in Node.js',
    content: (
      <>
        <p>Environment variables are used to store sensitive data like API keys or configuration options outside of the codebase.</p>
        <p>Use the <code>process.env</code> object to access environment variables.</p>
        <p>You can define environment variables in a <code>.env</code> file using the <strong>dotenv</strong> package:</p>
        <pre><code>{`// .env
PORT=3000
API_KEY=your_api_key_here`}</code></pre>
        <pre><code>{`// index.js
require('dotenv').config();
console.log(process.env.PORT);`}</code></pre>
      </>
    ),
  },
  {
    id: 17,
    name: 'Using JSON in Node.js',
    content: (
      <>
        <p>JSON is commonly used in Node.js for data exchange and configuration.</p>
        <p>Use <code>require()</code> or <code>fs</code> module to read JSON files.</p>
        <pre><code>{`// sample.json
{
  "name": "NodeApp",
  "version": "1.0.0"
}`}</code></pre>
        <pre><code>{`// index.js
const data = require('./sample.json');
console.log(data.name); // NodeApp`}</code></pre>
      </>
    ),
  },
  {
    id: 18,
    name: 'Using Templates with Express',
    content: (
      <>
        <p>Template engines like EJS, Pug, or Handlebars let you create dynamic HTML pages.</p>
        <pre><code>{`// Using EJS
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { title: 'Welcome to Node.js' });
});`}</code></pre>
        <p>In <code>views/index.ejs</code>:</p>
        <pre><code>{`&lt;h1&gt;&lt;%= title %&gt;&lt;/h1&gt;`}</code></pre>
      </>
    ),
  },
  {
    id: 19,
    name: 'Authentication with Node.js',
    content: (
      <>
        <p>Authentication in Node.js is commonly done using libraries like <strong>Passport.js</strong> or <strong>jsonwebtoken (JWT)</strong>.</p>
        <p>Example with JWT:</p>
        <pre><code>{`const jwt = require('jsonwebtoken');

const token = jwt.sign({ userId: 123 }, 'secret_key', { expiresIn: '1h' });
const decoded = jwt.verify(token, 'secret_key');

console.log(decoded.userId); // 123`}</code></pre>
        <p>JWTs are commonly used for stateless authentication in APIs.</p>
      </>
    ),
  },
  {
    id: 20,
    name: 'Node.js with Databases (MongoDB Example)',
    content: (
      <>
        <p>Node.js can be connected to databases like MongoDB, MySQL, PostgreSQL, and more.</p>
        <p>Example with MongoDB using <strong>Mongoose</strong>:</p>
        <pre><code>{`const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = mongoose.model('User', {
  name: String,
  email: String,
});

const newUser = new User({ name: 'John', email: 'john@example.com' });
newUser.save();`}</code></pre>
      </>
    ),
  },


];
