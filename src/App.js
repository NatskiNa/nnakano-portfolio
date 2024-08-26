import React from 'react';
//import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import About from '../src/components/pages/About';
import Skills from '../src/components/pages//Skills';
import Projects from '../src/components/pages/Projects';
import Contact from '../src/components/pages//Contact';
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
