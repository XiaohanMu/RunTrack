import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RunSessions() {
  const [runSessions, setRunSessions] = useState([]);

  useEffect(() => {
    const fetchRunSessions = async () => {
      try {
        const userId = 'user-id-placeholder'; // Replace with actual user ID
        const response = await axios.get(`/api/runSessions/${userId}`);
        setRunSessions(response.data);
      } catch (error) {
        alert('Failed to fetch run sessions!');
      }
    };
    fetchRunSessions();
  }, []);

  return (
    <div>
      <h1>Run Sessions</h1>
      <ul>
        {runSessions.map((session) => (
          <li key={session.id}>{session.distance} km in {session.duration} minutes on {new Date(session.date).toLocaleDateString()}</li>
        ))}
      </ul>
    </div>
  );
}

export default RunSessions;
