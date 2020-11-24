import React from 'react';
import './App.css';
// import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
// import Contact from './components/Contact';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import LandingPage from './components/LandingPage';
import Projects from './components/Projects';
import Resume from './components/Resume';


function App() {
  return (
    <div>
      <NavigationBar />
      <LandingPage />
      <AboutMe />
      <Resume />
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
