const { db } = require("../config/db");

const getCertificationsByUserId = (userId, callback) => {
  const query = "SELECT * FROM certifications WHERE user_id = ?";
  db.query(query, [userId], (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
};

const addCertification = (userId, courseType, callback) => {
  const query = "INSERT INTO certifications (user_id, course_type) VALUES (?, ?)";
  db.query(query, [userId, courseType], (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};

module.exports = { getCertificationsByUserId, addCertification };
