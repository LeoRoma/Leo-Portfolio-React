import React from 'react';
import './App.css';
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import LandingPage from './components/LandingPage';
import Projects from './components/Projects';
import Resume from './components/Resume';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div>
      <NavigationBar />
      {/* <LandingPage />
      <AboutMe />
      <Resume />
      <Projects />
      <Contact /> */}
    </div>
  );
}

export default App;
