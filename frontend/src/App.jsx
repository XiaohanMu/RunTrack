import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Events from './pages/Events';
import RunSessions from './pages/RunSessions';
import Friends from './pages/Friends';
import Navigation from './pages/Navigation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/events" element={<Events />} />
        <Route path="/run-sessions" element={<RunSessions />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/navigation" element={<Navigation />} />
      </Routes>
    </Router>
  );
}

export default App;
