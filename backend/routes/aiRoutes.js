// aiRoutes.js

const express = require('express');
const aiController = require('../controllers/aiController');

const router = express.Router();

// Route for AI chat
router.post('/chat', aiController.chatWithAI);

module.exports = router;
