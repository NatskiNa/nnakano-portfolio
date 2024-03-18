import React from 'react';
//import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
