import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Socials() {
  return (
    <div className="fixed left-6 bottom-10 hidden md:flex flex-col items-center gap-4 z-30">
      <a href="https://github.com/YashikaKannan" className="text-gray-400 hover:text-white transition"><FaGithub size={18} /></a>
      <a href="https://www.linkedin.com/in/yashika-kannan" className="text-gray-400 hover:text-white transition"><FaLinkedin size={18} /></a>
      {/* <a href="#" className="text-gray-400 hover:text-white transition"><FaInstagram size={18} /></a> */}
      <div className="w-px h-16 bg-gray-700 mt-2" />
    </div>
  )
}
