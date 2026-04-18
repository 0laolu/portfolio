import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/header/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Services from './components/services/Services'
import Projects from './components/projects/Projects'
import Contact from './components/contacts/Contact'
import Technologies from './components/technologies/Technologies'
import ProjectCaseStudy from './components/projects/ProjectCaseStudy'
import Footer from './components/footer/Footer'

function App() {
    return (
        <BrowserRouter>
            <Routes>

                {/* Main portfolio page */}
                <Route path="/" element={
                    <>
                        <Navbar />
                        <div className="pt-16">
                        <Hero />
                        <section id="services"><Services /></section>
                        <section id="work"><Projects /></section>
                        <section id="about"><About /></section>
                        <section id="technologies"><Technologies /></section>
                        <section id="contact"><Contact /></section>
                        <Footer />
                        </div>
                    </>
                } />

                {/* Case study page */}
                <Route path="/projects/:slug" element={
                    <>
                        <Navbar />
                        <ProjectCaseStudy />
                    </>
                } />

            </Routes>
        </BrowserRouter>
    )
}


export default App
