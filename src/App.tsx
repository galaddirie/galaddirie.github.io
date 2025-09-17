import React, { useEffect } from 'react';
import { Navbar } from '@components/Navbar/Navbar';
import { Home } from '@pages/Home/Home';
import { Projects } from '@pages/Projects/Projects';
import { Skills } from '@pages/Skills/Skills';
import { Contact } from '@pages/Contact/Contact';
import { Footer } from '@components/Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavigationProvider } from '@src/contexts/NavigationContext';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
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
              <section id='hero'>
                <Home />
              </section>
              <section id='projects'>
                <Projects />
              </section>
              <section id='skills'>
                <Skills />
              </section>
              <section id='contact'>
                <Contact />
              </section>
            </div>
          </main>
          <Footer />
        </NavigationProvider>
      </Router>
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
