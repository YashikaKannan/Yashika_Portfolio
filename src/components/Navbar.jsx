import React, { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const links = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'skills', label: 'Skills' },
    { to: 'certifications', label: 'Certifications' },
    { to: 'projects', label: 'Projects' },
    { to: 'education', label: 'Education' },
  ]

  // Hide / show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scrolling down
        setShow(false)
      } else {
        // scrolling up
        setShow(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`
        sticky top-0 z-40
        transition-transform duration-300 ease-in-out
        ${show ? 'translate-y-0' : '-translate-y-full'}
        bg-gradient-to-b from-gray-900/80 to-transparent backdrop-blur
      `}
    >
      <nav className="container mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">Yashika Kannan</div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <ScrollLink
              key={l.to}
              to={l.to}
              smooth
              spy
              duration={500}
              offset={-60}
              activeClass="active"
              className="nav-link cursor-pointer"
            >
              {l.label}
            </ScrollLink>
          ))}
          <a href="#contact" className="ml-4 btn btn-primary">
            Contact
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-800"
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-gray-900/95 border-t border-gray-800">
          <div className="flex flex-col py-4 px-6 gap-3">
            {links.map((l) => (
              <ScrollLink
                key={l.to}
                to={l.to}
                smooth
                duration={500}
                offset={-60}
                className="nav-link py-2 px-3 rounded cursor-pointer"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </ScrollLink>
            ))}
            <a href="#contact" className="mt-2 btn btn-primary">
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
