export const topicsDataMysql = [
  {
    id: 1,
    name: 'Introduction to MySQL',
    content: (
      <>
        <p>MySQL is an open-source relational database management system (RDBMS) that uses SQL (Structured Query Language) for data management.</p>
        <p>It is commonly used to store and retrieve data for web applications and is known for its high performance, reliability, and ease of use.</p>
      </>
    ),
  },
  {
    id: 2,
    name: 'Setting Up MySQL',
    content: (
      <>
        <p>To set up MySQL, follow these steps:</p>
        <ol>
          <li>Download the installer from the official <a href="https://dev.mysql.com/downloads/installer/" target="_blank">MySQL website</a>.</li>
          <li>Run the installer and follow the instructions.</li>
          <li>Once installed, open the terminal and check if MySQL is installed by running the command: <code>mysql --version</code>.</li>
        </ol>
      </>
    ),
  },
  {
    id: 3,
    name: 'MySQL Databases and Tables',
    content: (
      <>
        <p>In MySQL, data is organized into databases, and each database contains tables.</p>
        <p>Each table is made up of rows and columns, where:</p>
        <ul>
          <li><strong>Rows</strong> represent individual records (entries).</li>
          <li><strong>Columns</strong> define the attributes or fields of the record.</li>
        </ul>
        <p>Example of creating a database and table:</p>
        <pre><code>{`CREATE DATABASE School;
  USE School;
  
  CREATE TABLE Students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    age INT
  );`}</code></pre>
      </>
    ),
  },
  {
    id: 4,
    name: 'Basic SQL Queries',
    content: (
      <>
        <p>SQL (Structured Query Language) is used to communicate with the database. Some of the most common SQL queries include:</p>
        <ul>
          <li><strong>SELECT</strong> – retrieve data from one or more tables</li>
          <li><strong>INSERT</strong> – add new data into a table</li>
          <li><strong>UPDATE</strong> – modify existing data in a table</li>
          <li><strong>DELETE</strong> – remove data from a table</li>
        </ul>
        <p>Example:</p>
        <pre><code>{`SELECT * FROM Students WHERE age > 18;`}</code></pre>
      </>
    ),
  },
  {
    id: 5,
    name: 'Joins in MySQL',
    content: (
      <>
        <p>Joins in MySQL allow you to combine data from two or more tables. The most common types of joins are:</p>
        <ul>
          <li><strong>INNER JOIN</strong> – returns only the rows that have matching values in both tables</li>
          <li><strong>LEFT JOIN</strong> – returns all rows from the left table and matched rows from the right table</li>
          <li><strong>RIGHT JOIN</strong> – returns all rows from the right table and matched rows from the left table</li>
          <li><strong>FULL JOIN</strong> – returns rows when there is a match in one of the tables</li>
        </ul>
        <p>Example:</p>
        <pre><code>{`SELECT Students.name, Courses.name
  FROM Students
  INNER JOIN Enrollments ON Students.id = Enrollments.student_id
  INNER JOIN Courses ON Enrollments.course_id = Courses.id;`}</code></pre>
      </>
    ),
  },
  {
    id: 6,
    name: 'MySQL Data Types',
    content: (
      <>
        <p>MySQL supports various data types for columns. Some common ones include:</p>
        <ul>
          <li><strong>INT</strong> – integer numbers</li>
          <li><strong>VARCHAR</strong> – variable-length strings</li>
          <li><strong>DATE</strong> – date values</li>
          <li><strong>FLOAT</strong> – floating-point numbers</li>
        </ul>
        <p>Example of defining data types in a table:</p>
        <pre><code>{`CREATE TABLE Users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50),
    email VARCHAR(100),
    birthdate DATE
  );`}</code></pre>
      </>
    ),
  },
  {
    id: 7,
    name: 'Indexes in MySQL',
    content: (
      <>
        <p>Indexes in MySQL are used to speed up the retrieval of data. An index can be created on one or more columns of a table.</p>
        <p>Example of creating an index:</p>
        <pre><code>{`CREATE INDEX idx_username ON Users (username);`}</code></pre>
        <p>Indexes improve query performance, especially for large tables with frequent searches.</p>
      </>
    ),
  },
  {
    id: 8,
    name: 'Primary and Foreign Keys',
    content: (
      <>
        <p><strong>Primary keys</strong> uniquely identify each record in a table. A <strong>foreign key</strong> is used to link two tables together.</p>
        <ul>
          <li>The primary key ensures that each record is unique.</li>
          <li>The foreign key enforces referential integrity between tables.</li>
        </ul>
        <p>Example:</p>
        <pre><code>{`CREATE TABLE Orders (
    order_id INT PRIMARY KEY,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES Users(id)
  );`}</code></pre>
      </>
    ),
  },
  {
    id: 9,
    name: 'MySQL Constraints',
    content: (
      <>
        <p>Constraints are used to enforce rules on data in a table to ensure data integrity. Some common constraints include:</p>
        <ul>
          <li><strong>NOT NULL</strong> – ensures a column cannot have a NULL value</li>
          <li><strong>UNIQUE</strong> – ensures all values in a column are unique</li>
          <li><strong>CHECK</strong> – ensures the value in a column meets a specific condition</li>
        </ul>
        <p>Example:</p>
        <pre><code>{`CREATE TABLE Products (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) CHECK (price > 0)
  );`}</code></pre>
      </>
    ),
  },
  {
    id: 10,
    name: 'MySQL Stored Procedures',
    content: (
      <>
        <p>Stored procedures are precompiled SQL statements stored in the database. They can be executed repeatedly and help encapsulate logic.</p>
        <p>Example of creating and calling a stored procedure:</p>
        <pre><code>{`DELIMITER //
  CREATE PROCEDURE GetUserInfo(IN userId INT)
  BEGIN
    SELECT * FROM Users WHERE id = userId;
  END //
  DELIMITER ;
  
  CALL GetUserInfo(1);`}</code></pre>
      </>
    ),
  },
  {
    id: 11,
    name: 'Triggers in MySQL',
    content: (
      <>
        <p>Triggers are SQL statements that automatically execute when a specified event occurs in a table, such as INSERT, UPDATE, or DELETE.</p>
        <p>Example of creating a trigger:</p>
        <pre><code>{`CREATE TRIGGER after_user_insert
  AFTER INSERT ON Users
  FOR EACH ROW
  BEGIN
    INSERT INTO Logs (message) VALUES ('New user added: ' + NEW.username);
  END;`}</code></pre>
      </>
    ),
  },
  {
    id: 12,
    name: 'MySQL Backup and Restore',
    content: (
      <>
        <p>Backing up and restoring databases is essential for disaster recovery. MySQL provides tools like <code>mysqldump</code> for backup.</p>
        <p>Example of backing up a database:</p>
        <pre><code>{`mysqldump -u root -p my_database > backup.sql`}</code></pre>
        <p>To restore a backup:</p>
        <pre><code>{`mysql -u root -p my_database < backup.sql`}</code></pre>
      </>
    ),
  },
  {
    id: 13,
    name: 'MySQL Performance Optimization',
    content: (
      <>
        <p>To optimize performance, consider using the following strategies:</p>
        <ul>
          <li>Use indexes to speed up query execution</li>
          <li>Analyze query execution plans with <code>EXPLAIN</code></li>
          <li>Avoid SELECT * and use specific columns</li>
        </ul>
        <p>Example of using <code>EXPLAIN</code>:</p>
        <pre><code>{`EXPLAIN SELECT * FROM Orders WHERE user_id = 1;`}</code></pre>
      </>
    ),
  },
  {
    id: 14,
    name: 'MySQL Transactions',
    content: (
      <>
        <p>Transactions ensure that a group of SQL statements is executed as a single unit. They help maintain data consistency and allow you to roll back changes if something goes wrong.</p>
        <p>Example of a transaction:</p>
        <pre><code>{`START TRANSACTION;
  
  UPDATE Users SET balance = balance - 100 WHERE id = 1;
  UPDATE Users SET balance = balance + 100 WHERE id = 2;
  
  COMMIT;`}</code></pre>
      </>
    ),
  },
  {
    id: 15,
    name: 'Connecting MySQL with Programming Languages',
    content: (
      <>
        <p>MySQL can be integrated with various programming languages to perform database operations.</p>
        <p>For example, in Node.js, you can use the <strong>mysql2</strong> library to connect to a MySQL database:</p>
        <pre><code>{`const mysql = require('mysql2');
  
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'my_database'
  });
  
  connection.query('SELECT * FROM Users', (err, results) => {
    console.log(results);
  });`}</code></pre>
      </>
    ),
    
  },
  {
    id: 16,
    name: 'MySQL Views',
    content: (
      <>
        <p>A <strong>view</strong> in MySQL is a virtual table created by a query that retrieves data from one or more tables. Views are useful for simplifying complex queries and providing a more secure way to access data.</p>
        <p>Example of creating a view:</p>
        <pre><code>{`CREATE VIEW StudentNames AS
  SELECT id, name FROM Students;`}</code></pre>
        <p>To use the view:</p>
        <pre><code>{`SELECT * FROM StudentNames;`}</code></pre>
      </>
    ),
  },
  {
    id: 17,
    name: 'MySQL Aliases',
    content: (
      <>
        <p><strong>Aliases</strong> are used to rename columns or tables temporarily for easier reference. This is especially useful when working with complex queries.</p>
        <p>Example of using aliases for tables and columns:</p>
        <pre><code>{`SELECT s.name AS student_name, c.name AS course_name
  FROM Students s
  JOIN Courses c ON s.course_id = c.id;`}</code></pre>
      </>
    ),
  },
  {
    id: 18,
    name: 'MySQL Normalization',
    content: (
      <>
        <p><strong>Normalization</strong> is the process of organizing data in a way that reduces redundancy and dependency. The goal is to eliminate data anomalies and ensure efficient data storage.</p>
        <p>There are several normal forms (1NF, 2NF, 3NF, etc.), with each level addressing different types of redundancy and dependency issues.</p>
        <p>Example of a normalized table:</p>
        <pre><code>{`CREATE TABLE Students (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE
  );
  
  CREATE TABLE Courses (
    id INT PRIMARY KEY,
    name VARCHAR(100)
  );
  
  CREATE TABLE Enrollments (
    student_id INT,
    course_id INT,
    PRIMARY KEY(student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES Students(id),
    FOREIGN KEY (course_id) REFERENCES Courses(id)
  );`}</code></pre>
      </>
    ),
  },
  {
    id: 19,
    name: 'MySQL Full-Text Search',
    content: (
      <>
        <p><strong>Full-text search</strong> is a feature in MySQL that allows you to perform sophisticated searches on text-based columns. It enables searching for words and phrases within large volumes of text.</p>
        <p>To use full-text search, you need to create a full-text index:</p>
        <pre><code>{`CREATE FULLTEXT INDEX ft_index ON Articles(title, content);`}</code></pre>
        <p>Example of a full-text search query:</p>
        <pre><code>{`SELECT * FROM Articles
  WHERE MATCH(title, content) AGAINST('MySQL tutorial' IN NATURAL LANGUAGE MODE);`}</code></pre>
      </>
    ),
  },
  {
    id: 20,
    name: 'MySQL User Management and Permissions',
    content: (
      <>
        <p>MySQL allows you to create and manage users, as well as assign specific permissions to them. This helps control who can access the database and what actions they can perform.</p>
        <p>Example of creating a new user and granting privileges:</p>
        <pre><code>{`CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';
  GRANT SELECT, INSERT, UPDATE ON my_database.* TO 'newuser'@'localhost';`}</code></pre>
        <p>To revoke permissions:</p>
        <pre><code>{`REVOKE INSERT, UPDATE ON my_database.* FROM 'newuser'@'localhost';`}</code></pre>
      </>
    ),
  },
  {
    id: 21,
    name: 'MySQL User-Defined Functions (UDFs)',
    content: (
      <>
        <p><strong>User-Defined Functions (UDFs)</strong> allow you to create custom functions in MySQL that can be used like built-in functions.</p>
        <p>UDFs are useful when you need to perform calculations or operations that are not covered by MySQL's built-in functions.</p>
        <p>Example of creating a UDF:</p>
        <pre><code>{`CREATE FUNCTION add_numbers(a INT, b INT) RETURNS INT
  BEGIN
    RETURN a + b;
  END;`}</code></pre>
        <p>To call the function:</p>
        <pre><code>{`SELECT add_numbers(2, 3);`}</code></pre>
      </>
    ),
  },
  {
    id: 22,
    name: 'MySQL Data Import and Export',
    content: (
      <>
        <p>MySQL provides several methods for importing and exporting data. This is useful for transferring data between different MySQL instances or for backup purposes.</p>
        <p>To import data from a CSV file:</p>
        <pre><code>{`LOAD DATA INFILE '/path/to/data.csv'
  INTO TABLE Students
  FIELDS TERMINATED BY ',' 
  ENCLOSED BY '"'
  LINES TERMINATED BY '\n';`}</code></pre>
        <p>To export data to a CSV file:</p>
        <pre><code>{`SELECT * FROM Students
  INTO OUTFILE '/path/to/data.csv'
  FIELDS TERMINATED BY ','
  ENCLOSED BY '"'
  LINES TERMINATED BY '\n';`}</code></pre>
      </>
    ),
  },
  {
    id: 23,
    name: 'MySQL Replication',
    content: (
      <>
        <p><strong>Replication</strong> in MySQL allows you to copy data from one MySQL server (the master) to one or more MySQL servers (slaves) for redundancy and scaling purposes.</p>
        <p>Replication can be set up using binary logs to replicate changes made to the master database to the slave databases in real-time.</p>
        <p>Example of setting up replication:</p>
        <pre><code>{`# On the master server:
  GRANT REPLICATION SLAVE ON *.* TO 'replica_user'@'slave_ip' IDENTIFIED BY 'password';
  SHOW MASTER STATUS;
  
  # On the slave server:
  CHANGE MASTER TO
    MASTER_HOST='master_ip',
    MASTER_USER='replica_user',
    MASTER_PASSWORD='password',
    MASTER_LOG_FILE='master_log_file',
    MASTER_LOG_POS=log_position;
  START SLAVE;`}</code></pre>
      </>
    ),
  },
  {
    id: 24,
    name: 'MySQL Sharding',
    content: (
      <>
        <p><strong>Sharding</strong> is the process of splitting data across multiple databases or tables, which helps in scaling applications by distributing the load.</p>
        <p>Sharding can be done based on different criteria, such as user ID or geographic location.</p>
        <p>Example of sharding a user database by user ID:</p>
        <pre><code>{`-- Shard 1 (users 1-1000)
  CREATE DATABASE users_shard_1;
  CREATE TABLE users_shard_1.users (id INT, name VARCHAR(100));
  
  -- Shard 2 (users 1001-2000)
  CREATE DATABASE users_shard_2;
  CREATE TABLE users_shard_2.users (id INT, name VARCHAR(100));`}</code></pre>
      </>
    ),
  },
  {
    id: 25,
    name: 'MySQL JSON Data Type',
    content: (
      <>
        <p>The <strong>JSON</strong> data type in MySQL allows you to store JSON (JavaScript Object Notation) formatted data directly in a column.</p>
        <p>Example of creating a table with a JSON column:</p>
        <pre><code>{`CREATE TABLE Products (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    attributes JSON
  );`}</code></pre>
        <p>Example of inserting JSON data:</p>
        <pre><code>{`INSERT INTO Products (id, name, attributes)
  VALUES (1, 'Laptop', '{"color": "black", "brand": "Dell"}');`}</code></pre>
      </>
    ),
  }
  
  
];
