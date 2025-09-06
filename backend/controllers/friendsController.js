const Friend = require('../models/friend');
const User = require('../models/user');

// Add a friend
exports.addFriend = async (req, res) => {
    try {
        const { userId, friendId } = req.body;
        if (userId === friendId) {
            return res.status(400).json({ message: 'You cannot add yourself as a friend.' });
        }

        const friend = await Friend.create({ userId, friendId });
        res.status(201).json(friend);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get friend list
exports.getFriends = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findByPk(userId, {
            include: [{ model: User, as: 'Friends' }],
        });

        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        res.status(200).json(user.Friends);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Invite a friend to a run session
exports.inviteFriendToRun = async (req, res) => {
    try {
        const { userId, friendId, runSessionId } = req.body;
        // Logic to send an invitation (e.g., notification or email)
        res.status(200).json({ message: `Invitation sent to friendId: ${friendId} for runSessionId: ${runSessionId}` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
