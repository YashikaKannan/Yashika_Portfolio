import React from 'react'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
} from 'react-icons/fa'
import { SiPython, SiTensorflow, SiTailwindcss, SiDocker, SiAmazon, SiNodedotjs } from 'react-icons/si'

import useInView from '../hooks/useInView'

const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: <FaHtml5 className="text-orange-400" /> },
      { name: 'CSS / Tailwind', icon: <SiTailwindcss className="text-sky-400" /> },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
      { name: 'React', icon: <FaReact className="text-cyan-400" /> },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs className="text-green-400" /> },
    ],
  },
  {
    title: 'AI / ML',
    skills: [
      { name: 'Python', icon: <SiPython className="text-green-400" /> },
      { name: 'TensorFlow', icon: <SiTensorflow className="text-orange-400" /> },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: <FaGithub className="text-gray-300" /> },
      { name: 'Docker', icon: <SiDocker className="text-blue-400" /> },
      { name: 'AWS', icon: <SiAmazon className="text-orange-300" /> },
    ],
  },
]

export default function Skills() {
  const [ref, visible] = useInView()

  return (
    <section id="skills" className="py-16">
      <div
        ref={ref}
        className={`${visible ? 'fade-up-enter-active' : 'fade-up-enter'}`}
      >
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-gray-400 mb-12 text-center">
          Dive into my arsenal of tech expertise across different domains.
        </p>

        {/* Grouped cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="card p-6 rounded-2xl"
            >
              {/* Group title */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-3 h-3 rounded-full bg-purple-500" />
                <h3 className="text-xl font-semibold">{group.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-6">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-2xl">
                      {skill.icon}
                    </div>
                    <span className="text-sm text-gray-400">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
