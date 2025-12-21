import React, { useEffect, useState, useRef } from 'react'
import { FiHome, FiUser, FiGrid, FiFolder, FiMail, FiBookOpen } from 'react-icons/fi'
import './BottomNav.css'

export default function BottomNav() {
  const sections = [
    { id: 'home', icon: <FiHome size={20} />, label: 'Home' },
    { id: 'about', icon: <FiUser size={20} />, label: 'About' },
    { id: 'education', icon: <FiBookOpen size={20} />, label: 'Education' },
    { id: 'skills', icon: <FiGrid size={20} />, label: 'Skills' },
    { id: 'projects', icon: <FiFolder size={20} />, label: 'Projects' },
    { id: 'contact', icon: <FiMail size={20} />, label: 'Contact' },
  ]

  const [active, setActive] = useState('home')
  const rafRef = useRef(null)

  const handleClick = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    setActive(id)
  }

  useEffect(() => {
    const ids = sections.map((s) => s.id)
    let ticking = false

    const updateActive = () => {
      const middle = window.innerHeight / 2
      let minDist = Infinity
      let nearest = ids[0]

      ids.forEach((id) => {
        const el = document.getElementById(id)
        if (!el) return
        const rect = el.getBoundingClientRect()
        const center = rect.top + rect.height / 2
        const dist = Math.abs(center - middle)
        if (dist < minDist) {
          minDist = dist
          nearest = id
        }
      })

      setActive((prev) => (prev === nearest ? prev : nearest))
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        rafRef.current = window.requestAnimationFrame(updateActive)
      }
    }

    updateActive()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const handleKey = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleClick(id)
    }
  }

  return (
    <nav className="bottom-nav" aria-label="Bottom navigation">
      <div className="bottom-nav__inner" role="navigation">
        {sections.map((s) => (
          <button
            key={s.id}
            className={`bottom-nav__item ${active === s.id ? 'active' : ''}`}
            onClick={() => handleClick(s.id)}
            onKeyDown={(e) => handleKey(e, s.id)}
            aria-label={s.label}
            aria-current={active === s.id ? 'true' : 'false'}
            title={s.label}
            type="button"
          >
            {s.icon}
          </button>
        ))}
      </div>
    </nav>
  )
}
