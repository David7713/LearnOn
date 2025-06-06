export const topics = [
  {
    id: 1,
    name: 'CSS Home',
    content: (
      <>
        <h3>Welcome to CSS</h3>
        <p>CSS (Cascading Style Sheets) describes how HTML elements are to be displayed on screen, paper, or in other media.</p>
        <p>It allows you to control layout, colors, fonts, spacing, and more!</p>
        <p>Example:</p>
        <code>
          body &#123; <br />
          &nbsp;&nbsp;background-color: lightblue; <br />
          &#125;
        </code>
      </>
    )
  },
  {
    id: 2,
    name: 'CSS Introduction',
    content: (
      <>
        <h3>What is CSS?</h3>
        <ul>
          <li>CSS stands for Cascading Style Sheets</li>
          <li>CSS describes how HTML elements are to be displayed</li>
          <li>CSS saves a lot of work — it can control the layout of multiple web pages all at once</li>
        </ul>
        <p>Example:</p>
        <code>
          h1 &#123; color: navy; font-size: 2em; &#125;
        </code>
      </>
    )
  },
  {
    id: 3,
    name: 'CSS Syntax',
    content: (
      <>
        <h3>CSS Syntax</h3>
        <p>A CSS rule consists of a selector and a declaration block:</p>
        <code>
          selector &#123; property: value; &#125;
        </code>
        <p>Example:</p>
        <code>
          p &#123; color: red; font-size: 16px; &#125;
        </code>
      </>
    )
  },
  {
    id: 4,
    name: 'CSS Selectors',
    content: (
      <>
        <h3>CSS Selectors</h3>
        <p>Selectors are used to "find" (or select) the HTML elements you want to style.</p>
        <ul>
          <li><code>element</code>: <code>p</code>, <code>h1</code></li>
          <li><code>class</code>: <code>.menu</code></li>
          <li><code>id</code>: <code>#header</code></li>
          <li><code>*</code>: selects all elements</li>
        </ul>
      </>
    )
  },
  {
    id: 5,
    name: 'CSS Colors',
    content: (
      <>
        <h3>CSS Colors</h3>
        <p>You can define colors using:</p>
        <ul>
          <li>Color names: <code>red</code>, <code>blue</code></li>
          <li>Hex codes: <code>#ff0000</code></li>
          <li>RGB/RGBA: <code>rgb(255, 0, 0)</code></li>
          <li>HSL/HSLA: <code>hsl(0, 100%, 50%)</code></li>
        </ul>
      </>
    )
  },
  {
    id: 6,
    name: 'CSS Backgrounds',
    content: (
      <>
        <h3>CSS Backgrounds</h3>
        <p>Background properties let you control background color, images, position, and repeat behavior.</p>
        <code>
          body &#123;<br />
          &nbsp;&nbsp;background-color: #f0f0f0;<br />
          &nbsp;&nbsp;background-image: url('bg.jpg');<br />
          &nbsp;&nbsp;background-repeat: no-repeat;<br />
          &nbsp;&nbsp;background-size: cover;<br />
          &#125;
        </code>
      </>
    )
  },
  {
    id: 7,
    name: 'CSS Borders',
    content: (
      <>
        <h3>CSS Borders</h3>
        <p>Use borders to outline elements. You can set border width, color, and style.</p>
        <code>
          div &#123;<br />
          &nbsp;&nbsp;border: 2px solid black;<br />
          &#125;
        </code>
      </>
    )
  },
  {
    id: 8,
    name: 'CSS Margins and Paddings',
    content: (
      <>
        <h3>Margins & Paddings</h3>
        <ul>
          <li><strong>Margin</strong>: Space outside an element</li>
          <li><strong>Padding</strong>: Space inside an element</li>
        </ul>
        <code>
          .box &#123;<br />
          &nbsp;&nbsp;margin: 20px;<br />
          &nbsp;&nbsp;padding: 10px;<br />
          &#125;
        </code>
      </>
    )
  },
  {
    id: 9,
    name: 'CSS Variables',
    content: (
      <>
        <h3>CSS Variables</h3>
        <p>CSS Variables are custom properties you can reuse throughout your stylesheet.</p>
        <code>
          :root &#123;<br />
          &nbsp;&nbsp;--main-color: #3498db;<br />
          &#125;<br /><br />
          h1 &#123;<br />
          &nbsp;&nbsp;color: var(--main-color);<br />
          &#125;
        </code>
      </>
    )
  },
  {
    id: 10,
    name: 'CSS Media Queries',
    content: (
      <>
        <h3>CSS Media Queries</h3>
        <p>Media queries are used to apply styles based on screen size or device characteristics.</p>
        <code>
          @media (max-width: 600px) &#123;<br />
          &nbsp;&nbsp;body &#123; font-size: 14px; &#125;<br />
          &#125;
        </code>
      </>
    )
  },
  {
    id: 11,
    name: 'CSS Flexbox',
    content: (
      <>
        <h3>CSS Flexbox</h3>
        <p>Flexbox is a layout module that provides an easy way to align and distribute space among items in a container.</p>
        <code>
          .container &#123;<br />
          &nbsp;&nbsp;display: flex;<br />
          &nbsp;&nbsp;justify-content: space-between;<br />
          &nbsp;&nbsp;align-items: center;<br />
          &#125;
        </code>
      </>
    )
  },
  {
    id: 12,
    name: 'CSS Grid',
    content: (
      <>
        <h3>CSS Grid</h3>
        <p>Grid is a 2D layout system for building complex responsive designs with rows and columns.</p>
        <code>
          .grid &#123;<br />
          &nbsp;&nbsp;display: grid;<br />
          &nbsp;&nbsp;grid-template-columns: repeat(3, 1fr);<br />
          &nbsp;&nbsp;gap: 10px;<br />
          &#125;
        </code>
      </>
    )
  },
  {
    id: 13,
    name: 'CSS Positioning',
    content: (
      <>
        <h3>CSS Positioning</h3>
        <p>CSS allows positioning elements using:</p>
        <ul>
          <li><code>static</code> (default)</li>
          <li><code>relative</code></li>
          <li><code>absolute</code></li>
          <li><code>fixed</code></li>
          <li><code>sticky</code></li>
        </ul>
        <code>
          .box &#123; position: absolute; top: 10px; left: 20px; &#125;
        </code>
      </>
    )
  },
  {
    id: 14,
    name: 'CSS Animations',
    content: (
      <>
        <h3>CSS Animations</h3>
        <p>Create animations using keyframes and animation properties.</p>
        <code>
          @keyframes fadeIn &#123;<br />
          &nbsp;&nbsp;from &#123; opacity: 0; &#125;<br />
          &nbsp;&nbsp;to &#123; opacity: 1; &#125;<br />
          &#125;<br /><br />
          .fade &#123;<br />
          &nbsp;&nbsp;animation: fadeIn 2s ease-in;<br />
          &#125;
        </code>
      </>
    )
  },
  {
    id: 15,
    name: 'CSS Transitions',
    content: (
      <>
        <h3>CSS Transitions</h3>
        <p>Transitions allow smooth changes from one state to another.</p>
        <code>
          button &#123;<br />
          &nbsp;&nbsp;background: red;<br />
          &nbsp;&nbsp;transition: background 0.3s ease;<br />
          &#125;<br />
          button:hover &#123;<br />
          &nbsp;&nbsp;background: green;<br />
          &#125;
        </code>
      </>
    )
  },
  {
    id: 16,
    name: 'CSS Units',
    content: (
      <>
        <h3>CSS Units</h3>
        <p>CSS supports both absolute and relative units:</p>
        <ul>
          <li><strong>Absolute</strong>: px, cm, mm, in</li>
          <li><strong>Relative</strong>: %, em, rem, vw, vh</li>
        </ul>
        <code>
          h1 &#123; font-size: 2em; &#125;<br />
          .container &#123; width: 80vw; &#125;
        </code>
      </>
    )
  },
  {
    id: 17,
    name: 'CSS Specificity',
    content: (
      <>
        <h3>CSS Specificity</h3>
        <p>Specificity determines which rule takes precedence when multiple rules match an element.</p>
        <p>Hierarchy:</p>
        <ol>
          <li>Inline styles</li>
          <li>ID selectors</li>
          <li>Classes, attributes, pseudo-classes</li>
          <li>Elements and pseudo-elements</li>
        </ol>
        <code>
          #title &#123; color: red; &#125; <br />
          .title &#123; color: blue; &#125;
        </code>
      </>
    )
  },
  {
    id: 18,
    name: 'CSS Functions',
    content: (
      <>
        <h3>CSS Functions</h3>
        <ul>
          <li><code>calc()</code> — Perform calculations</li>
          <li><code>var()</code> — Use CSS variables</li>
          <li><code>clamp()</code> — Responsive min/max sizing</li>
        </ul>
        <code>
          width: calc(100% - 100px);<br />
          font-size: clamp(1rem, 2vw, 3rem);
        </code>
      </>
    )
  }
];
