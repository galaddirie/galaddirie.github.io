import React, { useState, useEffect } from 'react'
import reactLogo from '@assets/test.png'
import { Navbar } from '@components/Navbar/Navbar'

import { Home } from '@pages/Home/Home'
import { Projects } from '@pages/Projects/Projects'
import { About } from '@pages/About/About'
import { Skills } from '@pages/Skills/Skills'
import { CV } from '@pages/CV/CV'
import { Footer } from '@components/Footer/Footer'
import { Element as Section } from 'react-scroll'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavigationProvider } from '@src/contexts/NavigationContext';
import lozad from 'lozad'
import './App.css'
import "@src/index.scss";
import 'bootstrap-icons/font/bootstrap-icons.css';

interface SectionProps {
  name: string
}


function App() {
  
  useEffect(() => {
    const observer = lozad();
    observer.observe();
  }, []);


  return (
    <>
      <Router>
      <NavigationProvider>
          <Navbar />
          <main id="main">
            <div className="main-container">

              <Section name="">
                <Home />
              </Section>
              <Section name="projects">
                <Projects />
              </Section>   
              {/* <Section name="about">
                <About />
              </Section> */}
              <Section name="skills">
                <Skills />
              </Section>
              
            </div>
          </main>
          <Footer />

      </NavigationProvider>
      </Router>
    </>
  )
}

export default App
