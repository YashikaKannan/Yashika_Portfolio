import React, { useState } from 'react'
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa'
import useInView from '../hooks/useInView'

const educationData = [
  {
    id: 1,
    title: 'B.Tech - Artificial Intelligence and Data Science',
    institution: 'R.M.K. College of Engineering and Technology',
    range: '2023 - Present',
    details:
      'Grade: 8.42 (upto 5th sem)'
  },
  {
    id: 2,
    title: 'Higher Secondary (HSC)',
    institution: 'Velankanni Matriculation Higher Secondary School',
    range: '2021 - 2023',
    details:
      'Grade: 86.83'
  }
]

const workData = [
  {
    id: 1,
    title: 'Cybersecurity Intern',
    company: 'Edunet Foundation',
    range: 'Dec 2025',
    details:
      'Learnign Cybersecurity with GenAi'
  },
  {
    id: 2,
    title: 'PowerBi and Power Platform Intern',
    company: 'Power Centre Private Limited',
    range: 'Jun 2025 - Jul 2025',
    details:
      'Delivered websites and interactive dashboards for small businesses.'
  }
]

export default function Education() {
  const [activeTab, setActiveTab] = useState('education')
  const [ref, visible] = useInView()

  const items = activeTab === 'education' ? educationData : workData

  return (
    <section id="education" className="pt-24">
      <div ref={ref} className={visible ? 'fade-up-enter-active' : 'fade-up-enter'}>
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <h2 className="text-3xl font-bold mb-4">Education & Experience</h2>

          <div className="flex gap-3">
            <button
              onClick={() => setActiveTab('education')}
              className={`px-4 py-2 rounded-full font-medium flex items-center gap-2
                ${activeTab === 'education' ? 'btn btn-primary' : 'btn btn-outline'}`}
            >
              <FaGraduationCap /> Education
            </button>

            <button
              onClick={() => setActiveTab('work')}
              className={`px-4 py-2 rounded-full font-medium flex items-center gap-2
                ${activeTab === 'work' ? 'btn btn-primary' : 'btn btn-outline'}`}
            >
              <FaBriefcase /> Work
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative timeline">
          <div className="timeline-line" />

          <div className="flex flex-col">
            {items.map((item, idx) => {
              const isLeft = idx % 2 === 0

              return (
                <div key={item.id} className="relative py-10">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-start">

                    {/* LEFT CARD */}
                    <div className={`hidden lg:block lg:col-span-2 ${isLeft ? '' : 'lg:invisible'}`}>
                      {isLeft && (
                        <article
                          className={`relative timeline-card card max-w-[520px] ml-auto lg:translate-x-2
                            ${visible ? 'fade-up-enter-active from-left' : 'fade-up-enter from-left'}`}
                          style={{ ['--delay']: `${idx * 120}ms` }}
                        >
                          {/* Arrow */}
                          <div className="absolute top-8 -right-1 hidden lg:block
                            w-0 h-0 border-t-8 border-b-8 border-l-8
                            border-t-transparent border-b-transparent border-l-white/10" />

                          <h3 className="text-lg font-bold mb-1">
                            {item.institution || item.company}
                          </h3>

                          <div className="text-sm text-gray-300 mb-2 font-medium">
                            {item.title}
                          </div>

                          <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                            {Array.isArray(item.details)
                                ? item.details.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))
                                : <li>{item.details}</li>}
                          </ul>

                        </article>
                      )}
                    </div>

                    {/* CENTER */}
                    <div className="flex flex-col items-center relative lg:col-span-1">
                      <div className="timeline-marker">
                        <div className={`marker-icon large ${activeTab === 'education' ? 'edu' : 'work'}`}>
                          {activeTab === 'education'
                            ? <FaGraduationCap size={18} />
                            : <FaBriefcase size={18} />}
                        </div>
                      </div>

                      <div className="mt-3 text-xs text-gray-400">
                        {item.range}
                      </div>
                    </div>

                    {/* RIGHT CARD */}
                    <div className={`hidden lg:block lg:col-span-2${!isLeft ? '' : 'lg:invisible'}`}>
                      {!isLeft && (
                        <article
                          className={`relative timeline-card card max-w-[640px] p-7 mr-auto lg:-translate-x-2
                            ${visible ? 'fade-up-enter-active from-right' : 'fade-up-enter from-right'}`}
                          style={{ ['--delay']: `${idx * 120}ms` }}
                        >
                          {/* Arrow */}
                          <div className="absolute top-8 -left-1 hidden lg:block
                            w-0 h-0 border-t-8 border-b-8 border-r-8
                            border-t-transparent border-b-transparent border-r-white/10" />

                          <h3 className="text-lg font-bold mb-1">
                            {item.institution || item.company}
                          </h3>

                          <div className="text-sm text-gray-300 mb-2 font-medium">
                            {item.title}
                          </div>

                          <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                            {Array.isArray(item.details)
                                ? item.details.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))
                                : <li>{item.details}</li>}
                           </ul>

                        </article>
                      )}
                    </div>

                    {/* MOBILE */}
                    <div className="lg:hidden">
                      <article className="timeline-card card">
                        <h3 className="text-lg font-bold mb-1">
                          {item.institution || item.company}
                        </h3>

                        <span className="text-xs text-gray-400 block mb-2">
                          {item.range}
                        </span>

                        <div className="text-sm text-gray-300 mb-2 font-medium">
                          {item.title}
                        </div>

                        <p className="text-gray-300 text-sm leading-relaxed">
                          {item.details}
                        </p>
                      </article>
                    </div>

                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
