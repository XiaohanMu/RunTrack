import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <h1>Navigation</h1>
            <ul>
                <li><Link to="/runSessions">Start Running Session</Link></li>
                <li><Link to="/friends">Invite Friend</Link></li>
                <li><Link to="/track">Track Running Session</Link></li>
            </ul>
        </div>
    );
};

export default Navigation;
