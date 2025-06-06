const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { db } = require("../config/db");

exports.register = async (req, res) => {
  const { email, password, userType, username } = req.body;

  if (!email || !password || !userType || !username) {
    return res.status(400).json({ message: "All fields are required" });
  }

  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    if (results.length > 0) {
      return res.status(400).json({ message: "User with this email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const query = "INSERT INTO users (email, password, username, user_type) VALUES (?, ?, ?, ?)";
    db.query(query, [email, hashedPassword, username, userType], (err) => {
      if (err) return res.status(500).json({ error: err.message });

      res.status(201).json({ message: "User registered successfully!" });
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    if (results.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = results[0];

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username }, 
      process.env.JWT_SECRET, 
      { expiresIn: '1h' }
    );
    

    res.json({
      message: "Login successful",
      token,
      user: { id: user.id, username: user.username, email: user.email, userType: user.user_type },
    });
  });
};

// New function to get current user data
exports.getCurrentUser = (req, res) => {
  // The authenticate middleware has already verified the token
  // and attached the user id to req.user.id
  
  db.query("SELECT id, username, email, user_type FROM users WHERE id = ?", [req.user.id], (err, results) => {
    if (err) {
      console.error("Error fetching user:", err);
      return res.status(500).json({ message: "Server error" });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = results[0];
    
    res.json({
      id: user.id,
      username: user.username,
      email: user.email,
      userType: user.user_type
    });
  });
};