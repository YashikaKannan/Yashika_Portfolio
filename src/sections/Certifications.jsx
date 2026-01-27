import React, { useState } from 'react'
import useInView from '../hooks/useInView'
import { SiCisco } from 'react-icons/si'
import { SiIbm } from 'react-icons/si'
import { SiGooglecloud } from 'react-icons/si'
import { FiExternalLink } from 'react-icons/fi'
import { FaGraduationCap } from 'react-icons/fa'


const certifications = [
  {
    title: 'Introduction to CyberSecurity',
    issuer: 'CISCO Networking Academy',
    icon: <SiCisco size={36} className="text-sky-400" />,
    link: 'src/public/certificates/Introduction_to_Cybersecurity_cisco.pdf',
  },
  {
    title: 'NPTEL - Cloud Computing',
    issuer: 'Issued: SEPT 2025',
    icon: <FaGraduationCap size={34} className="text-yellow-400" />,
    link: '#',
  },
  {
    title: 'Introduction to AI',
    issuer: 'IBM Skills Build ',
    icon: <SiIbm size={34} className="text-blue-400" />,
    link: 'src/public/certificates/Completion Certificate _ SkillsBuild.pdf',
  },
  {
    title: 'Introduction to Large Language Models',
    issuer: 'GOOGLE',
    icon: <SiGooglecloud size={36} className="text-[#4285F4]" />,
    link: 'src/public/certificates/Introduction_to_LLM.png',
  },
]

export default function Certifications() {
  const [ref, visible] = useInView()
  const [flipped, setFlipped] = useState(null)

  return (
    <section id="certifications" className="py-28">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 ${
          visible ? 'fade-up-enter-active' : 'fade-up-enter'
        }`}
      >
        <h2 className="text-3xl font-bold mb-14 text-center">
          <span className="text-white">Professional </span>
          <span className="text-cyan-400">Certifications</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <div
              key={i}
              onClick={() => setFlipped(flipped === i ? null : i)}
              className="perspective cursor-pointer group transition-all duration-300"
            >
              <div
                className={`relative h-72 w-full rounded-xl transition-transform duration-700 preserve-3d
                ${flipped === i ? 'rotate-y-180' : ''}`}
              >
                {/* FRONT */}
                <div
                  className={`absolute inset-0 backface-hidden rounded-xl p-6
                  bg-white/5 border border-white/10 backdrop-blur transition-all duration-300 group-hover:border-cyan-400/60 group-hover:shadow-[0_0_40px_-12px_rgba(34,211,238,0.55)] ${cert.featured ? 'ring-1 ring-cyan-400/40' : ''}`}
                >
                  <div className="mb-6">{cert.icon}</div>

                  <h3 className="text-lg font-semibold text-white mb-1">
                    {cert.title}
                  </h3>

                  <p className="text-xs tracking-widest text-gray-400 mb-8">
                    {cert.issuer}
                  </p>

                  <span className="absolute bottom-6 text-xs text-gray-500">
                    Click to flip
                  </span>
                </div>

                {/* BACK */}
                <div
                  className={`absolute inset-0 backface-hidden rotate-y-180
                  rounded-xl p-6 flex flex-col items-center justify-center
                  bg-cyan-500/10 border border-cyan-400/40 transition-all duration-300 group-hover:shadow-[0_0_40px_-12px_rgba(34,211,238,0.6)]`}
                >
                  <h4 className="text-white font-semibold mb-6">
                    View Certificate
                  </h4>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2 rounded-full
                    bg-cyan-500 text-gray-900 font-medium hover:bg-cyan-400 transition"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Open <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
