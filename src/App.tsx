import React from 'react';
import Home from './routes/Home';
import Project from './routes/Project';
import About from './routes/About';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;
