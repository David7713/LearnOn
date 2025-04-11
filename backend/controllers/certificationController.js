const { db } = require("../config/db");

exports.getUserCertifications = (req, res) => {
  console.log("Getting user certifications");
  console.log("User ID:", req.user.id);
  
  const userId = req.user.id;
  
  db.query("SELECT * FROM certifications WHERE user_id = ?", [userId], (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: err.message });
    }
    
    console.log("Certification results:", results);
    return res.json(results); // Return results even if empty array
  });
};
exports.addUserCertification = (req, res) => {
  console.log("Adding new certification");
  
  const userId = req.user.id;
  const { courseType } = req.body;
  
  if (!courseType || !['frontend', 'backend'].includes(courseType)) {
    return res.status(400).json({ error: "Valid course type (frontend or backend) is required" });
  }
  
  db.query(
    "INSERT INTO certifications (user_id, course_type) VALUES (?, ?)",
    [userId, courseType],
    (err, result) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ error: err.message });
      }
      
      console.log("Certification added:", result);
      return res.status(201).json({ 
        id: result.insertId,
        message: "Certification added successfully" 
      });
    }
  );
};