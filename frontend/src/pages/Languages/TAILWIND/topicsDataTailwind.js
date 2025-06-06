export const topicsDataTailwind = [
  {
    id: 1,
    name: 'Introduction to Tailwind CSS',
    content: (
      <>
        <p className="mb-4">
          Tailwind CSS is a utility-first CSS framework that enables rapid UI development by providing low-level utility classes that can be composed to build any design directly in your markup.
        </p>
        
        <div className="bg-gray-100 p-4 rounded-lg">
          <h4 className="font-bold text-lg mb-2">Key Features:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Utility-first approach with hundreds of classes</li>
            <li>No opinion about how your site should look</li>
            <li>Responsive design built into every utility</li>
            <li>Customizable design system</li>
            <li>Small production bundle size through PurgeCSS</li>
          </ul>
        </div>

        <div className="mt-6">
          <h4 className="font-bold text-lg mb-2">Basic Example:</h4>
          <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">{`<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click Me
</button>`}</pre>
        </div>
      </>
    )
  },
  {
    id: 2,
    name: 'Setting Up Tailwind CSS',
    content: (
      <>
        <div className="space-y-4">
          <p>Setting up Tailwind CSS is straightforward with modern JavaScript build tools.</p>

          <div>
            <h4 className="font-bold text-lg mb-2">Installation:</h4>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg">{`# Using npm
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init`}</pre>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">Basic Configuration:</h4>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg">{`// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}`}</pre>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">CSS Setup:</h4>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg">{`/* src/styles.css */
@tailwind base;
@tailwind components;
@tailwind utilities;`}</pre>
          </div>
        </div>
      </>
    )
  },
  {
    id: 3,
    name: 'Using Tailwind CSS Utilities',
    content: (
      <>
        <div className="space-y-6">
          <p>Tailwind provides utility classes for nearly every CSS property you might need.</p>

          <div>
            <h4 className="font-bold text-lg mb-2">Common Utility Examples:</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Spacing</h5>
                <pre className="text-sm">{`<div class="m-4 p-4">Margin & Padding</div>
<div class="mt-2 mr-4 mb-6 ml-8">Directional spacing</div>`}</pre>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Colors</h5>
                <pre className="text-sm">{`<div class="bg-blue-500 text-white">Background</div>
<div class="text-red-600 hover:text-red-800">Text color</div>`}</pre>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Typography</h5>
                <pre className="text-sm">{`<h1 class="text-4xl font-bold">Heading</h1>
<p class="text-lg leading-relaxed">Paragraph</p>`}</pre>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Borders</h5>
                <pre className="text-sm">{`<div class="border border-gray-300 rounded-lg">
  Rounded border
</div>`}</pre>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">Hover and Focus States:</h4>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg">{`<button class="bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300">
  Interactive Button
</button>`}</pre>
          </div>
        </div>
      </>
    )
  },
  {
    id: 4,
    name: 'Customizing Tailwind CSS',
    content: (
      <>
        <div className="space-y-6">
          <p>Tailwind is designed to be customized through its configuration file.</p>

          <div>
            <h4 className="font-bold text-lg mb-2">Extending the Theme:</h4>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg">{`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1992d4',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
      }
    },
  },
}`}</pre>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">Adding Custom Fonts:</h4>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg">{`module.exports = {
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ['Fira Code', 'monospace'],
    },
  },
}`}</pre>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">Custom Breakpoints:</h4>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg">{`module.exports = {
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
  },
}`}</pre>
          </div>
        </div>
      </>
    )
  },
  {
    id: 5,
    name: 'Responsive Design with Tailwind CSS',
    content: (
      <>
        <div className="space-y-6">
          <p>Tailwind makes responsive design simple with intuitive breakpoint prefixes.</p>

          <div>
            <h4 className="font-bold text-lg mb-2">Responsive Utilities:</h4>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg">{`<!-- Default (mobile-first) -->
<div class="text-center md:text-left lg:text-right">
  Responsive text alignment
</div>

<!-- Stack vertically on mobile, row on larger screens -->
<div class="flex flex-col md:flex-row">
  <div class="w-full md:w-1/2">Column 1</div>
  <div class="w-full md:w-1/2">Column 2</div>
</div>`}</pre>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">Breakpoint Reference:</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border">Prefix</th>
                    <th className="px-4 py-2 border">Min-width</th>
                    <th className="px-4 py-2 border">CSS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border"><code>sm:</code></td>
                    <td className="px-4 py-2 border">640px</td>
                    <td className="px-4 py-2 border"><code>@media (min-width: 640px)</code></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border"><code>md:</code></td>
                    <td className="px-4 py-2 border">768px</td>
                    <td className="px-4 py-2 border"><code>@media (min-width: 768px)</code></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border"><code>lg:</code></td>
                    <td className="px-4 py-2 border">1024px</td>
                    <td className="px-4 py-2 border"><code>@media (min-width: 1024px)</code></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border"><code>xl:</code></td>
                    <td className="px-4 py-2 border">1280px</td>
                    <td className="px-4 py-2 border"><code>@media (min-width: 1280px)</code></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    )
  },
  {
    id: 6,
    name: 'Tailwind CSS Flexbox & Grid',
    content: (
      <>
        <div className="space-y-6">
          <p>Tailwind provides comprehensive utilities for both Flexbox and CSS Grid layouts.</p>

          <div>
            <h4 className="font-bold text-lg mb-2">Flexbox Examples:</h4>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg">{`<!-- Flex container -->
