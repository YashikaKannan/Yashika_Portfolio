import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'


export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden">
      
      {/* FULL-WIDTH BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1220] to-[#05080f]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        
        <div className="flex flex-col md:flex-row justify-between gap-10">
          
          {/* LEFT */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Let&apos;s build something together
            </h3>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Feel free to reach out if you&apos;re looking for a developer,
              have a question or just want to connect 🎯
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex gap-5 text-xl text-gray-300">
            <a
              href="https://www.linkedin.com/in/yashika-kannan"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/YashikaKannan"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:yashikakannan05@gmail.com"           aria-label="Email"            className="hover:text-white transition"
            >
              <FiMail />
          </a>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-12 h-px w-full bg-white/10" />

        {/* BOTTOM */}
        <div className="text-center text-sm text-gray-400">
          © 2025 All rights reserved.<br />
          Made by{' '} <span className="text-white font-medium">Yashika Kannan</span>
        </div>
      </div>
    </footer>
  )
}
