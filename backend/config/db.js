const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

// Debug: Log environment variables to ensure they're loaded
console.log("Database connection info:");
console.log("Host:", process.env.DB_HOST);
console.log("User:", process.env.DB_USER);
console.log("Database:", process.env.DB_NAME);

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const connectDB = () => {
  db.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL:", err);
      throw err;
    }
    console.log("MySQL connected successfully");
  });
};

module.exports = { connectDB, db };