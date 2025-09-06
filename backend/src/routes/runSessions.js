const express = require('express');
const RunSession = require('../models/runSession');

const router = express.Router();

// Create a run session
router.post('/', async (req, res) => {
  const { userId, distance, duration, date } = req.body;
  try {
    const runSession = await RunSession.create({ userId, distance, duration, date });
    res.status(201).json({ message: 'Run session created successfully', runSession });
  } catch (error) {
    res.status(500).json({ error: 'Error creating run session' });
  }
});

// Get all run sessions for a user
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const runSessions = await RunSession.findAll({ where: { userId } });
    res.json(runSessions);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching run sessions' });
  }
});

module.exports = router;
