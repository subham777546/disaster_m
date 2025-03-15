require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Disaster = require('./models/Disaster');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.post('/report', async (req, res) => {
    try {
        const { location, description, latitude, longitude } = req.body;
        const disaster = new Disaster({ location, description, latitude, longitude });
        await disaster.save();
        res.json({ message: 'Reported successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to report disaster' });
    }
});

app.get('/disasters', async (req, res) => {
    try {
      const disasters = await Disaster.find();
      res.json(disasters);
    } catch (error) {
      console.error('Error fetching disasters:', error.message);
      res.status(500).json({ error: 'Failed to fetch disasters' });
    }
  });

app.put('/respond/:id', async (req, res) => {
    try {
        await Disaster.findByIdAndUpdate(req.params.id, { status: 'Addressed' });
        res.json({ message: 'Marked as addressed' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to mark as addressed' });
    }
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
