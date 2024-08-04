// import {Routes, Route} from 'react-router-dom'
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from './components/Navbar';
import Interests from './components/Interests';
import { useRef } from 'react';
function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);
  const interestsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
   <>
  <Navbar 
        scrollToSection={scrollToSection} 
        refs={{ homeRef, aboutRef, contactRef, skillsRef, interestsRef }} 
      />
      <div style={{ height: '100vh' }} ref={homeRef}>
        <Home />
      </div>
      <div style={{ height: '100vh' }} ref={aboutRef}>
        <About />
      </div>
      <div style={{ height: '100vh' }} ref={contactRef}>
        <Contact />
      </div>
      <div style={{ height: '100vh' }} ref={skillsRef}>
        <Skills />
      </div>
      <div style={{ height: '100vh' }} ref={interestsRef}>
        <Interests />
      </div>
   </>
  );
}

export default App;
