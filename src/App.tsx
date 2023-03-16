import { useState } from 'react'
import reactLogo from '@assets/test.png'
import { Navbar } from '@components/Navbar/Navbar'
import { ScrollSpy } from '@components/ScrollSpy/ScrollSpy'
import { Element as Section } from 'react-scroll'
import '@assets/css/style.css'
//import '@assets/css/bootstrap.min.css'
import '@assets/css/card.css'

interface SectionProps {
  name: string
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ScrollSpy>
        <Navbar />
        <Section name="hero">
          <div className="hero" style={{ marginTop: "1000px", height: "1000px" }}>
            Testing
          </div>
        </Section>
        <Section name="projects">
          <div className="hero" style={{ marginTop: "1000px", height: "1000px" }}>
            Project
          </div>
        </Section>
      </ScrollSpy>
    </div>
  )
}

export default App
