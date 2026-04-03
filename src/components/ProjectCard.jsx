import React, { useMemo, useState } from 'react'

export default function ProjectCard({ project }) {
  const [showTech, setShowTech] = useState(false)

  const techItems = useMemo(() => {
    if (!project?.tech) return []

    if (Array.isArray(project.tech)) {
      return project.tech.map((item) => String(item).trim()).filter(Boolean)
    }

    return String(project.tech)
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean)
  }, [project?.tech])

  return (
    <div className="card p-6 rounded-2xl flex flex-col bg-white/5 border border-white/10">
      
      {/* Image */}
      {project.image && (
        <div className="mb-4 rounded-xl overflow-hidden bg-black/20">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-44 object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}

      {/* Title */}
      <h3 className="text-xl font-bold mb-2">
        {project.name}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* Buttons */}
      <div className="mt-auto flex gap-3 flex-wrap">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium"
          >
            Demo
          </a>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-sky-500 text-white text-sm font-medium"
          >
            Github
          </a>
        )}

        {techItems.length > 0 && (
          <button
            type="button"
            onClick={() => setShowTech((prev) => !prev)}
            className="px-4 py-2 rounded-full bg-cyan-500 text-white text-sm font-medium inline-flex items-center gap-2 transition transform hover:scale-105 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-expanded={showTech}
            aria-label={`${showTech ? 'Hide' : 'Show'} tech stack for ${project.name}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="3" />
              <path d="M8 10h8M8 14h5" />
            </svg>
            Tech
          </button>
        )}
      </div>

      {techItems.length > 0 && (
        <div
          className={`overflow-hidden transition-all duration-300 ease-out ${
            showTech
              ? 'max-h-40 opacity-100 translate-y-0 mt-4'
              : 'max-h-0 opacity-0 -translate-y-1 mt-0'
          }`}
        >
          <div className="flex flex-wrap gap-2 pt-1">
            {techItems.map((item) => (
              <span
                key={`${project.name}-${item}`}
                className="px-3 py-1 rounded-full text-xs text-gray-200 border border-white/15 bg-black/30"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
