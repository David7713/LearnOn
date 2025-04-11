// services/aiService.js
const axios = require('axios');

exports.chatWithAI = async (message) => {
  try {
    const API_KEY = process.env.GOOGLE_AI_API_KEY;
    const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';

    const response = await axios.post(`${API_URL}?key=${API_KEY}`, {
      contents: [
        {
          parts: [
            { text: message }
          ]
        }
      ]
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const generatedText = response.data.candidates[0].content.parts[0].text;
    return generatedText;
  } catch (error) {
    console.error('AI Service Error:', error.response ? error.response.data : error.message);
    throw new Error('Failed to get response from AI service');
  }
};