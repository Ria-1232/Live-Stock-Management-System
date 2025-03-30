const express = require('express');
const Livestock = require('../models/Livestock');
const router = express.Router();

// Add new livestock
router.post('/add', async (req, res) => {
  const { tagNumber, name, breed, healthStatus, productivity, lastCheckup } = req.body;
  
  const newLivestock = new Livestock({ tagNumber, name, breed, healthStatus, productivity, lastCheckup });

  try {
    await newLivestock.save();
    res.status(201).json(newLivestock);
  } catch (error) {
    res.status(400).json({ error: 'Failed to add livestock' });
  }
});

// Get all livestock
router.get('/', async (req, res) => {
  try {
    const livestock = await Livestock.find();
    res.json(livestock);
  } catch (error) {
    res.status(400).json({ error: 'Failed to fetch livestock' });
  }
});

module.exports = router;
