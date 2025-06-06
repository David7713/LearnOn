export const topicsDataPhp = [
  {
    id: 1,
    name: 'Introduction to PHP',
    content: (
      <>
        <p>PHP (Hypertext Preprocessor) is a popular server-side scripting language designed specifically for web development.</p>
        <p>It's embedded into HTML and executed on the server, generating HTML that is sent to the client.</p>
        <ul>
          <li>Open-source and widely used</li>
          <li>Runs on various platforms (Windows, Linux, Mac)</li>
          <li>Compatible with almost all servers (Apache, IIS, etc.)</li>
          <li>Supports a wide range of databases</li>
        </ul>
        <pre><code>{`<?php
  echo "Hello, World!";
?>`}</code></pre>
      </>
    ),
  },
  {
    id: 2,
    name: 'PHP Syntax',
    content: (
      <>
        <p>PHP code is embedded within HTML using special tags.</p>
        <p>Basic syntax rules include:</p>
        <ul>
          <li>PHP code starts with <code>&lt;?php</code> and ends with <code>?&gt;</code></li>
          <li>Statements end with a semicolon (;)</li>
          <li>Variables start with a dollar sign ($)</li>
          <li>Comments use // for single line or /* */ for multi-line</li>
        </ul>
        <pre><code>{`<!DOCTYPE html>
<html>
<body>
  <h1>My First PHP Page</h1>
  <?php
    // This is a single-line comment
    /* This is a
       multi-line comment */
    $txt = "Hello PHP!";
    echo $txt;
  ?>
</body>
</html>`}</code></pre>
      </>
    ),
  },
  {
    id: 3,
    name: 'PHP Variables and Data Types',
    content: (
      <>
        <p>PHP is a loosely typed language, which means you don't need to declare variable types.</p>
        <p>PHP supports the following data types:</p>
        <ul>
          <li><strong>String</strong>: Sequence of characters</li>
          <li><strong>Integer</strong>: Non-decimal numbers</li>
          <li><strong>Float</strong>: Decimal numbers</li>
          <li><strong>Boolean</strong>: True or false</li>
          <li><strong>Array</strong>: Stores multiple values</li>
          <li><strong>Object</strong>: Instances of classes</li>
          <li><strong>NULL</strong>: Special type with only one value: NULL</li>
        </ul>
        <pre><code>{`<?php
  // String
  $name = "John Doe";
  
  // Integer
  $age = 25;
  
  // Float
  $price = 19.99;
  
  // Boolean
  $isActive = true;
  
  // Array
  $colors = array("Red", "Green", "Blue");
  
  // Check the type of a variable
  var_dump($name);
  var_dump($age);
?>`}</code></pre>
      </>
    ),
  },
  {
    id: 4,
    name: 'PHP Arrays',
    content: (
      <>
        <p>Arrays in PHP are used to store multiple values in a single variable.</p>
        <p>PHP supports three types of arrays:</p>
        <ul>
          <li><strong>Indexed arrays</strong>: Arrays with numeric index</li>
          <li><strong>Associative arrays</strong>: Arrays with named keys</li>
          <li><strong>Multidimensional arrays</strong>: Arrays containing one or more arrays</li>
        </ul>
        <pre><code>{`<?php
  // Indexed array
  $fruits = array("Apple", "Banana", "Cherry");
  echo $fruits[1]; // Outputs: Banana
  
  // Associative array
  $ages = array("Peter"=>35, "Ben"=>37, "Joe"=>43);
  echo $ages["Peter"]; // Outputs: 35
  
  // Multidimensional array
  $employees = array(
    array("John", "Doe", "Manager"),
    array("Jane", "Smith", "Developer"),
    array("Bob", "Johnson", "Designer")
  );
  echo $employees[1][0]; // Outputs: Jane
  
  // Loop through an array
  foreach($fruits as $fruit) {
    echo $fruit . "<br>";
  }
?>`}</code></pre>
      </>
    ),
  },
  {
    id: 5,
    name: 'PHP Functions',
    content: (
      <>
        <p>Functions are blocks of code that can be reused throughout your application.</p>
        <p>PHP has over 1000 built-in functions and also allows you to create custom functions.</p>
        <ul>
          <li>Function names are not case-sensitive</li>
          <li>Functions can accept parameters</li>
          <li>Functions can return values</li>
        </ul>
        <pre><code>{`<?php
  // Defining a custom function
  function greet($name) {
    return "Hello, $name!";
  }
  
  // Calling the function
  echo greet("World"); // Outputs: Hello, World!
  
  // Function with default parameter
  function calculate($price, $tax = 0.1) {
    return $price + ($price * $tax);
  }
  
  echo calculate(100); // Outputs: 110
  echo calculate(100, 0.2); // Outputs: 120
?>`}</code></pre>
      </>
    ),
  },
  {
    id: 6,
    name: 'PHP Forms and Validation',
    content: (
      <>
        <p>PHP is commonly used to handle form submissions and validate user input.</p>
        <p>Form handling includes:</p>
        <ul>
          <li>Collecting data from forms</li>
          <li>Validating input</li>
          <li>Sanitizing data to prevent security issues</li>
          <li>Processing and storing the data</li>
        </ul>
        <pre><code>{`<!DOCTYPE html>
<html>
<body>
  <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
    Name: <input type="text" name="name"><br>
    Email: <input type="email" name="email"><br>
    <input type="submit">
  </form>
  
  <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      // Validate and sanitize input
      $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
      $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
      
      if (empty($name)) {
        echo "Name is required";
      } elseif ($email === false) {
        echo "Valid email is required";
      } else {
        echo "Form submitted successfully!<br>";
        echo "Name: $name<br>";
        echo "Email: $email";
      }
    }
  ?>
</body>
</html>`}</code></pre>
      </>
    ),
  },
  {
    id: 7,
    name: 'PHP Sessions and Cookies',
    content: (
      <>
        <p>Sessions and cookies are used to store information across multiple pages in a web application.</p>
        <p><strong>Sessions</strong> store data on the server, while <strong>cookies</strong> store data on the client's computer.</p>
        <ul>
          <li>Sessions are more secure for sensitive data</li>
          <li>Cookies can be used for persistent data storage</li>
          <li>Sessions require a session ID, typically stored in a cookie</li>
        </ul>
        <pre><code>{`<?php
  // Starting a session
  session_start();
  
  // Setting session variables
  $_SESSION["username"] = "john_doe";
  $_SESSION["user_id"] = 123;
  
  // Accessing session variables
  echo "Welcome " . $_SESSION["username"];
  
  // Setting a cookie (name, value, expiry time)
  setcookie("user", "john_doe", time() + (86400 * 30)); // 30 days
  
  // Accessing a cookie
  if(isset($_COOKIE["user"])) {
    echo "Welcome back " . $_COOKIE["user"];
  }
  
  // Destroying a session
  session_destroy();
?>`}</code></pre>
      </>
    ),
  },
  {
    id: 8,
    name: 'PHP File Handling',
    content: (
      <>
        <p>PHP provides functions to create, read, upload, and modify files on the server.</p>
        <p>Common file operations include:</p>
        <ul>
          <li>Opening and closing files</li>
          <li>Reading file content</li>
          <li>Writing to files</li>
          <li>Appending to files</li>
          <li>Uploading files</li>
        </ul>
        <pre><code>{`<?php
  // Reading a file
  $file = fopen("example.txt", "r") or die("Unable to open file!");
  echo fread($file, filesize("example.txt"));
  fclose($file);
  
  // Writing to a file
  $file = fopen("newfile.txt", "w") or die("Unable to open file!");
  $txt = "John Doe\n";
  fwrite($file, $txt);
  $txt = "Jane Doe\n";
  fwrite($file, $txt);
  fclose($file);
  
  // File upload handling
  if(isset($_FILES["fileToUpload"])) {
    $target_dir = "uploads/";
    $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
    
    // Check if file already exists
    if (file_exists($target_file)) {
      echo "File already exists.";
    } else {
      if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        echo "The file has been uploaded.";
      } else {
        echo "Error uploading file.";
      }
    }
  }
?>`}</code></pre>
      </>
    ),
  },
  {
    id: 9,
    name: 'Connecting to a Database with PHP',
    content: (
      <>
        <p>PHP can connect to various databases, with MySQL being the most common.</p>
        <p>There are two main approaches for database connectivity:</p>
        <ul>
          <li><strong>MySQLi</strong>: MySQL Improved extension</li>
          <li><strong>PDO</strong>: PHP Data Objects (works with multiple database types)</li>
        </ul>
        <pre><code>{`<?php
  // MySQLi Object-oriented approach
  $servername = "localhost";
  $username = "username";
  $password = "password";
  $dbname = "myDB";
  
  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  
  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  
  // Select data
  $sql = "SELECT id, firstname, lastname FROM users";
  $result = $conn->query($sql);
  
  if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
      echo "ID: " . $row["id"] . " - Name: " . $row["firstname"] . " " . $row["lastname"] . "<br>";
    }
  } else {
    echo "0 results";
  }
  
  // Close connection
  $conn->close();
  
  // PDO approach
  try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $stmt = $conn->prepare("SELECT id, firstname, lastname FROM users");
    $stmt->execute();
    
    // Set the resulting array to associative
    $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
    foreach($stmt->fetchAll() as $row) {
      echo "ID: " . $row["id"] . " - Name: " . $row["firstname"] . " " . $row["lastname"] . "<br>";
    }
  } catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
  }
  
  $conn = null;
?>`}</code></pre>
      </>
    ),
  },
  {
    id: 10,
    name: 'PHP Object-Oriented Programming (OOP)',
    content: (
      <>
        <p>PHP supports Object-Oriented Programming with classes, objects, inheritance, and encapsulation.</p>
        <p>Key OOP concepts in PHP:</p>
        <ul>
          <li><strong>Classes</strong>: Templates for objects</li>
          <li><strong>Objects</strong>: Instances of classes</li>
          <li><strong>Properties</strong>: Variables within a class</li>
          <li><strong>Methods</strong>: Functions within a class</li>
          <li><strong>Inheritance</strong>: Creating new classes based on existing ones</li>
          <li><strong>Encapsulation</strong>: Hiding implementation details</li>
        </ul>
        <pre><code>{`<?php
  // Define a class
  class Person {
    // Properties
    public $name;
    private $age;
    
    // Constructor
    public function __construct($name, $age) {
      $this->name = $name;
      $this->age = $age;
    }
    
    // Method
    public function greet() {
      return "Hello, my name is " . $this->name . " and I am " . $this->age . " years old.";
    }
    
    // Setter
    public function setAge($age) {
      $this->age = $age;
    }
    
    // Getter
    public function getAge() {
      return $this->age;
    }
  }
  
  // Create an object
  $person = new Person("John", 30);
  echo $person->greet();
  
  // Inheritance
  class Employee extends Person {
    private $position;
    
    public function __construct($name, $age, $position) {
      parent::__construct($name, $age);
      $this->position = $position;
    }
    
    public function greet() {
      return parent::greet() . " I work as a " . $this->position . ".";
    }
  }
  
  $employee = new Employee("Jane", 28, "Developer");
  echo $employee->greet();
?>`}</code></pre>
      </>
    ),
  },
  {
    id: 11,
    name: 'PHP Error Handling',
    content: (
      <>
        <p>Error handling in PHP is essential for debugging and handling unexpected conditions.</p>
        <p>PHP provides several ways to handle errors:</p>
        <ul>
          <li><strong>Basic error handling</strong>: Using the error_reporting function</li>
          <li><strong>Custom error handlers</strong>: Using set_error_handler function</li>
          <li><strong>Exception handling</strong>: Using try, catch, and throw</li>
        </ul>
        <pre><code>{`<?php
  // Set error reporting level
  error_reporting(E_ALL);
  ini_set('display_errors', 1);
  
  // Custom error handler
  function customErrorHandler($errno, $errstr, $errfile, $errline) {
    echo "<b>Error:</b> [$errno] $errstr<br>";
    echo "Error on line $errline in $errfile<br>";
  }
  
  // Set custom error handler
  set_error_handler("customErrorHandler");
  
  // Trigger an error
  // echo $undefinedVariable;
  
  // Exception handling
  try {
    $file = fopen("nonexistent.txt", "r");
    if(!$file) {
      throw new Exception("Unable to open file.");
    }
  } catch(Exception $e) {
    echo "Caught exception: " . $e->getMessage() . "<br>";
    echo "File: " . $e->getFile() . "<br>";
    echo "Line: " . $e->getLine() . "<br>";
  } finally {
    echo "This code always runs, regardless of whether an exception is thrown.<br>";
  }
?>`}</code></pre>
      </>
    ),
  },
  {
    id: 12,
    name: 'PHP Regular Expressions',
    content: (
      <>
        <p>Regular expressions in PHP are powerful tools for pattern matching and text manipulation.</p>
        <p>PHP provides various functions for working with regular expressions:</p>
        <ul>
          <li><strong>preg_match()</strong>: Returns 1 if pattern matches, 0 if not</li>
          <li><strong>preg_match_all()</strong>: Finds all matches and places them in an array</li>
          <li><strong>preg_replace()</strong>: Replaces matching text</li>
          <li><strong>preg_split()</strong>: Splits string into an array by specified pattern</li>
        </ul>
        <pre><code>{`<?php
  // Check if pattern exists in a string
  $text = "The quick brown fox jumps over the lazy dog";
  $pattern = "/fox/";
  
  if(preg_match($pattern, $text)) {
    echo "Match found!<br>";
  } else {
    echo "No match found.<br>";
  }
  
  // Find all occurrences of pattern
  $text = "The rain in SPAIN falls mainly on the plain.";
  $pattern = "/ain/i"; // i flag for case-insensitive
  
  preg_match_all($pattern, $text, $matches);
  print_r($matches);
  
  // Replace pattern with another string
  $text = "Visit Microsoft!";
  $pattern = "/microsoft/i";
  $replacement = "PHP.net";
  
  echo preg_replace($pattern, $replacement, $text) . "<br>";
  
  // Email validation
  $email = "example@example.com";
  $pattern = "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/";
  
  if(preg_match($pattern, $email)) {
    echo "Valid email format.<br>";
  } else {
    echo "Invalid email format.<br>";
  }
?>`}</code></pre>
      </>
    ),
  },
  {
    id: 13,
    name: 'PHP Mail Function',
    content: (
      <>
        <p>PHP provides a built-in mail() function for sending emails directly from scripts.</p>
        <p>For more advanced emailing capabilities, PHP also supports libraries like PHPMailer.</p>
        <ul>
          <li>Basic mail sending</li>
          <li>HTML emails</li>
          <li>Email with attachments (using libraries)</li>
        </ul>
        <pre><code>{`<?php
  // Basic mail function
  $to = "recipient@example.com";
  $subject = "Test Email";
  $message = "This is a test email sent from PHP.";
  $headers = "From: sender@example.com";
  
  if(mail($to, $subject, $message, $headers)) {
    echo "Email sent successfully.";
  } else {
    echo "Email sending failed.";
  }
  
  // HTML email
  $to = "recipient@example.com";
  $subject = "HTML Email Test";
  
  $message = "
  <html>
  <head>
    <title>HTML Email</title>
  </head>
  <body>
    <h1>This is a HTML Email</h1>
    <p>This is a paragraph in an HTML email.</p>
  </body>
  </html>
  ";
  
  // Set content-type header for HTML email
  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
  $headers .= "From: sender@example.com" . "\r\n";
  
  mail($to, $subject, $message, $headers);
  
  // Using PHPMailer (requires installation)
  /*
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;
  
  require 'vendor/autoload.php';
  
  $mail = new PHPMailer(true);
  
  try {
    $mail->setFrom('sender@example.com', 'Sender Name');
    $mail->addAddress('recipient@example.com', 'Recipient Name');
    $mail->addAttachment('/path/to/file.pdf');
    $mail->isHTML(true);
    $mail->Subject = 'Here is the subject';
    $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
    
    $mail->send();
    echo 'Message has been sent';
  } catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
  }
  */
?>`}</code></pre>
      </>
    ),
  },
  {
    id: 14,
    name: 'PHP Security Best Practices',
    content: (
      <>
        <p>Security is critical in PHP applications to protect against common vulnerabilities.</p>
        <p>Key security practices include:</p>
        <ul>
          <li><strong>SQL Injection Prevention</strong>: Using prepared statements</li>
          <li><strong>XSS Prevention</strong>: Sanitizing output</li>
          <li><strong>CSRF Protection</strong>: Using tokens</li>
          <li><strong>Secure Password Handling</strong>: Using password_hash()</li>
          <li><strong>Input Validation</strong>: Filtering and validating all input</li>
        </ul>
        <pre><code>{`<?php
  // SQL Injection Prevention with PDO
  $stmt = $pdo->prepare("SELECT * FROM users WHERE username = :username");
  $stmt->execute(['username' => $username]);
  $user = $stmt->fetch();
  
  // XSS Prevention
  $username = htmlspecialchars($_POST['username'], ENT_QUOTES, 'UTF-8');
  echo $username;
  
  // CSRF Protection
  session_start();
  // Generate CSRF token
  if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
  }
  
  // In form
  echo '<input type="hidden" name="csrf_token" value="' . $_SESSION['csrf_token'] . '">';
  
  // When processing form
  if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
    die('CSRF token validation failed');
  }
  
  // Secure Password Handling
  $password = "user_password";
  $hashed_password = password_hash($password, PASSWORD_DEFAULT);
  
  // To verify
  if (password_verify($password, $hashed_password)) {
    echo "Password is valid!";
  } else {
    echo "Invalid password.";
  }
  
  // Input Validation
  $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
  if (!$email) {
    echo "Invalid email format";
  }
?>`}</code></pre>
      </>
    ),
  },
  {
    id: 15,
    name: 'Deploying PHP Applications',
    content: (
      <>
        <p>Deploying PHP applications involves setting up a web server and configuring it properly.</p>
        <p>Common deployment steps and considerations:</p>
        <ul>
          <li><strong>Web server setup</strong>: Apache, Nginx, etc.</li>
          <li><strong>PHP configuration</strong>: php.ini settings</li>
          <li><strong>Database setup</strong>: Creating and configuring databases</li>
          <li><strong>File permissions</strong>: Setting proper file and directory permissions</li>
          <li><strong>Environment variables</strong>: Setting up environment-specific configurations</li>
        </ul>
        <pre><code>{`<?php
  // Environment configuration
  define('ENVIRONMENT', 'development'); // Options: development, production
  
  if (ENVIRONMENT === 'development') {
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
  } else {
    error_reporting(0);
    ini_set('display_errors', 0);
  }
  
  // Database configuration based on environment
  if (ENVIRONMENT === 'development') {
    $db_config = [
      'host' => 'localhost',
      'username' => 'dev_user',
      'password' => 'dev_password',
      'dbname' => 'dev_database'
    ];
  } else {
    $db_config = [
      'host' => 'production_host',
      'username' => 'prod_user',
      'password' => 'prod_password',
      'dbname' => 'prod_database'
    ];
  }
  
  // .htaccess file example for Apache
  /*
  <IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.php$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.php [L]
  </IfModule>
  */
?>`}</code></pre>
      </>
    ),
  },
  {
    id: 16,
    name: 'PHP Frameworks',
    content: (
      <>
        <p>PHP frameworks provide structure and components to streamline development.</p>
        <p>Popular PHP frameworks include:</p>
        <ul>
          <li><strong>Laravel</strong>: Full-featured MVC framework with elegant syntax</li>
          <li><strong>Symfony</strong>: Modular component-based framework</li>
          <li><strong>CodeIgniter</strong>: Lightweight and fast framework</li>
          <li><strong>CakePHP</strong>: Rapid development framework with code generation tools</li>
          <li><strong>Yii</strong>: High-performance framework for modern web applications</li>
        </ul>
        <pre><code>{`<?php
  // Laravel route example
  /*
  Route::get('/', function () {
      return view('welcome');
  });
  
  Route::get('/users/{id}', function ($id) {
      return 'User '.$id;
  });
  */
  
  // Symfony controller example
  /*
  namespace App\Controller;
  
  use Symfony\Component\HttpFoundation\Response;
  use Symfony\Component\Routing\Annotation\Route;
  
  class DefaultController
  {
      /**
       * @Route("/", name="homepage")
       */
      public function index(): Response
      {
          return new Response('Hello World!');
      }
  }
  */
  
  // CodeIgniter controller example
  /*
  class Blog extends CI_Controller {
      public function index() {
          $data['title'] = 'My Blog Title';
          $data['content'] = 'My Blog Content';
          
          $this->load->view('blog_view', $data);
      }
  }
  */
?>`}</code></pre>
      </>
    ),
  },
  {
    id: 17,
    name: 'Working with APIs in PHP',
    content: (
      <>
        <p>PHP can both consume external APIs and create APIs for others to use.</p>
        <p>Common API interaction methods include:</p>
        <ul>
          <li><strong>cURL</strong>: PHP extension for making HTTP requests</li>
          <li><strong>file_get_contents()</strong>: Simple way to fetch API responses</li>
          <li><strong>Guzzle</strong>: PHP HTTP client library</li>
        </ul>
        <pre><code>{`<?php
  // Using cURL to make API requests
  function callAPI($method, $url, $data = false) {
    $curl = curl_init();
    
    switch ($method) {
      case "POST":
        curl_setopt($curl, CURLOPT_POST, 1);
        if ($data)
          curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
        break;
      case "PUT":
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "PUT");
        if ($data)
          curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
        break;
      default:
        if ($data)
          $url = sprintf("%s?%s", $url, http_build_query($data));
    }
    
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    
    $result = curl_exec($curl);
    curl_close($curl);
    
    return $result;
  }
  
  // GET request example
  $get_data = callAPI('GET', 'https://api.example.com/users', false);
  $response = json_decode($get_data, true);
  print_r($response);
  
  // POST request example
  $post_data = array(
    "name" => "John Doe",
    "email" => "john@example.com"
  );
  $post_data = json_encode($post_data);
  
  $create_user = callAPI('POST', 'https://api.example.com/users', $post_data);
  $response = json_decode($create_user, true);
  print_r($response);
  
  // Creating a simple API
  header('Content-Type: application/json');
  
  $users = [
    ["id" => 1, "name" => "John Doe", "email" => "john@example.com"],
    ["id" => 2, "name" => "Jane Smith", "email" => "jane@example.com"]
  ];
  
  echo json_encode($users);
?>`}</code></pre>
      </>
    ),
  },
]