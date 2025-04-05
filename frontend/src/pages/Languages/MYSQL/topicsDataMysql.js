export const topicsDataMysql = [
  {
    id: 1,
    name: 'Introduction to MySQL',
    content:
      'MySQL is an open-source relational database management system. It uses Structured Query Language (SQL) to manage and manipulate data stored in a relational database.'
  },
  {
    id: 2,
    name: 'Setting Up MySQL',
    content:
      'To set up MySQL, download the installer from the official MySQL website and follow the instructions. You can check if MySQL is installed by running `mysql --version` in the terminal.'
  },
  {
    id: 3,
    name: 'MySQL Databases and Tables',
    content:
      'In MySQL, data is stored in databases, which contain tables. A table is a collection of rows and columns, where each row represents a record and each column represents a field in the record.'
  },
  {
    id: 4,
    name: 'Basic SQL Queries',
    content:
      'MySQL supports SQL queries like SELECT, INSERT, UPDATE, DELETE, and more. You can retrieve data from tables using the SELECT statement and insert new records with the INSERT statement.'
  },
  {
    id: 5,
    name: 'Joins in MySQL',
    content:
      'MySQL allows you to combine rows from two or more tables using SQL JOIN operations. The most common joins are INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN.'
  },
  {
    id: 6,
    name: 'MySQL Data Types',
    content:
      'MySQL supports various data types for columns, including INTEGER, VARCHAR, DATE, FLOAT, and more. These data types define the kind of data that can be stored in a column.'
  },
  {
    id: 7,
    name: 'Indexes in MySQL',
    content:
      'Indexes are used in MySQL to improve the performance of queries. An index is created on one or more columns of a table, which helps speed up data retrieval operations.'
  },
  {
    id: 8,
    name: 'Primary and Foreign Keys',
    content:
      'A primary key uniquely identifies each record in a table, while a foreign key establishes a relationship between two tables. These are fundamental for maintaining data integrity in relational databases.'
  },
  {
    id: 9,
    name: 'MySQL Constraints',
    content:
      'Constraints in MySQL are rules applied to table columns to enforce data integrity. Common constraints include NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK, and DEFAULT.'
  },
  {
    id: 10,
    name: 'MySQL Stored Procedures',
    content:
      'Stored procedures are precompiled SQL statements that are stored in the database. They help encapsulate logic and can be called with parameters for repeated use.'
  },
  {
    id: 11,
    name: 'Triggers in MySQL',
    content:
      'A trigger is a set of SQL statements that automatically executes when a specific event occurs in a table. Triggers can be used for data validation, logging, or enforcing rules.'
  },
  {
    id: 12,
    name: 'MySQL Backup and Restore',
    content:
      'Backing up data is crucial to prevent data loss. MySQL provides tools like mysqldump to back up databases and restore them in case of data corruption or other issues.'
  },
  {
    id: 13,
    name: 'MySQL Performance Optimization',
    content:
      'Optimizing queries, using indexes efficiently, and analyzing execution plans are key strategies for improving MySQL performance. Tools like EXPLAIN help debug and enhance query performance.'
  },
  {
    id: 14,
    name: 'MySQL Transactions',
    content:
      'Transactions in MySQL are used to execute a group of SQL statements as a single unit. They ensure data consistency by allowing rollback or commit of all operations within the transaction.'
  },
  {
    id: 15,
    name: 'Connecting MySQL with Programming Languages',
    content:
      'MySQL can be integrated with various programming languages like Python, PHP, Java, and Node.js using connectors or libraries. This allows developers to perform database operations programmatically.'
  }
];
