const express = require('express');
const router = express.Router();
const { addFriend, getFriends, inviteFriendToRun } = require('../controllers/friendsController');

// Add a friend
router.post('/add', addFriend);

// Get friend list
router.get('/list/:userId', getFriends);

// Invite a friend to a run session
router.post('/invite', inviteFriendToRun);

module.exports = router;
