import React from 'react'
import useTypewriter from '../hooks/useTypewriter'
import { Link as ScrollLink } from 'react-scroll'
import profile from '../assets/profile.png'

import useInView from '../hooks/useInView' 

export default function Hero() {
  const [ref, visible] = useInView()
  const words = ['Frontend Developer', 'AI & Data Science Student', 'React Developer']
  const typed = useTypewriter(words, {loop: 0, typeSpeed: 120, deleteSpeed: 80, delaySpeed: 10000000});


  return (
    <section id="home" className={`pt-12 pb-40 hero-bg ${visible ? 'fade-up-enter-active' : 'fade-up-enter'}`}>
      <div ref={ref} className="max-w-3xl mx-auto px-4 text-center">
        {/* Circular avatar with glow */}
        <div className="hero-avatar mx-auto mb-6">
          <img src={profile} alt="Yashika K" className="w-36 h-36 rounded-full object-cover border-4 border-white/6 shadow-avatar" />
        </div>

        {/* Headline with typed roles and gradient underline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 leading-tight">
          <span className="hero-accent-text">I'm Yashika K</span><br></br>{' '}
          <span className="hero-role gradient-underline">
            {typed}
            <span className="inline-block ml-5 animate-blink">|</span>
          </span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto mb-6 text-sm md:text-base">I build modern, accessible user interfaces using React with a focus on performance and delightful UX. Currently exploring the intersection of frontend development and AI.</p>

        {/* CTA buttons */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <ScrollLink to="contact" smooth={true} duration={500} offset={-60} className="btn btn-primary" role="button">Contact me here</ScrollLink>

          <a
            href="https://drive.google.com/file/d/1AuJj3nu4J11JX8lTKsuKV-XH5eHZLa6O/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline inline-flex items-center gap-2"
            aria-label="View resume on Google Drive"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M12 3v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M8 11l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M21 21H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            View Resume
          </a>
        </div>

        {/* Social icons */}
        <div className="hero-socials flex items-center justify-center gap-3">
          <a href="https://www.linkedin.com/in/yashika-kannan" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn"><svg aria-hidden width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.6 4.04 5.5 2.94 5.5C1.84 5.5 0.9 4.6 0.9 3.5C0.9 2.4 1.84 1.5 2.94 1.5C4.04 1.5 4.98 2.4 4.98 3.5Z"/><path d="M0.5 8.98H4.5V24H0.5z"/><path d="M8.5 8.98H12.2V11.1H12.27C12.85 10.08 14.27 9 16.6 9C20.95 9 22 11.98 22 16.15V24H18V16.95C18 14.86 17.98 12.11 15 12.11C12 12.11 11.6 14.53 11.6 16.79V24H8.5z"/></svg></a>
          <a href="https://github.com/YashikaKannan" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub"><svg aria-hidden width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z"/></svg></a>
          
          <a href="mailto:yashikakannan05@gamil.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Email"><svg aria-hidden width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg></a>
        </div>
      </div>
    </section>
  )
}