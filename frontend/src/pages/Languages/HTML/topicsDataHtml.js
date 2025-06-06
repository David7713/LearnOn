export const topics = [
  {
    id: 1,
    name: 'HTML Home',
    content: (
      <>
        <p>
          HTML (HyperText Markup Language) is the foundational language of the web, used to create and structure web pages. 
          It provides the basic skeleton of a website, which is then enhanced by CSS for styling and JavaScript for interactivity.
        </p>
        <p>
          HTML documents consist of elements that define content and structure, enclosed within tags that tell browsers how to 
          render and display the content. Learning HTML is the essential first step in web development.
        </p>
        
        <h4>Basic HTML Document Structure:</h4>
        <pre>{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Web Page</title>
</head>
<body>
  <h1>Welcome to HTML</h1>
  <p>This is a paragraph in my first HTML document.</p>
</body>
</html>`}</pre>
      </>
    )
  },
  {
    id: 2,
    name: 'HTML Introduction',
    content: (
      <>
        <p>
          HTML was created by Tim Berners-Lee in 1991 and has evolved through several versions, with HTML5 being 
          the current standard. The language consists of:
        </p>
        <ul>
          <li><strong>HyperText:</strong> The method by which web pages link to each other</li>
          <li><strong>Markup:</strong> The way tags are used to define elements within a document</li>
        </ul>
        
        <h4>Key Features of HTML:</h4>
        <pre>{`<!-- Document Structure -->
<!DOCTYPE html>
<html>
  <!-- Head Section -->
  <head>
    <title>Page Title</title>
  </head>
  
  <!-- Body Section -->
  <body>
    <!-- Content Elements -->
    <h1>Main Heading</h1>
    <p>Paragraph text</p>
    <a href="https://example.com">Link</a>
    <img src="image.jpg" alt="Description">
  </body>
</html>`}</pre>
      </>
    )
  },
  {
    id: 3,
    name: 'HTML Basic Elements',
    content: (
      <>
        <p>
          HTML documents are composed of elements defined by tags. Here are some fundamental elements:
        </p>
        
        <h4>Common HTML Elements:</h4>
        <pre>{`<!-- Headings (h1-h6) -->
<h1>Main Heading</h1>
<h2>Subheading</h2>

<!-- Paragraph -->
<p>This is a paragraph of text.</p>

<!-- Links -->
<a href="https://example.com">Visit Example</a>

<!-- Images -->
<img src="photo.jpg" alt="A beautiful landscape" width="500">

<!-- Lists -->
<ul>
  <li>Unordered list item</li>
</ul>

<ol>
  <li>Ordered list item</li>
</ol>

<!-- Divisions -->
<div>Container for other elements</div>`}</pre>
        
        <h4>HTML Document Structure:</h4>
        <pre>{`<!DOCTYPE html>  <!-- Document type declaration -->
<html>         <!-- Root element -->
  <head>       <!-- Metadata container -->
    <meta charset="UTF-8">
    <title>Page Title</title>
  </head>
  <body>       <!-- Visible content -->
    <h1>Hello World</h1>
  </body>
</html>`}</pre>
      </>
    )
  },
  {
    id: 4,
    name: 'HTML Attributes',
    content: (
      <>
        <p>
          Attributes provide additional information about HTML elements and are always specified in the opening tag.
        </p>
        
        <h4>Common Attributes:</h4>
        <pre>{`<!-- Global Attributes -->
<div id="unique-id" class="class-name" style="color:red" title="Tooltip text">
  Content
</div>

<!-- Element-Specific Attributes -->
<a href="https://example.com" target="_blank">Link</a>
<img src="image.jpg" alt="Alternative text" width="300">
<input type="text" placeholder="Enter text" required>`}</pre>
        
        <h4>Data Attributes:</h4>
        <pre>{`<div data-user-id="12345" data-role="admin"></div>

<!-- Access in JavaScript -->
<script>
  const element = document.querySelector('div');
  console.log(element.dataset.userId); // "12345"
</script>`}</pre>
      </>
    )
  },
  {
    id: 5,
    name: 'HTML Semantic Elements',
    content: (
      <>
        <p>
          HTML5 introduced semantic elements that clearly describe their meaning to both browser and developer.
        </p>
        
        <h4>Semantic Structure Example:</h4>
        <pre>{`<header>
  <h1>Website Title</h1>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h2>Article Title</h2>
    <p>Article content...</p>
  </article>
  
  <aside>
    <h3>Related Links</h3>
    <ul>
      <li><a href="#">Link 1</a></li>
    </ul>
  </aside>
</main>

<footer>
  <p>&copy; 2023 Company Name</p>
</footer>`}</pre>
        
        <h4>Benefits of Semantic HTML:</h4>
        <ul>
          <li>Improved accessibility for screen readers</li>
          <li>Better SEO (Search Engine Optimization)</li>
          <li>Cleaner, more maintainable code</li>
          <li>Clearer document structure</li>
        </ul>
      </>
    )
  },
  {
    id: 6,
    name: 'HTML Forms',
    content: (
      <>
        <p>
          Forms collect user input and send it to a server for processing.
        </p>
        
        <h4>Complete Form Example:</h4>
        <pre>{`<form action="/submit" method="POST">
  <fieldset>
    <legend>Personal Information</legend>
    
    <div>
      <label for="name">Full Name:</label>
      <input type="text" id="name" name="name" required>
    </div>
    
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
    </div>
    
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" minlength="8" required>
    </div>
  </fieldset>
  
  <fieldset>
    <legend>Preferences</legend>
    
    <div>
      <label>
        <input type="checkbox" name="newsletter" checked>
        Subscribe to newsletter
      </label>
    </div>
    
    <div>
      <label>Gender:</label>
      <label><input type="radio" name="gender" value="male"> Male</label>
      <label><input type="radio" name="gender" value="female"> Female</label>
    </div>
    
    <div>
      <label for="country">Country:</label>
      <select id="country" name="country">
        <option value="us">United States</option>
        <option value="ca">Canada</option>
      </select>
    </div>
    
    <div>
      <label for="bio">Bio:</label>
      <textarea id="bio" name="bio" rows="4"></textarea>
    </div>
  </fieldset>
  
  <button type="submit">Submit</button>
  <button type="reset">Reset</button>
</form>`}</pre>
      </>
    )
  },
  {
    id: 7,
    name: 'HTML Tables',
    content: (
      <>
        <p>
          Tables display data in rows and columns. While they were once used for page layout, modern HTML uses 
          them strictly for tabular data.
        </p>
        
        <h4>Advanced Table Example:</h4>
        <pre>{`<table>
  <caption>Monthly Sales Report</caption>
  <thead>
    <tr>
      <th scope="col">Month</th>
      <th scope="col">Product A</th>
      <th scope="col">Product B</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">January</th>
      <td>$1,000</td>
      <td>$2,500</td>
      <td>$3,500</td>
    </tr>
    <tr>
      <th scope="row">February</th>
      <td>$1,200</td>
      <td>$2,800</td>
      <td>$4,000</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Total</th>
      <td>$2,200</td>
      <td>$5,300</td>
      <td>$7,500</td>
    </tr>
  </tfoot>
</table>`}</pre>
        
        <h4>Table Accessibility Features:</h4>
        <ul>
          <li><code>scope</code> attribute identifies header direction</li>
          <li><code>caption</code> provides a title for screen readers</li>
          <li><code>thead</code>, <code>tbody</code>, and <code>tfoot</code> for semantic grouping</li>
        </ul>
      </>
    )
  },
  {
    id: 8,
    name: 'HTML Multimedia',
    content: (
      <>
        <p>
          HTML5 provides native support for multimedia content without requiring plugins.
        </p>
        
        <h4>Image with Responsive Attributes:</h4>
        <pre>{`<img src="image.jpg" 
     srcset="image-320w.jpg 320w,
             image-480w.jpg 480w,
             image-800w.jpg 800w"
     sizes="(max-width: 600px) 480px,
            800px"
     alt="Descriptive text"
     loading="lazy">`}</pre>
        
        <h4>Audio and Video Elements:</h4>
        <pre>{`<!-- Audio Player -->
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>

<!-- Video Player -->
<video width="640" height="360" controls poster="preview.jpg">
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  <track src="subtitles.vtt" kind="subtitles" srclang="en" label="English">
  Your browser does not support the video tag.
</video>`}</pre>
      </>
    )
  },
  {
    id: 9,
    name: 'HTML5 APIs',
    content: (
      <>
        <p>
          HTML5 introduced several JavaScript APIs that work with HTML elements to create rich web applications.
        </p>
        
        <h4>Geolocation API Example:</h4>
        <pre>{`<button onclick="getLocation()">Get Location</button>
<p id="demo"></p>

<script>
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    document.getElementById("demo").innerHTML = "Geolocation not supported";
  }
}

function showPosition(position) {
  document.getElementById("demo").innerHTML = 
    "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}
</script>`}</pre>
        
        <h4>Web Storage Example:</h4>
        <pre>{`<script>
// Store data
localStorage.setItem('username', 'john_doe');

// Retrieve data
const user = localStorage.getItem('username');

// Remove data
localStorage.removeItem('username');
</script>`}</pre>
      </>
    )
  },
  {
    id: 10,
    name: 'HTML Accessibility',
    content: (
      <>
        <p>
          Accessible HTML ensures that websites can be used by everyone, including people with disabilities.
        </p>
        
        <h4>ARIA Landmarks Example:</h4>
        <pre>{`<div role="banner">Header content</div>
<nav role="navigation">Main menu</nav>
<main role="main">Primary content</main>
<aside role="complementary">Secondary content</aside>
<footer role="contentinfo">Footer content</footer>`}</pre>
        
        <h4>Accessible Form Example:</h4>
        <pre>{`<form>
  <div role="alert" id="error-message" aria-live="assertive"></div>
  
  <label for="search">Search:</label>
  <input type="search" id="search" name="search" 
         aria-describedby="search-help">
  <span id="search-help">Enter at least 3 characters</span>
  
  <button type="submit" aria-label="Submit search form">Go</button>
</form>`}</pre>
      </>
    )
  },
  {
    id: 11,
    name: 'HTML Meta Tags',
    content: (
      <>
        <p>
          Meta tags provide metadata about the HTML document that isn't displayed but is machine-readable.
        </p>
        
        <h4>Essential Meta Tags:</h4>
        <pre>{`<head>
  <!-- Character encoding -->
  <meta charset="UTF-8">
  
  <!-- Viewport for responsive design -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Page description -->
  <meta name="description" content="Free web development tutorials">
  
  <!-- Keywords for SEO -->
  <meta name="keywords" content="HTML, CSS, JavaScript">
  
  <!-- Author -->
  <meta name="author" content="John Doe">
  
  <!-- Refresh/redirect -->
  <meta http-equiv="refresh" content="30">
  
  <!-- Social media meta tags -->
  <meta property="og:title" content="HTML Tutorial">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://example.com">
  <meta property="og:image" content="image.jpg">
</head>`}</pre>
      </>
    )
  },
  {
    id: 12,
    name: 'HTML SEO Best Practices',
    content: (
      <>
        <p>
          Search Engine Optimization (SEO) helps websites rank higher in search results.
        </p>
        
        <h4>SEO-Friendly HTML Structure:</h4>
        <pre>{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Best HTML Tutorial - Learn HTML in 2023</title>
  <meta name="description" content="Comprehensive HTML tutorial covering all modern HTML5 features with examples and exercises.">
  <link rel="canonical" href="https://example.com/html-tutorial">
</head>
<body>
  <header>
    <h1>HTML5 Complete Tutorial</h1>
    <nav aria-label="Main navigation">...</nav>
  </header>
  
  <main>
    <article itemscope itemtype="https://schema.org/TechArticle">
      <h2 itemprop="headline">Getting Started with HTML</h2>
      <p itemprop="description">Learn the basics of HTML structure...</p>
    </article>
  </main>
</body>
</html>`}</pre>
        
        <h4>Key SEO Techniques:</h4>
        <ul>
          <li>Use semantic HTML5 elements</li>
          <li>Include descriptive title and meta description</li>
          <li>Use proper heading hierarchy (h1-h6)</li>
          <li>Add alt text to images</li>
          <li>Implement schema.org structured data</li>
          <li>Ensure fast page loading</li>
          <li>Create a sitemap.xml and robots.txt</li>
        </ul>
      </>
    )
  },
  {
    id: 13,
    name: 'HTML Canvas',
    content: (
      <>
        <p>
          The <code>&lt;canvas&gt;</code> element creates a drawing surface for JavaScript to render graphics, animations, and games.
        </p>
        
        <h4>Canvas Drawing Example:</h4>
        <pre>{`<canvas id="myCanvas" width="400" height="200"></canvas>

<script>
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Draw rectangle
ctx.fillStyle = 'blue';
ctx.fillRect(10, 10, 100, 50);

// Draw circle
ctx.beginPath();
ctx.arc(200, 100, 30, 0, Math.PI * 2);
ctx.fillStyle = 'red';
ctx.fill();

// Draw text
ctx.font = '20px Arial';
ctx.fillStyle = 'black';
ctx.fillText('Hello Canvas', 250, 50);
</script>`}</pre>
        
        <h4>Canvas Animation Example:</h4>
        <pre>{`<script>
let x = 0;
function animate() {
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');
  
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Draw moving rectangle
  ctx.fillStyle = 'green';
  ctx.fillRect(x, 50, 50, 50);
  
  // Update position
  x += 2;
  if (x > canvas.width) x = 0;
  
  // Continue animation
  requestAnimationFrame(animate);
}
animate();
</script>`}</pre>
      </>
    )
  },
  {
    id: 14,
    name: 'HTML Web Components',
    content: (
      <>
        <p>
          Web Components are a suite of technologies that allow you to create reusable custom elements.
        </p>
        
        <h4>Custom Element Example:</h4>
        <pre>{`<!-- Define template -->
<template id="user-card">
  <style>
    .card {
      border: 1px solid #ccc;
      padding: 10px;
      margin: 10px;
    }
  </style>
  <div class="card">
    <h2><slot name="name">Default Name</slot></h2>
    <p><slot name="email">default@example.com</slot></p>
  </div>
</template>

<!-- Use custom element -->
<user-card>
  <span slot="name">John Doe</span>
  <span slot="email">john@example.com</span>
</user-card>

<script>
class UserCard extends HTMLElement {
  constructor() {
    super();
    const template = document.getElementById('user-card');
    const templateContent = template.content;
    
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(templateContent.cloneNode(true));
  }
}

customElements.define('user-card', UserCard);
</script>`}</pre>
      </>
    )
  },
  {
    id: 15,
    name: 'HTML Best Practices',
    content: (
      <>
        <p>
          Following best practices ensures your HTML is maintainable, accessible, and performs well.
        </p>
        
        <h4>HTML Code Quality Checklist:</h4>
        <pre>{`<!DOCTYPE html>
<html lang="en">  <!-- Always specify language -->
<head>
  <!-- Character encoding first -->
  <meta charset="UTF-8">
  
  <!-- Responsive viewport -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Descriptive title -->
  <title>Page Title - Site Name</title>
  
  <!-- Favicon -->
  <link rel="icon" href="/favicon.ico" type="image/x-icon">
</head>
<body>
  <!-- Semantic structure -->
  <header role="banner">...</header>
  
  <main role="main">
    <!-- Proper heading hierarchy -->
    <h1>Main Page Heading</h1>
    
    <!-- Accessible images -->
    <img src="image.jpg" alt="Descriptive text" loading="lazy">
    
    <!-- Meaningful link text -->
    <a href="/about" aria-label="Learn more about us">About Us</a>
  </main>
  
  <!-- Valid HTML5 -->
  <footer role="contentinfo">...</footer>
  
  <!-- JavaScript at end of body -->
  <script src="script.js"></script>
</body>
</html>`}</pre>
        
        <h4>Key Best Practices:</h4>
        <ul>
          <li>Use semantic HTML5 elements</li>
          <li>Write valid, well-structured markup</li>
          <li>Ensure accessibility with proper ARIA attributes</li>
          <li>Optimize for performance (minimize DOM size, lazy loading)</li>
          <li>Separate content (HTML), presentation (CSS), and behavior (JavaScript)</li>
          <li>Use responsive design principles</li>
          <li>Implement progressive enhancement</li>
          <li>Test across browsers and devices</li>
        </ul>
      </>
    )
  },
  {
    id: 16,
    name: 'HTML Email Development',
    content: (
      <>
        <p>
          HTML emails require specific techniques due to limited CSS support in email clients.
        </p>
        
        <h4>HTML Email Template Structure:</h4>
        <pre>{`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Email Title</title>
  <style type="text/css">
    /* Client-specific resets */
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    
    /* Main styles */
    body { font-family: Arial, sans-serif; }
  </style>
</head>
<body style="margin: 0; padding: 0;">
  <!-- Email wrapper -->
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td align="center" valign="top">
        <!-- Main content table (600px wide) -->
        <table border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse;">
          <tr>
            <td style="padding: 20px 0; text-align: center;">
              <img src="logo.png" alt="Company Logo" width="200" style="display: block;" />
            </td>
          </tr>
          <tr>
            <td style="padding: 20px; background-color: #ffffff;">
              <h1 style="color: #333333;">Hello!</h1>
              <p style="color: #666666;">This is a sample email template.</p>
              <a href="https://example.com" style="background-color: #0066cc; color: #ffffff; display: inline-block; padding: 10px 20px; text-decoration: none;">Click Here</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 20px; text-align: center; font-size: 12px; color: #999999;">
              &copy; 2023 Company Name. All rights reserved.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`}</pre>
      </>
    )
  },
  {
    id: 17,
    name: 'HTML SVG Integration',
    content: (
      <>
        <p>
          SVG (Scalable Vector Graphics) can be directly embedded in HTML for resolution-independent graphics.
        </p>
        
        <h4>Inline SVG Example:</h4>
        <pre>{`<svg width="200" height="200" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
  <rect x="10" y="10" width="30" height="30" fill="blue" opacity="0.5" />
  <text x="50" y="90" text-anchor="middle" font-family="Arial" font-size="16">SVG</text>
</svg>`}</pre>
        
        <h4>Interactive SVG:</h4>
        <pre>{`<svg width="400" height="200">
  <rect id="myRect" x="50" y="50" width="100" height="50" fill="red" />
  <animate xlink:href="#myRect"
           attributeName="x" from="50" to="250" 
           dur="3s" repeatCount="indefinite" />
</svg>

<!-- Or with JavaScript -->
<script>
document.getElementById('myRect').addEventListener('click', function() {
  this.setAttribute('fill', 'blue');
});
</script>`}</pre>
      </>
    )
  },
  {
    id: 18,
    name: 'HTML Microdata',
    content: (
      <>
        <p>
          Microdata is a HTML5 specification used to nest structured data within HTML content.
        </p>
        
        <h4>Schema.org Markup Example:</h4>
        <pre>{`<div itemscope itemtype="https://schema.org/Person">
  <h1 itemprop="name">John Doe</h1>
  <p itemprop="jobTitle">Web Developer</p>
  <p>Phone: <span itemprop="telephone">(123) 456-7890</span></p>
  <p>Email: <span itemprop="email">john@example.com</span></p>
  
  <div itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
    <span itemprop="streetAddress">123 Main St</span>,
    <span itemprop="addressLocality">Anytown</span>,
    <span itemprop="addressRegion">CA</span>
    <span itemprop="postalCode">12345</span>
  </div>
</div>`}</pre>
        
        <h4>Rich Snippets Benefits:</h4>
        <ul>
          <li>Enhanced search results with star ratings, events, etc.</li>
          <li>Better understanding of content by search engines</li>
          <li>Potential for higher click-through rates</li>
          <li>Structured data for knowledge graphs</li>
        </ul>
      </>
    )
  },
  {
    id: 19,
    name: 'HTML Internationalization',
    content: (
      <>
        <p>
          Internationalization (i18n) prepares websites for multiple languages and regions.
        </p>
        
        <h4>i18n Techniques:</h4>
        <pre>{`<!DOCTYPE html>
<!-- Declare document language -->
<html lang="es" dir="ltr">
<head>
  <meta charset="UTF-8">
  <!-- Set content language -->
  <meta http-equiv="Content-Language" content="es">
</head>
<body>
  <!-- Bidirectional text support -->
  <p dir="rtl">هذا نص باللغة العربية</p>
  
  <!-- Language switching -->
  <a href="/en" hreflang="en" lang="en">English</a>
  <a href="/es" hreflang="es" lang="es">Español</a>
  
  <!-- Date/Time formatting -->
  <time datetime="2023-12-25">25 de Diciembre, 2023</time>
  
  <!-- Number formatting -->
  <data value="1234.56">1.234,56</data>
</body>
</html>`}</pre>
      </>
    )
  },
  {
    id: 20,
    name: 'HTML Performance Optimization',
    content: (
      <>
        <p>
          Optimizing HTML improves page load times and user experience.
        </p>
        
        <h4>HTML Optimization Techniques:</h4>
        <pre>{`<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Preload critical resources -->
  <link rel="preload" href="style.css" as="style">
  <link rel="preload" href="script.js" as="script">
  
  <!-- Preconnect to external domains -->
  <link rel="preconnect" href="https://fonts.gstatic.com">
  
  <!-- Load CSS asynchronously -->
  <link rel="stylesheet" href="style.css" media="print" onload="this.media='all'">
  
  <!-- Defer non-critical JavaScript -->
  <script src="script.js" defer></script>
</head>
<body>
  <!-- Lazy load images below the fold -->
  <img src="placeholder.jpg" data-src="image.jpg" loading="lazy" alt="Description" width="600" height="400">
  
  <!-- Use efficient HTML structure -->
  <div class="content">
    <!-- Content goes here -->
  </div>
  
  <!-- Inline critical CSS -->
  <style>
    .critical { color: red; }
  </style>
  
  <!-- Load non-critical JS last -->
  <script>
    window.addEventListener('load', function() {
      const script = document.createElement('script');
      script.src = 'non-critical.js';
      document.body.appendChild(script);
    });
  </script>
</body>
</html>`}</pre>
        
        <h4>Key Optimization Strategies:</h4>
        <ul>
          <li>Minify HTML, CSS, and JavaScript</li>
          <li>Use lazy loading for images and iframes</li>
          <li>Implement proper caching headers</li>
          <li>Reduce DOM complexity</li>
          <li>Prioritize visible content (above-the-fold)</li>
          <li>Use efficient CSS selectors</li>
          <li>Optimize the critical rendering path</li>
        </ul>
      </>
    )
  }
];