<div class="flex flex-col sm:flex-row">
  <!-- Flex items -->
  <div class="flex-1">Item 1</div>
  <div class="flex-1">Item 2</div>
  <div class="flex-none w-32">Fixed Width</div>
</div>

<!-- Centering content -->
<div class="flex items-center justify-center h-64">
  Centered Content
</div>`}</pre>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">Grid Examples:</h4>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg">{`<!-- Basic grid -->
<div class="grid grid-cols-3 gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</div>

<!-- Responsive grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <div class="col-span-1">Item</div>
  <div class="md:col-span-2 lg:col-span-3">Wider Item</div>
</div>`}</pre>
          </div>
        </div>
      </>
    )
  },
  {
    id: 7,
    name: 'Tailwind CSS Components',
    content: (
      <>
        <div className="space-y-6">
          <p>While Tailwind encourages utility classes, you can create reusable components in several ways.</p>

          <div>
            <h4 className="font-bold text-lg mb-2">Button Component Example:</h4>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg">{`<!-- Repeating button styles -->
<button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
  Primary Button
</button>

<!-- Using @apply in CSS -->
<style>
  .btn {
    @apply px-4 py-2 rounded transition;
  }
  .btn-primary {
    @apply bg-blue-500 text-white hover:bg-blue-600;
  }
</style>
<button class="btn btn-primary">Styled Button</button>`}</pre>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">Card Component:</h4>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg">{`<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="/img/card-top.jpg" alt="Card image">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Card Title</div>
    <p class="text-gray-700 text-base">
      Card content goes here...
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag</span>
  </div>
</div>`}</pre>
          </div>
        </div>
      </>
    )
  },
  {
    id: 8,
    name: 'Tailwind CSS Animations and Transitions',
    content: (
      <>
        <div className="space-y-6">
          <p>Tailwind provides utilities for adding smooth transitions and animations to your elements.</p>

          <div>
            <h4 className="font-bold text-lg mb-2">Transition Utilities:</h4>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg">{`<button class="transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
  Hover Effect
</button>

<!-- Fade in/out -->
<div class="opacity-0 hover:opacity-100 transition-opacity duration-200">
  Content appears on hover
</div>`}</pre>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">Custom Animations:</h4>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg">{`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
}

<!-- Usage -->
<div class="animate-wiggle">Wiggling element</div>`}</pre>
          </div>
        </div>
      </>
    )
  },
  {
    id: 9,
    name: 'Tailwind CSS Dark Mode',
    content: (
      <>
        <div className="space-y-6">
          <p>Tailwind makes it easy to implement dark mode in your applications.</p>

          <div>
            <h4 className="font-bold text-lg mb-2">Configuration:</h4>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg">{`// tailwind.config.js
module.exports = {
  darkMode: 'class', // or 'media' for OS preference
  // ...
}`}</pre>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">Usage Examples:</h4>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg">{`<!-- Using class strategy -->
<html class="dark">
<body class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  <!-- Content -->
</body>
</html>

<!-- Toggle button -->
<button onclick="document.documentElement.classList.toggle('dark')">
  Toggle Dark Mode
</button>`}</pre>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">Media Strategy (OS Preference):</h4>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg">{`<!-- Automatically responds to OS dark mode preference -->
<div class="bg-white dark:bg-gray-800">
  Content changes based on system preference
</div>`}</pre>
          </div>
        </div>
      </>
    )
  },
  {
    id: 10,
    name: 'Tailwind CSS Typography Plugin',
    content: (
      <>
        <div className="space-y-6">
          <p>The official Typography plugin provides beautiful typographic defaults for HTML content.</p>

          <div>
            <h4 className="font-bold text-lg mb-2">Installation:</h4>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg">{`npm install @tailwindcss/typography

// tailwind.config.js
module.exports = {
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}`}</pre>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">Usage:</h4>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg">{`<!-- Apply to rich text content -->
<article class="prose prose-lg max-w-none">
  <h1>Article Title</h1>
  <p>Article content with <a href="#">links</a>, lists, and more...</p>
  <ul>
    <li>List item 1</li>
    <li>List item 2</li>
  </ul>
</article>

<!-- Customization -->
<article class="prose prose-indigo prose-lg dark:prose-invert">
  <!-- Styled content -->
