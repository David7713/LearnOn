// Import dependencies
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const authRoutes = require("./routes/authRoutes");
const aiRoutes = require("./routes/aiRoutes");
const { connectDB, db } = require("./config/db");


const certificationRoutes = require("./routes/certificationRoutes");

// Load environment variables
dotenv.config();

// Initialize app
const app = express();

// Configure CORS properly to allow cross-origin requests
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5000'], // Add your React app's URL here
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

// Connect to Database
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api", certificationRoutes); // This will make the endpoint "/api/certifications"


// Debug route to test API
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});