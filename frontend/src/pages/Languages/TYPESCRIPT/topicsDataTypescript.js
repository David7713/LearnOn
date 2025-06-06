export const topicsDataTypescript = [
  {
    id: 1,
    name: 'Introduction to TypeScript',
    content: (
      <>
        <p>
          TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript. 
          It adds optional static typing, classes, interfaces, and other features to help build 
          large-scale applications.
        </p>
        
        <h4>Key Benefits:</h4>
        <ul>
          <li>Static typing catches errors during development</li>
          <li>Better tooling with autocompletion and refactoring</li>
          <li>Improved code organization with modules and namespaces</li>
          <li>Enhanced JavaScript features with future ECMAScript proposals</li>
        </ul>
        
        <h4>Simple TypeScript Example:</h4>
        <pre>{`function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

console.log(greet("TypeScript"));`}</pre>
      </>
    )
  },
  {
    id: 2,
    name: 'Setting Up TypeScript',
    content: (
      <>
        <p>
          Setting up TypeScript is straightforward with Node.js and npm/yarn.
        </p>
        
        <h4>Installation:</h4>
        <pre>{`# Install TypeScript globally
npm install -g typescript

# Or as a project dependency
npm install typescript --save-dev`}</pre>
        
        <h4>Basic tsconfig.json:</h4>
        <pre>{`{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true
  }
}`}</pre>
        
        <p>
          Compile your code with <code>tsc</code> or <code>tsc --watch</code> for automatic compilation.
        </p>
      </>
    )
  },
  {
    id: 3,
    name: 'Basic Types in TypeScript',
    content: (
      <>
        <p>
          TypeScript provides several basic types to help you write safer code.
        </p>
        
        <h4>Primitive Types:</h4>
        <pre>{`let isDone: boolean = false;
let count: number = 42;
let name: string = "TypeScript";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];`}</pre>
        
        <h4>Special Types:</h4>
        <pre>{`let notSure: any = 4;  // Disables type checking
let u: undefined = undefined;
let n: null = null;
let neverValue: never;  // For functions that never return`}</pre>
      </>
    )
  },
  {
    id: 4,
    name: 'Functions in TypeScript',
    content: (
      <>
        <p>
          TypeScript enhances JavaScript functions with type annotations for parameters and return values.
        </p>
        
        <h4>Function Examples:</h4>
        <pre>{`// Named function with types
function add(x: number, y: number): number {
  return x + y;
}

// Arrow function
const multiply = (x: number, y: number): number => x * y;

// Optional parameters
function greet(name: string, greeting?: string): string {
  return \`\${greeting || 'Hello'}, \${name}\`;
}

// Default parameters
function createUser(name: string, isAdmin: boolean = false) {
  return { name, isAdmin };
}`}</pre>
      </>
    )
  },
  {
    id: 5,
    name: 'Classes and Interfaces in TypeScript',
    content: (
      <>
        <p>
          TypeScript brings full class-based object-oriented programming to JavaScript.
        </p>
        
        <h4>Class Example:</h4>
        <pre>{`class Person {
  private name: string;
  
  constructor(name: string) {
    this.name = name;
  }
  
  greet(): string {
    return \`Hello, my name is \${this.name}\`;
  }
}

const person = new Person("Alice");
console.log(person.greet());`}</pre>
        
        <h4>Interface Example:</h4>
        <pre>{`interface User {
  id: number;
  name: string;
  email?: string;  // Optional property
}

function printUser(user: User) {
  console.log(\`User \${user.id}: \${user.name}\`);
}`}</pre>
      </>
    )
  },
  {
    id: 6,
    name: 'Generics in TypeScript',
    content: (
      <>
        <p>
          Generics enable creating reusable components that work with multiple types.
        </p>
        
        <h4>Generic Function:</h4>
        <pre>{`function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("myString");
let output2 = identity<number>(42);`}</pre>
        
        <h4>Generic Interface:</h4>
        <pre>{`interface GenericArray<T> {
  [index: number]: T;
}

let myArray: GenericArray<number> = [1, 2, 3];`}</pre>
      </>
    )
  },
  {
    id: 7,
    name: 'Modules and Namespaces in TypeScript',
    content: (
      <>
        <p>
          TypeScript supports modules (ES6 style) and namespaces (internal modules) for code organization.
        </p>
        
        <h4>Module Example:</h4>
        <pre>{`// math.ts
export function add(x: number, y: number): number {
  return x + y;
}

// app.ts
import { add } from './math';
console.log(add(2, 3));`}</pre>
        
        <h4>Namespace Example:</h4>
        <pre>{`namespace Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }
  
  const lettersRegexp = /^[A-Za-z]+$/;
  
  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
      return lettersRegexp.test(s);
    }
  }
}`}</pre>
      </>
    )
  },
  {
    id: 8,
    name: 'TypeScript Type Inference',
    content: (
      <>
        <p>
          TypeScript can infer types when they're not explicitly declared.
        </p>
        
        <h4>Inference Examples:</h4>
        <pre>{`let x = 3;  // TypeScript infers 'number'
let y = [0, 1, null];  // Infers (number | null)[]

function sum(a: number, b: number) {
  return a + b;  // Return type inferred as number
}

const user = { name: "Alice", age: 30 };  // Type inferred as { name: string, age: number }`}</pre>
        
        <p>
          Use explicit types when the inference isn't what you want, or when it improves code readability.
        </p>
      </>
    )
  },
  {
    id: 9,
    name: 'TypeScript Union and Intersection Types',
    content: (
      <>
        <p>
          Union types allow flexibility while maintaining type safety.
        </p>
        
        <h4>Union Types:</h4>
        <pre>{`function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  return padding + value;
}`}</pre>
        
        <h4>Intersection Types:</h4>
        <pre>{`interface Employee {
  name: string;
  id: number;
}

interface Manager {
  department: string;
  subordinates: Employee[];
}

type ManagerEmployee = Employee & Manager;

const me: ManagerEmployee = {
  name: "Bob",
  id: 123,
  department: "Engineering",
  subordinates: []
};`}</pre>
      </>
    )
  },
  {
    id: 10,
    name: 'Advanced Types in TypeScript',
    content: (
      <>
        <p>
          TypeScript offers powerful type manipulation features.
        </p>
        
        <h4>Mapped Types:</h4>
        <pre>{`type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

interface Person {
  name: string;
  age: number;
}

type ReadonlyPerson = Readonly<Person>;`}</pre>
        
        <h4>Conditional Types:</h4>
        <pre>{`type NonNullable<T> = T extends null | undefined ? never : T;

type T0 = NonNullable<string | number | null>;  // string | number`}</pre>
      </>
    )
  },
  {
    id: 11,
    name: 'Decorators in TypeScript',
    content: (
      <>
        <p>
          Decorators are an experimental feature that allows adding annotations to classes and members.
        </p>
        
        <h4>Class Decorator:</h4>
        <pre>{`function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class Greeter {
  greeting: string;
  
  constructor(message: string) {
    this.greeting = message;
  }
  
  greet() {
    return "Hello, " + this.greeting;
  }
}`}</pre>
        
        <h4>Method Decorator:</h4>
        <pre>{`function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  
  descriptor.value = function(...args: any[]) {
    console.log(\`Calling \${propertyKey} with args: \${JSON.stringify(args)}\`);
    return originalMethod.apply(this, args);
  };
  
  return descriptor;
}

class Calculator {
  @log
  add(x: number, y: number) {
    return x + y;
  }
}`}</pre>
      </>
    )
  },
  {
    id: 12,
    name: 'TypeScript with React',
    content: (
      <>
        <p>
          TypeScript brings type safety to React applications.
        </p>
        
        <h4>Typed Component Props:</h4>
        <pre>{`interface UserProps {
  name: string;
  age: number;
  isAdmin?: boolean;
}

const UserProfile: React.FC<UserProps> = ({ name, age, isAdmin = false }) => (
  <div>
    <h2>{name}</h2>
    <p>Age: {age}</p>
    {isAdmin && <p>Admin User</p>}
  </div>
);`}</pre>
        
        <h4>Typed Hooks:</h4>
        <pre>{`const [count, setCount] = useState<number>(0);
const [user, setUser] = useState<User | null>(null);

useEffect(() => {
  fetchUser().then(user => setUser(user));
}, []);`}</pre>
      </>
    )
  },
  {
    id: 13,
    name: 'TypeScript with Node.js',
    content: (
      <>
        <p>
          TypeScript can significantly improve Node.js development experience.
        </p>
        
        <h4>Basic Node.js with TypeScript:</h4>
        <pre>{`import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

interface User {
  id: number;
  name: string;
}

app.get('/users', (req: Request, res: Response<User[]>) => {
  const users: User[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];
  res.json(users);
});

app.listen(port, () => {
  console.log(\`Server running on port \${port}\`);
});`}</pre>
        
        <h4>Type Definitions:</h4>
        <p>
          Install type definitions for Node.js and popular packages:
        </p>
        <pre>{`npm install --save-dev @types/node @types/express`}</pre>
      </>
    )
  },
  {
    id: 14,
    name: 'TypeScript and Error Handling',
    content: (
      <>
        <p>
          TypeScript helps catch errors at compile time, but you still need runtime error handling.
        </p>
        
        <h4>Try-Catch with Custom Errors:</h4>
        <pre>{`class ApiError extends Error {
  statusCode: number;
  
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}

async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new ApiError('API request failed', response.status);
    }
    return await response.json();
  } catch (error) {
    if (error instanceof ApiError) {
      console.error(\`API Error: \${error.statusCode} - \${error.message}\`);
    } else {
      console.error('Unexpected error:', error);
    }
  }
}`}</pre>
      </>
    )
  },
  {
    id: 15,
    name: 'Migrating JavaScript to TypeScript',
    content: (
      <>
        <p>
          Migrating to TypeScript can be done incrementally.
        </p>
        
        <h4>Migration Steps:</h4>
        <ol>
          <li>Rename files from .js to .ts (or .js to .tsx for React)</li>
          <li>Add tsconfig.json with appropriate settings</li>
          <li>Install TypeScript and type definitions</li>
          <li>Fix type errors gradually (use <code>any</code> temporarily if needed)</li>
          <li>Enable strict mode once most code is typed</li>
        </ol>
        
        <h4>JavaScript with JSDoc (Transitional Step):</h4>
        <pre>{`/**
 * @param {string} name
 * @param {number} [age=25] - Optional age with default
 * @returns {string}
 */
function greet(name, age = 25) {
  return \`Hello \${name}, you are \${age}\`;
}`}</pre>
      </>
    )
  }
];