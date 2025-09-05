import { useState } from 'react'
import Navbar from './components/header/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Services from './components/services/Services'
import Projects from './components/projects/Projects'
import Contact from './components/contacts/Contact'

function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