</article>`}</pre>
          </div>
        </div>
      </>
    )
  },
  {
    id: 11,
    name: 'Tailwind CSS with React',
    content: (
      <>
        <div className="space-y-6">
          <p>Tailwind works beautifully with React, especially when using utility classes directly in JSX.</p>

          <div>
            <h4 className="font-bold text-lg mb-2">Component Example:</h4>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg">{`function Card({ title, children }) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {title}
          </div>
          <p className="mt-2 text-gray-500">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}`}</pre>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">Dynamic Classes:</h4>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg">{`function Button({ primary, children }) {
  const classes = \`px-4 py-2 rounded font-medium \${
    primary 
      ? 'bg-blue-500 text-white hover:bg-blue-600' 
      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
  }\`;
  
  return <button className={classes}>{children}</button>;
}`}</pre>
          </div>
        </div>
      </>
    )
  },
  {
    id: 12,
    name: 'Tailwind CSS with PostCSS',
    content: (
      <>
        <div className="space-y-6">
          <p>Tailwind is built on PostCSS, which allows for powerful CSS processing.</p>

          <div>
            <h4 className="font-bold text-lg mb-2">PostCSS Configuration:</h4>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg">{`// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`}</pre>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">Using @apply:</h4>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg">{`/* components.css */
.btn {
  @apply px-4 py-2 rounded font-semibold;
}
.btn-primary {
  @apply bg-blue-500 text-white hover:bg-blue-600;
}

/* In your HTML */
<button class="btn btn-primary">Click me</button>`}</pre>
            <p className="mt-2 text-sm text-gray-600">Note: Use @apply sparingly - utility classes are preferred in most cases.</p>
          </div>
        </div>
      </>
    )
  },
  {
    id: 13,
    name: 'Tailwind CSS Forms',
    content: (
      <>
        <div className="space-y-6">
          <p>The official Forms plugin provides basic reset styles for form elements.</p>

          <div>
            <h4 className="font-bold text-lg mb-2">Installation:</h4>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg">{`npm install @tailwindcss/forms

// tailwind.config.js
module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}`}</pre>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">Form Examples:</h4>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg">{`<form class="space-y-4">
  <div>
    <label class="block text-sm font-medium text-gray-700">Email</label>
    <input type="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
  </div>
  
  <div>
    <label class="block text-sm font-medium text-gray-700">Password</label>
    <input type="password" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
  </div>
  
  <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
    Sign in
  </button>
</form>`}</pre>
          </div>
        </div>
      </>
    )
  },
  {
    id: 14,
    name: 'Tailwind CSS with Next.js',
    content: (
      <>
        <div className="space-y-6">
          <p>Next.js has excellent support for Tailwind CSS out of the box.</p>

          <div>
            <h4 className="font-bold text-lg mb-2">Automatic Setup:</h4>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg">{`npx create-next-app --example with-tailwindcss my-app
cd my-app
npm run dev`}</pre>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">Manual Setup:</h4>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg">{`// Install dependencies
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

// Configure tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // ...
}

// Add to styles/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;`}</pre>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">Next.js + Tailwind Example:</h4>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg">{`// pages/index.js
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Welcome to Next.js + Tailwind
        </h1>
      </main>
    </div>
  );
}`}</pre>
          </div>
        </div>
      </>
    )
  },
  {
    id: 15,
    name: 'Best Practices with Tailwind CSS',
    content: (
      <>
        <div className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-bold text-lg mb-2 text-blue-800">Do's and Don'ts</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-green-700">Recommended</h5>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Use utility classes directly in markup</li>
                  <li>Extract repeated patterns into components</li>
                  <li>Customize your design system in tailwind.config.js</li>
                  <li>Use responsive prefixes (md:, lg:)</li>
                  <li>Enable PurgeCSS for production</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-red-700">Avoid</h5>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Overusing @apply to create custom classes</li>
                  <li>Adding arbitrary values when theme extension would work</li>
                  <li>Using !important (Tailwind utilities already have high specificity)</li>
                  <li>Adding too many custom variants</li>
                  <li>Forgetting to optimize for production</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">Performance Tips:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Always configure PurgeCSS to remove unused styles in production</li>
              <li>Use JIT mode (just-in-time compiler) for faster builds</li>
              <li>Consider using CDN for prototyping (not for production)</li>
              <li>Organize your utilities logically for better readability</li>
              <li>Use editor extensions for autocompletion</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">File Organization:</h4>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg">{`project/
├── src/
│   ├── components/      # Reusable components
│   │   ├── Button.jsx
│   │   └── Card.jsx
│   ├── pages/           # Page components
│   ├── styles/
│   │   ├── globals.css  # Tailwind imports
│   │   └── components.css # @apply classes if needed
├── tailwind.config.js   # Design system config
└── postcss.config.js`}</pre>
          </div>
        </div>
      </>
    )
  }
];