require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5000
const mongoUri = process.env.MONGO_URI

app.use(cors())
app.use(express.json())

const disasterSchema = new mongoose.Schema({
  name: String,
  description: String
})

const Disaster = mongoose.model('Disaster', disasterSchema)

mongoose.connect(mongoUri)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err)
    process.exit(1)
  })

app.post('/disasters', async (req, res) => {
  try {
    const disaster = new Disaster(req.body)
    await disaster.save()
    res.status(201).json(disaster)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.get('/disasters', async (req, res) => {
  try {
    const disasters = await Disaster.find()
    res.status(200).json(disasters)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.listen(port, () => console.log(`Server running on http://localhost:${port}`))
