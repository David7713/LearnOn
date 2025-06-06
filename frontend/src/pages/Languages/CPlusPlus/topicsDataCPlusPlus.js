export const topicsDataCPlusPlus = [
  {
    id: 1,
    name: 'Introduction to C++',
    content: (
      <>
        <p>
          C++ is a powerful, high-performance programming language used for system software, game development, and applications requiring high-performance computing.
        </p>
        <p>
          It combines the features of both low-level and high-level programming languages, making it ideal for performance-critical applications.
        </p>
        
        <h4>Simple C++ Program Example:</h4>
        <pre>{`#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`}</pre>
        <p>This program prints "Hello, World!" to the console. The <code>main()</code> function is the entry point of every C++ program.</p>
      </>
    )
  },
  {
    id: 2,
    name: 'C++ Syntax Basics',
    content: (
      <>
        <p>
          C++ syntax is similar to C but has some differences. Learn about the basic structure of a C++ program.
        </p>
        
        <h4>Basic Structure Example:</h4>
        <pre>{`#include <iostream>  // Header file for input/output
using namespace std; // Standard namespace

int main() {         // Main function
    // Variable declaration
    int number = 10;
    
    // Output
    cout << "The number is: " << number << endl;
    
    return 0;        // Exit status
}`}</pre>
        <p>Key elements: header files, namespace, main function, variables, and output statement.</p>
      </>
    )
  },
  {
    id: 3,
    name: 'Variables and Data Types in C++',
    content: (
      <>
        <p>
          In C++, variables are used to store data. Basic data types include:
        </p>
        
        <h4>Variable Declaration Examples:</h4>
        <pre>{`int age = 25;              // Integer
float price = 19.99f;      // Floating point
double pi = 3.14159;       // Double precision
char grade = 'A';          // Character
bool isActive = true;      // Boolean
string name = "John Doe";  // String`}</pre>
        
        <h4>Type Modifiers:</h4>
        <pre>{`unsigned int positiveOnly = 100;  // Only positive numbers
short int smallNumber = 32767;     // Smaller range integer
long int bigNumber = 2147483647;   // Larger range integer`}</pre>
      </>
    )
  },
  {
    id: 4,
    name: 'Control Structures in C++',
    content: (
      <>
        <p>
          Control structures determine the flow of program execution.
        </p>
        
        <h4>If-Else Example:</h4>
        <pre>{`int age = 18;
if (age >= 18) {
    cout << "You are an adult";
} else {
    cout << "You are a minor";
}`}</pre>
        
        <h4>For Loop Example:</h4>
        <pre>{`for (int i = 0; i < 5; i++) {
    cout << "Iteration: " << i << endl;
}`}</pre>
        
        <h4>While Loop Example:</h4>
        <pre>{`int count = 0;
while (count < 3) {
    cout << "Count: " << count << endl;
    count++;
}`}</pre>
      </>
    )
  },
  {
    id: 5,
    name: 'Functions in C++',
    content: (
      <>
        <p>
          Functions allow you to organize code into reusable blocks.
        </p>
        
        <h4>Function Example:</h4>
        <pre>{`#include <iostream>
using namespace std;

// Function declaration
int addNumbers(int a, int b);

int main() {
    int result = addNumbers(5, 3);
    cout << "Sum: " << result << endl;
    return 0;
}

// Function definition
int addNumbers(int a, int b) {
    return a + b;
}`}</pre>
        
        <h4>Function Overloading Example:</h4>
        <pre>{`void print(int i) { cout << "Integer: " << i << endl; }
void print(double f) { cout << "Float: " << f << endl; }
void print(string s) { cout << "String: " << s << endl; }`}</pre>
      </>
    )
  },
  {
    id: 6,
    name: 'Object-Oriented Programming (OOP) in C++',
    content: (
      <>
        <p>
          C++ supports object-oriented programming with classes and objects.
        </p>
        
        <h4>Class and Object Example:</h4>
        <pre>{`class Car {
public:
    string brand;
    string model;
    int year;
    
    void honk() {
        cout << "Beep beep!" << endl;
    }
};

int main() {
    Car myCar;
    myCar.brand = "Toyota";
    myCar.model = "Corolla";
    myCar.year = 2020;
    
    myCar.honk();
    return 0;
}`}</pre>
        
        <h4>Inheritance Example:</h4>
        <pre>{`class Animal {
public:
    void eat() { cout << "Eating..." << endl; }
};

class Dog : public Animal {
public:
    void bark() { cout << "Barking!" << endl; }
};`}</pre>
      </>
    )
  },
  {
    id: 7,
    name: 'File Handling in C++',
    content: (
      <>
        <p>
          C++ provides file handling through the fstream library.
        </p>
        
        <h4>Writing to a File:</h4>
        <pre>{`#include <fstream>
using namespace std;

int main() {
    ofstream myfile("example.txt");
    if (myfile.is_open()) {
        myfile << "Writing to a file.\n";
        myfile << "Second line.\n";
        myfile.close();
    }
    return 0;
}`}</pre>
        
        <h4>Reading from a File:</h4>
        <pre>{`ifstream myfile("example.txt");
string line;
if (myfile.is_open()) {
    while (getline(myfile, line)) {
        cout << line << endl;
    }
    myfile.close();
}`}</pre>
      </>
    )
  },
  {
    id: 8,
    name: 'Memory Management in C++',
    content: (
      <>
        <p>
          C++ gives you direct control over memory management.
        </p>
        
        <h4>Dynamic Memory Allocation:</h4>
        <pre>{`int* ptr = new int;  // Allocate memory
*ptr = 10;          // Store value
cout << *ptr;       // Access value
delete ptr;         // Free memory`}</pre>
        
        <h4>Array Allocation:</h4>
        <pre>{`int* arr = new int[5];  // Allocate array
for (int i = 0; i < 5; i++) {
    arr[i] = i * 10;
}
delete[] arr;       // Free array memory`}</pre>
      </>
    )
  },
  {
    id: 9,
    name: 'Pointers and References in C++',
    content: (
      <>
        <p>
          Pointers store memory addresses, references are aliases to variables.
        </p>
        
        <h4>Pointer Example:</h4>
        <pre>{`int var = 20;
int* ptr = &var;    // Pointer holds address of var

cout << "Value: " << *ptr << endl;  // Dereferencing
cout << "Address: " << ptr << endl;`}</pre>
        
        <h4>Reference Example:</h4>
        <pre>{`int original = 30;
int& ref = original;  // Reference to original

ref = 40;  // Changes original
cout << original;  // Outputs 40`}</pre>
      </>
    )
  },
  {
    id: 10,
    name: 'Templates in C++',
    content: (
      <>
        <p>
          Templates allow writing generic code that works with different data types.
        </p>
        
        <h4>Function Template:</h4>
        <pre>{`template <typename T>
T max(T a, T b) {
    return (a > b) ? a : b;
}

// Usage:
cout << max(3, 7);       // int
cout << max(3.14, 2.99); // double`}</pre>
        
        <h4>Class Template:</h4>
        <pre>{`template <class T>
class Box {
    T content;
public:
    void set(T value) { content = value; }
    T get() { return content; }
};

// Usage:
Box<int> intBox;
intBox.set(100);`}</pre>
      </>
    )
  },
  {
    id: 11,
    name: 'STL (Standard Template Library) in C++',
    content: (
      <>
        <p>
          STL provides powerful template classes and functions.
        </p>
        
        <h4>Vector Example:</h4>
        <pre>{`#include <vector>
#include <algorithm>

vector<int> numbers = {3, 1, 4, 1, 5, 9};

// Sorting
sort(numbers.begin(), numbers.end());

// Iterating
for (int num : numbers) {
    cout << num << " ";
}`}</pre>
        
        <h4>Map Example:</h4>
        <pre>{`#include <map>
map<string, int> ages;
ages["Alice"] = 25;
ages["Bob"] = 30;

// Accessing
cout << ages["Alice"];  // Outputs 25`}</pre>
      </>
    )
  },
  {
    id: 12,
    name: 'Multithreading in C++',
    content: (
      <>
        <p>
          C++11 introduced built-in support for multithreading.
        </p>
        
        <h4>Basic Thread Example:</h4>
        <pre>{`#include <iostream>
#include <thread>

void printMessage(string message) {
    cout << message << endl;
}

int main() {
    thread t1(printMessage, "Hello from thread!");
    t1.join();  // Wait for thread to finish
    return 0;
}`}</pre>
        
        <h4>Mutex for Synchronization:</h4>
        <pre>{`mutex mtx;

void safePrint(int id) {
    mtx.lock();
    cout << "Thread " << id << " is running" << endl;
    mtx.unlock();
}`}</pre>
      </>
    )
  },
  {
    id: 13,
    name: 'Exception Handling in C++',
    content: (
      <>
        <p>
          Exception handling helps manage runtime errors.
        </p>
        
        <h4>Try-Catch Example:</h4>
        <pre>{`try {
    int age = 15;
    if (age < 18) {
        throw "Age must be at least 18";
    }
} catch (const char* msg) {
    cerr << "Error: " << msg << endl;
}`}</pre>
        
        <h4>Standard Exception:</h4>
        <pre>{`try {
    int* arr = new int[1000000000000];
} catch (bad_alloc& e) {
    cout << "Memory allocation failed: " << e.what() << endl;
}`}</pre>
      </>
    )
  },
  {
    id: 14,
    name: 'C++ Lambda Functions',
    content: (
      <>
        <p>
          Lambdas are anonymous functions useful for short operations.
        </p>
        
        <h4>Basic Lambda:</h4>
        <pre>{`auto greet = []() {
    cout << "Hello World!" << endl;
};
greet();  // Call the lambda`}</pre>
        
        <h4>Lambda with Parameters:</h4>
        <pre>{`auto add = [](int a, int b) {
    return a + b;
};
cout << add(5, 3);  // Outputs 8`}</pre>
        
        <h4>Lambda with Capture:</h4>
        <pre>{`int multiplier = 3;
auto times = [multiplier](int a) {
    return a * multiplier;
};
cout << times(5);  // Outputs 15`}</pre>
      </>
    )
  },
  {
    id: 15,
    name: 'C++ 11/14/17/20 Features',
    content: (
      <>
        <p>
          Modern C++ introduces many useful features.
        </p>
        
        <h4>Auto Type Deduction:</h4>
        <pre>{`auto num = 5;        // int
auto name = "John";  // const char*
auto pi = 3.14159;   // double`}</pre>
        
        <h4>Range-based For Loop:</h4>
        <pre>{`vector<int> nums = {1, 2, 3};
for (auto n : nums) {
    cout << n << " ";
}`}</pre>
        
        <h4>Smart Pointers:</h4>
        <pre>{`#include <memory>
unique_ptr<int> ptr(new int(10));
cout << *ptr;  // No need to manually delete`}</pre>
      </>
    )
  },
  {
    id: 16,
    name: 'Arrays and Strings in C++',
    content: (
      <>
        <p>
          Arrays store multiple values of the same type, strings are for text.
        </p>
        
        <h4>Array Example:</h4>
        <pre>{`int numbers[5] = {10, 20, 30, 40, 50};
cout << numbers[0];  // First element (10)

// Multidimensional array
int matrix[2][2] = {{1, 2}, {3, 4}};`}</pre>
        
        <h4>String Operations:</h4>
        <pre>{`string greeting = "Hello";
greeting += " World!";
cout << greeting.length();  // 12
cout << greeting.substr(0, 5);  // "Hello"`}</pre>
      </>
    )
  },
  {
    id: 17,
    name: 'Operator Overloading in C++',
    content: (
      <>
        <p>
          You can define custom behavior for operators with your classes.
        </p>
        
        <h4>Vector Addition Example:</h4>
        <pre>{`class Vector {
public:
    int x, y;
    
    Vector operator+(Vector v) {
        Vector temp;
        temp.x = x + v.x;
        temp.y = y + v.y;
        return temp;
    }
};

Vector v1 = {1, 2}, v2 = {3, 4};
Vector v3 = v1 + v2;  // {4, 6}`}</pre>
      </>
    )
  },
  {
    id: 18,
    name: 'Namespaces in C++',
    content: (
      <>
        <p>
          Namespaces help organize code and prevent naming conflicts.
        </p>
        
        <h4>Namespace Example:</h4>
        <pre>{`namespace Math {
    const double PI = 3.14159;
    double square(double x) { return x * x; }
}

// Usage:
cout << Math::PI;            // 3.14159
cout << Math::square(5);     // 25`}</pre>
        
        <h4>Using Directive:</h4>
        <pre>{`using namespace Math;
cout << PI;                 // No need for Math:: prefix`}</pre>
      </>
    )
  },
  {
    id: 19,
    name: 'Preprocessor Directives in C++',
    content: (
      <>
        <p>
          Preprocessor directives are processed before compilation.
        </p>
        
        <h4>Common Directives:</h4>
        <pre>{`#include <iostream>  // Include header file
#define PI 3.14159    // Define macro
#ifndef HEADER_H      // Include guard
#define HEADER_H
// Header content
#endif`}</pre>
        
        <h4>Conditional Compilation:</h4>
        <pre>{`#if DEBUG
    cout << "Debug mode";
#else
    cout << "Release mode";
#endif`}</pre>
      </>
    )
  },
  {
    id: 20,
    name: 'Type Casting in C++',
    content: (
      <>
        <p>
          Type casting converts between different data types.
        </p>
        
        <h4>Casting Examples:</h4>
        <pre>{`// Static cast (compile-time checking)
double pi = 3.14159;
int approx = static_cast<int>(pi);  // 3

// Dynamic cast (for polymorphism)
Base* basePtr = new Derived();
Derived* derivedPtr = dynamic_cast<Derived*>(basePtr);

// Const cast (remove const)
const int x = 10;
int* y = const_cast<int*>(&x);`}</pre>
      </>
    )
  }
];