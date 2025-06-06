export const topicsDataPython = [
  {
    id: 1,
    name: 'Introduction to Python',
    content: (
      <>
        <p>Python is a high-level, interpreted programming language known for its readability and simplicity.</p>
        <p>It is widely used in various domains including:</p>
        <ul>
          <li>Web Development</li>
          <li>Data Science</li>
          <li>Machine Learning</li>
          <li>Scripting and Automation</li>
        </ul>
        <p>Python's syntax is clean and emphasizes code readability, making it a great choice for beginners and professionals alike.</p>
      </>
    )
  },
  {
    id: 2,
    name: 'Python Syntax Basics',
    content: (
      <>
        <p>Python uses indentation to define blocks of code. There are no curly braces like in other languages.</p>
        <pre><code>{`# This is a comment
x = 5
if x > 0:
    print("Positive number")`}</code></pre>
        <p>Other syntax elements include:</p>
        <ul>
          <li>Statements end with a newline, not a semicolon</li>
          <li>Comments start with <code>#</code></li>
          <li>Variables are dynamically typed</li>
        </ul>
      </>
    )
  },
  {
    id: 3,
    name: 'Variables and Data Types in Python',
    content: (
      <>
        <p>Python supports multiple data types including:</p>
        <ul>
          <li><code>int</code> - Integer</li>
          <li><code>float</code> - Floating-point number</li>
          <li><code>str</code> - String</li>
          <li><code>bool</code> - Boolean (True/False)</li>
        </ul>
        <pre><code>{`name = "Alice"
age = 25
height = 5.6
is_student = True`}</code></pre>
      </>
    )
  },
  {
    id: 4,
    name: 'Control Structures in Python',
    content: (
      <>
        <p>Control structures manage the flow of your code.</p>
        <ul>
          <li><strong>Conditional Statements</strong>: <code>if</code>, <code>elif</code>, <code>else</code></li>
          <li><strong>Loops</strong>: <code>for</code>, <code>while</code></li>
        </ul>
        <pre><code>{`for i in range(5):
    print(i)

if age > 18:
    print("Adult")
else:
    print("Minor")`}</code></pre>
      </>
    )
  },
  {
    id: 5,
    name: 'Functions in Python',
    content: (
      <>
        <p>Functions are blocks of reusable code.</p>
        <pre><code>{`def greet(name):
    return "Hello " + name

print(greet("Alice"))`}</code></pre>
        <p>You can also use default and keyword arguments:</p>
        <pre><code>{`def greet(name="User"):
    print(f"Hello {name}")`}</code></pre>
      </>
    )
  },
  {
    id: 6,
    name: 'Object-Oriented Programming (OOP) in Python',
    content: (
      <>
        <p>OOP allows you to structure your code using classes and objects.</p>
        <pre><code>{`class Person:
    def __init__(self, name):
        self.name = name

    def greet(self):
        print(f"Hello, I'm {self.name}")

p = Person("Alice")
p.greet()`}</code></pre>
        <p>Key concepts: encapsulation, inheritance, polymorphism.</p>
      </>
    )
  },
  {
    id: 7,
    name: 'File Handling in Python',
    content: (
      <>
        <p>Python allows you to open, read, write, and close files.</p>
        <pre><code>{`# Writing to a file
with open("file.txt", "w") as f:
    f.write("Hello World")

# Reading a file
with open("file.txt", "r") as f:
    content = f.read()
    print(content)`}</code></pre>
      </>
    )
  },
  {
    id: 8,
    name: 'Python Libraries and Packages',
    content: (
      <>
        <p>Libraries and packages help extend Python's functionality.</p>
        <ul>
          <li><code>NumPy</code> - Numerical computing</li>
          <li><code>Pandas</code> - Data analysis</li>
          <li><code>Matplotlib</code> - Data visualization</li>
        </ul>
        <pre><code>{`import numpy as np
arr = np.array([1, 2, 3])
print(arr)`}</code></pre>
      </>
    )
  },
  {
    id: 9,
    name: 'Error and Exception Handling in Python',
    content: (
      <>
        <p>Use <code>try-except</code> blocks to handle exceptions.</p>
        <pre><code>{`try:
    x = 1 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")`}</code></pre>
        <p>You can also use <code>finally</code> for cleanup.</p>
      </>
    )
  },
  {
    id: 10,
    name: 'Working with APIs in Python',
    content: (
      <>
        <p>Use the <code>requests</code> library to make API calls.</p>
        <pre><code>{`import requests

response = requests.get("https://api.github.com")
print(response.status_code)
print(response.json())`}</code></pre>
      </>
    )
  },
  {
    id: 11,
    name: 'Data Structures in Python',
    content: (
      <>
        <p>Python has built-in data structures like:</p>
        <ul>
          <li><code>list</code></li>
          <li><code>tuple</code></li>
          <li><code>dict</code></li>
          <li><code>set</code></li>
        </ul>
        <pre><code>{`my_list = [1, 2, 3]
my_dict = {"name": "Alice", "age": 25}
my_set = set([1, 2, 2, 3])`}</code></pre>
      </>
    )
  },
  {
    id: 12,
    name: 'Working with Databases in Python',
    content: (
      <>
        <p>Python can interact with databases using libraries like <code>sqlite3</code>.</p>
        <pre><code>{`import sqlite3

conn = sqlite3.connect('test.db')
cursor = conn.cursor()
cursor.execute("CREATE TABLE IF NOT EXISTS users (id INTEGER, name TEXT)")
conn.commit()
conn.close()`}</code></pre>
      </>
    )
  },
  {
    id: 13,
    name: 'Web Development with Python',
    content: (
      <>
        <p>Frameworks like Flask and Django are used for web development.</p>
        <pre><code>{`from flask import Flask
app = Flask(__name__)

@app.route("/")
def home():
    return "Hello, World!"`}</code></pre>
      </>
    )
  },
  {
    id: 14,
    name: 'Python for Data Science',
    content: (
      <>
        <p>Python is a top language in data science.</p>
        <ul>
          <li><code>Pandas</code> - data manipulation</li>
          <li><code>Matplotlib</code>, <code>Seaborn</code> - visualization</li>
          <li><code>scikit-learn</code> - machine learning</li>
        </ul>
        <pre><code>{`import pandas as pd

df = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})
print(df)`}</code></pre>
      </>
    )
  },
  {
    id: 15,
    name: 'Automation and Scripting with Python',
    content: (
      <>
        <p>Python excels at automating repetitive tasks.</p>
        <ul>
          <li>Web scraping</li>
          <li>File system operations</li>
          <li>Task scheduling</li>
        </ul>
        <pre><code>{`import os

for file in os.listdir("."):
    print(file)`}</code></pre>
      </>
    )
  },
  {
    id: 16,
    name: 'Regular Expressions in Python',
    content: (
      <>
        <p>Regex lets you search and manipulate text using patterns.</p>
        <pre><code>{`import re

text = "The rain in Spain"
matches = re.findall("ai", text)
print(matches)`}</code></pre>
      </>
    )
  },
  {
    id: 17,
    name: 'List Comprehensions in Python',
    content: (
      <>
        <p>List comprehensions provide a concise way to create lists.</p>
        <pre><code>{`squares = [x * x for x in range(10)]
print(squares)`}</code></pre>
      </>
    )
  },
  {
    id: 18,
    name: 'Lambda Functions in Python',
    content: (
      <>
        <p>Lambda functions are small anonymous functions defined with the <code>lambda</code> keyword.</p>
        <pre><code>{`add = lambda x, y: x + y
print(add(3, 5))`}</code></pre>
      </>
    )
  },
  {
    id: 19,
    name: 'Modules and Packages in Python',
    content: (
      <>
        <p>Modules are Python files containing code; packages are directories of modules.</p>
        <pre><code>{`# mymodule.py
def greet():
    print("Hello")

# main.py
import mymodule
mymodule.greet()`}</code></pre>
      </>
    )
  },
  {
    id: 20,
    name: 'Decorators in Python',
    content: (
      <>
        <p>Decorators are used to modify the behavior of functions.</p>
        <pre><code>{`def decorator(func):
    def wrapper():
        print("Before function")
        func()
        print("After function")
    return wrapper

@decorator
def say_hello():
    print("Hello!")

say_hello()`}</code></pre>
      </>
    )
  }
];
