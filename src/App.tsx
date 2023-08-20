import { useState } from 'react'
import reactLogo from '@assets/test.png'
import { Navbar } from '@components/Navbar/Navbar'

import { Home } from '@pages/Home/Home'
import { Projects } from '@pages/Projects/Projects'
import { Element as Section } from 'react-scroll'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavigationProvider } from '@src/contexts/NavigationContext';

//import '@assets/css/style.css'
import './App.css'
import '@assets/css/card.css'
import "@src/index.scss";
import 'bootstrap-icons/font/bootstrap-icons.css';

interface SectionProps {
  name: string
}


function App() {
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
              <Section name="about">
                <div className="hero" style={{ paddingTop: "100px", height: "1000px" }}>
                  about
                </div>
              </Section>
            </div>
          </main>

      </NavigationProvider>
      </Router>
    </>
  )
}

export default App
