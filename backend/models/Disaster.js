const mongoose = require('mongoose');

const disasterSchema = new mongoose.Schema({
    location: String,
    description: String,
    latitude: Number,
    longitude: Number,
    status: { type: String, default: 'Pending' }
});

const Disaster = mongoose.model('Disaster', disasterSchema);
module.exports = Disaster;
