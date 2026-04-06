import { useState } from 'react'
import Navbar from './components/header/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Services from './components/services/Services'
import Projects from './components/projects/Projects'
import Contact from './components/contacts/Contact'
import Technologies from './components/technologies/Technologies'

function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <Services/>
      <Projects/>
      <About/>
      <Technologies/>
      <Contact/>
    </>
    // <div className=".bg-card p-8">
    //   <h1 className="font-display grad-text text-5xl">It's working.</h1>
    //   <p className="font-body text-[var(--color-muted)] mt-2">DM Sans body text.</p>
    //   <div className="glow-line mt-4"></div>
    // </div>
  )
}

export default App
