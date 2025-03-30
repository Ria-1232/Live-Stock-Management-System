const mongoose = require('mongoose');

const livestockSchema = new mongoose.Schema({
  tagNumber: { type: String, required: true, unique: true },
  name: String,
  breed: String,
  healthStatus: String,  // E.g., Healthy, Sick, etc.
  productivity: Number,  // E.g., milk production in liters per day
  lastCheckup: Date,
});

const Livestock = mongoose.model('Livestock', livestockSchema);
module.exports = Livestock;
