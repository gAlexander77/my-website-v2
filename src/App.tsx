import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Project from './pages/Project/Project';

const App: React.FC = () => {
    return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/project" element={<Project/>}/>
      </Routes>
    </Router>
    );
}

export default App;
