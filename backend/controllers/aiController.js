// aiController.js

const aiService = require('../services/aiService'); // Import aiService

// Chat with AI endpoint
exports.chatWithAI = async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ message: 'Message is required' });
  }

  try {
    // Call the AI service
    const aiResponse = await aiService.chatWithAI(message);

    // Send the AI response back to the client
    return res.json({ aiResponse });
  } catch (err) {
    // Handle any errors that occurred in the service layer
    return res.status(500).json({ message: 'Error interacting with AI', error: err.message });
  }
};
