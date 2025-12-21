import React from 'react'
import useInView from '../hooks/useInView'
import { FiCode, FiTrendingUp, FiCpu, FiGlobe } from 'react-icons/fi'

export default function About() {
  const [ref, visible] = useInView()

  return (
    <section id="about" className="py-32">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 ${
          visible ? 'fade-up-enter-active' : 'fade-up-enter'
        }`}
      >
        {/* CENTER TITLE */}
        <h2 className="text-3xl font-bold mb-14 text-center">
          About <span className="text-cyan-400">Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          
          {/* LEFT CONTENT */}
          <div>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              I’m <span className="text-white font-semibold">Yashika Kannan</span>, a developer
              with a strong interest in building reliable, user-focused web applications.
              I enjoy solving problems, writing clean code, and turning ideas into simple,
              effective digital experiences.
            </p>

            <p className="text-gray-400 leading-relaxed mb-6">
              I work primarily with <span className="text-gray-200 font-medium">Java</span> and
              modern web technologies, and I’m especially comfortable with problem-solving
              scenarios that require logical thinking and attention to detail. Alongside
              frontend development, I’ve worked on <span className="text-gray-200 font-medium">
              AI and data-driven projects</span> using Python and machine learning concepts.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Currently, I’m learning <span className="text-gray-200 font-medium">cloud computing</span>
              and strengthening my full-stack skills to build scalable, production-ready
              applications.
            </p>

            <div className="mt-8 text-gray-300">
              <span className="text-white font-medium">Languages:</span>{' '}
              English, Hindi, Saurashtra, German <span className="text-gray-400">(Beginner)</span>
            </div>

          </div>

          {/* RIGHT HIGHLIGHTS */}
          <div className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10">
          <h3 className="text-xl font-semibold mb-6">Highlights</h3>

          <ul className="space-y-5 text-gray-300">
            <li className="flex gap-4">
              <FiCode className="text-cyan-400 mt-1" />
              <span>
                Developed responsive web applications using React, focusing on clean
                component structure and maintainable UI design.
              </span>
            </li>

            <li className="flex gap-4">
              <FiTrendingUp className="text-cyan-400 mt-1" />
              <span>
                Strong problem-solving ability with hands on experience solving logical
                and algorithmic challenges using Java.
              </span>
            </li>

            <li className="flex gap-4">
              <FiCpu className="text-cyan-400 mt-1" />
              <span>
                Worked on AI and data-driven projects using Python, with practical
                exposure to machine learning models, REST APIs, Git, and team based
                development workflows.
              </span>
            </li>
          </ul>
        </div>


        </div>
      </div>
    </section>
  )
}
