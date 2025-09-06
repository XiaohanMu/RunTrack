import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    const [username, setUsername] = useState('');

    useEffect(() => {
        // Fetch friend list
        axios.get('/api/friends/list/1') // Replace 1 with the logged-in user's ID
            .then(response => setFriends(response.data))
            .catch(error => console.error(error));
    }, []);

    const addFriend = () => {
        axios.post('/api/friends/add', { userId: 1, friendId: username }) // Replace 1 with the logged-in user's ID
            .then(() => {
                alert('Friend added successfully!');
                setUsername('');
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>Friends</h1>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter friend's username"
            />
            <button onClick={addFriend}>Add Friend</button>

            <h2>Friend List</h2>
            <ul>
                {friends.map(friend => (
                    <li key={friend.id}>{friend.username}</li>
                ))}
            </ul>
        </div>
    );
};

export default Friends;
