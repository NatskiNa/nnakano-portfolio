import React from 'react';
//import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import ScrollToTop from 'react-scroll-to-top';
import NavbarMobileView from './components/sidebar/NavbarMobileView';
import './App.css';

const App = () => {
  return (
    <>
      <NavbarMobileView />
      <Sidebar />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <ScrollToTop
        smooth
        height="20"
        width="20"
        color="white"
        style={{
          borderRadius: '90px',
          backgroundColor: 'black',
        }}
      />
    </>
  );
};

export default App;
