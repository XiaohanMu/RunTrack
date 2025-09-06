const express = require('express');
const Event = require('../models/event');

const router = express.Router();

// Create an event
router.post('/', async (req, res) => {
  const { name, date, location } = req.body;
  try {
    const event = await Event.create({ name, date, location });
    res.status(201).json({ message: 'Event created successfully', event });
  } catch (error) {
    res.status(500).json({ error: 'Error creating event' });
  }
});

// Get all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.findAll();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching events' });
  }
});

module.exports = router;
