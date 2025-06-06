const express = require("express");
const router = express.Router();
const { register, login, getCurrentUser } = require("../controllers/authController");
const authenticate = require("../middleware/authMiddleware");

// Auth routes
router.post("/auth/register", register);
router.post("/auth/login", login);

// User data route
router.get("/user", authenticate, getCurrentUser);

module.exports = router;