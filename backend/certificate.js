const express = require('express');
const router = express.Router();
const mysql = require('mysql2/promise');
const dbConfig = require('../config/db.config');

// Create a connection pool
const pool = mysql.createPool(dbConfig);

// Create certifications table if it doesn't exist
const createCertificationsTable = async () => {
  try {
    const conn = await pool.getConnection();
    await conn.query(`
      CREATE TABLE IF NOT EXISTS certifications (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        username VARCHAR(50) NOT NULL,
        certification_type VARCHAR(50) NOT NULL,
        score DECIMAL(5,2) NOT NULL,
        passed BOOLEAN NOT NULL,
        completed_at DATETIME NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id)
      )
    `);
    conn.release();
    console.log('Certifications table checked/created.');
  } catch (error) {
    console.error('Error creating certifications table:', error);
  }
};

// Call this when the server starts
createCertificationsTable();

// Helper function to check if user exists
const userExists = async (userId) => {
  try {
    const conn = await pool.getConnection();
    const [rows] = await conn.query('SELECT id FROM users WHERE id = ?', [userId]);
    conn.release();
    return rows.length > 0;
  } catch (error) {
    console.error('Error checking if user exists:', error);
    return false;
  }
};

// POST route to save certification results
router.post('/certifications', async (req, res) => {
  try {
    console.log('Received certification submission:', req.body);
    const { userId, username, certificationType, score, passed, completedAt } = req.body;
    
    // Validate input
    if (!userId || !username || !certificationType || score === undefined || passed === undefined) {
      console.log('Missing required data in request');
      return res.status(400).json({ message: 'Missing required certification data' });
    }

    // Check if user exists to prevent foreign key constraint error
    const doesUserExist = await userExists(userId);
    if (!doesUserExist) {
      console.log(`User ID ${userId} does not exist in the users table`);
      return res.status(404).json({ message: 'User not found' });
    }

    // Save to database
    const conn = await pool.getConnection();
    const [result] = await conn.query(
      `INSERT INTO certifications 
      (user_id, username, certification_type, score, passed, completed_at) 
      VALUES (?, ?, ?, ?, ?, ?)`,
      [userId, username, certificationType, score, passed, completedAt]
    );
    conn.release();

    console.log(`Certification saved with ID: ${result.insertId}`);
    res.status(201).json({ 
      message: 'Certification saved successfully',
      certificationId: `CERT-${result.insertId}`
    });
  } catch (error) {
    console.error('Error saving certification:', error);
    res.status(500).json({ message: `Internal server error: ${error.message}` });
  }
});

// GET route to retrieve user certifications
router.get('/certifications/user/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    // Get certifications from database
    const conn = await pool.getConnection();
    const [rows] = await conn.query(
      `SELECT * FROM certifications WHERE user_id = ? ORDER BY completed_at DESC`,
      [userId]
    );
    conn.release();

    res.status(200).json(rows);
  } catch (error) {
    console.error('Error retrieving certifications:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;