// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

// Create an instance of Express
const app = express();

// ✅ Fix CORS - Allow requests from frontend
app.use(cors({
  origin: 'http://localhost:3000', // Update this if deploying
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type'
}));

// Middleware to parse JSON
app.use(express.json());

// ✅ Connect to MongoDB using .env
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ MongoDB Connection Error:", err));

// ✅ Define Feedback Schema & Model
const feedbackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});
const Feedback = mongoose.model('Feedback', feedbackSchema);

// ✅ POST /feedback - Store feedback in database
app.post('/feedback', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newFeedback = new Feedback({ name, email, message });
    await newFeedback.save();
    res.status(201).json({ message: "Feedback submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error saving feedback" });
  }
});

// ✅ GET /feedback - Retrieve all submitted feedback
app.get('/feedback', async (req, res) => {
  try {
    const feedbackList = await Feedback.find().sort({ timestamp: -1 });
    res.status(200).json(feedbackList);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving feedback" });
  }
});

// ✅ Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
