 import React from 'react'

export default function ProjectCard({ project }) {
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
      <div className="mt-auto flex gap-3">
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
      </div>
    </div>
  )
}
