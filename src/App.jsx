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
  )
}

export default App
