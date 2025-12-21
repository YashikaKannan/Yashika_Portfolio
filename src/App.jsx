import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Education from './sections/Education'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Socials from './components/Socials'
import BottomNav from './components/BottomNav'

export default function App() {
  return (
    <div className="font-sans bg-gray-900 text-white min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 lg:px-8">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Socials />
      {/* Bottom navigation (mobile-first) - shows icon-only pill at bottom center */}
      <BottomNav />
    </div>
  )
}
