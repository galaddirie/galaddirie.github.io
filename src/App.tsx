import React, { useEffect } from 'react';
import { Navbar } from '@components/Navbar/Navbar';

import { Home } from '@pages/Home/Home';
import { Projects } from '@pages/Projects/Projects';
import { Skills } from '@pages/Skills/Skills';
import { Contact } from '@pages/Contact/Contact';
import { Footer } from '@components/Footer/Footer';
import { Element as Section } from 'react-scroll';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavigationProvider } from '@src/contexts/NavigationContext';
import lozad from 'lozad';
import './App.css';

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
          <main id='main'>
            <div className='main-container'>
              <Section name=''>
                <Home />
              </Section>
              <Section name='projects'>
                <Projects />
              </Section>
              {/* <Section name='about'>
                <About />
              </Section> */}
              <Section name='skills'>
                <Skills />
              </Section>
              <Section name='contact'>
                <Contact />
              </Section>
            </div>
          </main>
          <Footer />
        </NavigationProvider>
      </Router>
    </>
  );
}

export default App;
