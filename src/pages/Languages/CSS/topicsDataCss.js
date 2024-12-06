export const topics = [
  {
    id: 1,
    name: 'CSS Home',
    content: 
      `CSS, or Cascading Style Sheets, is a stylesheet language used to define the visual appearance of a webpage. 
      By separating structure (HTML) from design (CSS), it makes web development more efficient and maintainable. 
      CSS allows you to apply consistent styles across multiple pages by defining rules for colors, fonts, layouts, 
      and responsiveness. It also helps in controlling the positioning of elements, adjusting their size, and creating 
      interactive effects. A simple CSS rule might look like this: 
      \`h1 { color: blue; }\`. This rule selects all <h1> elements and changes their color to blue. 
      Modern CSS also includes advanced features like Flexbox, Grid, and animations. These allow for highly dynamic layouts 
      that adapt to screen size changes, making websites responsive. With the rise of responsive design, CSS became crucial for 
      ensuring that webpages look great on any device. From mobile phones to desktops, CSS helps achieve layouts that adjust fluidly. 
      Understanding CSS is essential for any web developer, as it is the foundation for creating visually attractive and accessible websites.`
  },
  {
    id: 2,
    name: 'CSS Introduction',
    content: 
      `CSS was developed by Håkon Wium Lie and Bert Bos in 1994 and quickly became the standard way to style webpages. 
      Prior to CSS, all webpage styling was handled through HTML attributes like <font> and <center>, which were 
      inefficient and lacked flexibility. With CSS, developers can now control the layout, typography, colors, and much more, 
      separating structure from style. A fundamental CSS rule might look like this: 
      \`.container { margin: 0 auto; width: 80%; }\`, which centers a container element on the page and gives it a width of 80%. 
      Over the years, CSS has evolved with the introduction of new techniques like Flexbox, CSS Grid, and CSS Variables. 
      These features allow developers to create more complex and dynamic designs without relying on extra libraries or JavaScript. 
      One of the key benefits of CSS is its ability to apply styles globally. By linking a CSS file to an HTML document, 
      developers can style an entire website consistently, which is critical for scalability. CSS is also crucial for 
      building mobile-responsive websites. Through techniques like media queries, CSS adapts the layout to different screen sizes. 
      Understanding CSS's history and capabilities is essential for modern web development.`
  },
  {
    id: 3,
    name: 'CSS Selectors',
    content: 
      `CSS selectors are used to target specific elements on a webpage for styling. A simple selector might target an HTML 
      element, such as a paragraph (\`p\`), or a class (\`.container\`) or an ID (\`#header\`). More complex selectors include 
      pseudo-classes and pseudo-elements. Pseudo-classes like \`:hover\` apply styles when a user interacts with an element, 
      such as when a user hovers over a link. Example: 
      \`a:hover { color: red; }\` changes the color of links to red when hovered over. Pseudo-elements like \`::before\` and 
      \`::after\` allow you to add content before or after an element's content. For instance, 
      \`p::after { content: " (read more)"; }\` would append the text "(read more)" to every paragraph. 
      More advanced selectors include descendant selectors (e.g., \`div p\`), which target <p> elements inside <div> tags, 
      and attribute selectors (e.g., \`input[type="text"]\`) which target <input> elements with specific attributes. 
      CSS selectors provide flexibility and precision when styling, ensuring that only the intended elements are affected.`
  },
  {
    id: 4,
    name: 'CSS Box Model',
    content: 
      `The CSS box model is a fundamental concept for understanding layout and element dimensions. It consists of four parts: 
      content, padding, border, and margin. The content area is where the text or image is displayed. Padding adds space around the 
      content, while the border surrounds the padding, and the margin creates space between the element and surrounding elements. 
      The total width and height of an element are calculated by adding the width of the content, padding, border, and margin. 
      For example, if an element has a width of 100px, padding of 10px, a 5px border, and a margin of 20px, the total width 
      of the element will be 100px + 10px + 10px (padding on both sides) + 5px + 5px (border on both sides) + 20px + 20px 
      (margin on both sides), totaling 180px. The box model is essential for precise control over element layout. 
      Understanding the box model is especially useful when designing complex layouts or working with responsive designs. 
      In Flexbox and Grid layouts, the box model plays a crucial role in determining how elements are spaced and aligned.`
  },
  {
    id: 5,
    name: 'CSS Flexbox',
    content: 
      `Flexbox is a CSS layout module designed to arrange elements in a one-dimensional row or column. It simplifies the process of 
      creating complex layouts by offering more control over alignment, spacing, and distribution of items. The flex container is 
      defined using \`display: flex;\`, and its children (flex items) are arranged based on properties like \`justify-content\`, 
      \`align-items\`, and \`flex-direction\`. \`justify-content\` controls horizontal alignment (e.g., \`center\` or \`space-between\`), 
      while \`align-items\` controls vertical alignment (e.g., \`flex-start\`, \`center\`). The \`flex-direction\` property 
      determines the direction of the items—either row (default) or column. Example:
      \`.container { display: flex; justify-content: space-between; }\` places items within a container with equal spacing. 
      Flexbox also provides a way to control the order of items, even if they appear differently in the HTML. 
      Flexbox is incredibly useful for building responsive designs because it allows the layout to adapt to screen size changes.`
  },
  {
    id: 6,
    name: 'CSS Grid',
    content: 
      `CSS Grid is a two-dimensional layout system that enables complex grid-based designs. Unlike Flexbox, which works 
      on a single axis, Grid lets you control both rows and columns simultaneously. To define a grid container, 
      you use \`display: grid;\`. You can then specify the number of rows and columns with \`grid-template-rows\` and 
      \`grid-template-columns\`. For example: 
      \`.container { display: grid; grid-template-columns: 1fr 1fr 1fr; }\` creates a three-column grid. 
      The \`fr\` unit represents a fraction of the available space, and you can adjust it to fit your layout needs. 
      Grid also provides powerful features like \`grid-gap\` for spacing between rows and columns, 
      and the ability to place items explicitly within the grid using \`grid-column\` and \`grid-row\` properties. 
      CSS Grid is perfect for creating responsive designs, as it allows for intricate layouts without extra markup. 
      You can also use CSS Grid with media queries to create different grid structures for different screen sizes.`
  },
  {
    id: 7,
    name: 'CSS Positioning',
    content: 
      `CSS positioning controls where elements are placed on a webpage. The position property has several values: 
      \`static\`, \`relative\`, \`absolute\`, and \`fixed\`. 
      - \`static\` is the default value, where elements are positioned according to the normal document flow. 
      - \`relative\` allows you to position an element relative to its normal position by using \`top\`, \`right\`, \`bottom\`, and \`left\`. 
      - \`absolute\` removes the element from the document flow and positions it relative to its nearest positioned ancestor. 
      - \`fixed\` keeps an element fixed in place even when the page is scrolled. 
      Example:
      \`.fixed-header { position: fixed; top: 0; width: 100%; }\` creates a header that stays at the top of the page. 
      The \`sticky\` value allows an element to "stick" in place when it reaches a certain position on the screen. 
      Positioning is essential for building interactive elements like sticky menus, modals, and dropdowns.`
  },
  {
    id: 8,
    name: 'CSS Transitions & Animations',
    content: 
      `CSS transitions allow for smooth changes in element properties over time. They are triggered when an element’s state changes, 
      such as hovering over a button. A basic transition might look like this:
      \`.button { transition: background-color 0.3s ease; }\`. This changes the button’s background color smoothly when hovered. 
      CSS animations are more powerful, allowing you to define multiple steps (keyframes) for a complete animation cycle. 
      For example:
      \`@keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }\` defines a fade-in animation. 
      Then, you can apply it to an element with \`animation: fadeIn 2s;\`. Animations can be used for effects like loading spinners, 
      pop-up elements, or scrolling animations. CSS transitions and animations are useful for adding interactivity and visual appeal to a webpage.`
  }
  ,
  {
    id: 9,
    name: 'CSS Variables',
    content: 
      `CSS Variables, also known as custom properties, are a powerful way to store reusable values in CSS. They are defined...`
  },
  {
    id: 10,
    name: 'CSS Media Queries',
    content: 
      `Media queries enable developers to create responsive designs by applying CSS rules based on device characteristics...`
  },
  {
    id: 11,
    name: 'CSS Pseudo-classes',
    content: 
      `Pseudo-classes allow developers to style elements based on their state or position in the document. For instance...`
  },
  {
    id: 12,
    name: 'CSS Pseudo-elements',
    content: 
      `Pseudo-elements enable you to style specific parts of an element. Common pseudo-elements include \`::before\` and \`::after\`...`
  },
  {
    id: 13,
    name: 'CSS Frameworks',
    content: 
      `CSS frameworks like Bootstrap, Tailwind, and Bulma offer pre-designed styles and components that simplify web development...`
  },
  {
    id: 14,
    name: 'CSS Accessibility',
    content: 
      `CSS plays a critical role in web accessibility by ensuring designs are inclusive. Techniques include providing high-contrast...`
  },
  {
    id: 15,
    name: 'CSS Best Practices',
    content: 
      `Adopting CSS best practices helps maintain clean, scalable, and efficient stylesheets. Use a consistent naming convention...`
  }
];
