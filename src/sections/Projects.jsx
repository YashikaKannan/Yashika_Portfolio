import React, { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import useInView from '../hooks/useInView'

import legalai from '../assets/projects/legalai.png'
import medatlas from '../assets/projects/medatlas.png'
import stocktrend from '../assets/projects/stocktrend.png'
import doc from '../assets/projects/doc.png'

const projects = [
  {
    name: 'MedAtlas',
    image: medatlas,
    description:
      'AI-powered provider directory validation system that verifies, enriches, and audits healthcare provider data using a multi-agent pipeline with confidence scoring and discrepancy detection.',
    tech: 'React, Python, FastAPI, SQLite',
    category: 'all',
    github: 'https://github.com/YashikaKannan/MedAtlas',
    live: 'https://github.com/YashikaKannan/MedAtlas',
  },
  {
    name: 'Document Life Tracker',
    image: doc,
    description:
      'Interactive data visualization dashboard for exploring datasets with filters, charts, and export options.',
    tech: 'React, Python, FastAPI, SQLite',
    category: 'frontend',
    github: 'https://github.com/YashikaKannan/Document_Life_Tracker',
    live: 'https://github.com/YashikaKannan/Document_Life_Tracker',
  },
  {
    name: 'Stock Trend Predictor',
    image: stocktrend,
    description:
      'A machine learning project that analyzes historical stock price data to predict future market trends. Implemented data preprocessing, feature engineering, and model evaluation to understand stock movement patterns.',
    tech: 'Python, Machine Learning, Time-Series Analysis, scikit-learn and React',
    category: 'ai/ml',
    github: 'https://github.com/YashikaKannan/Stock_Trend_Predictor_',
    live: 'https://stock-trend-predictor-flame.vercel.app',
  },
   {
    name: 'Legal Document Demsifier',
    image: legalai,
    description:
      'A generative AI system that simplifies complex legal documents into clear, easy-to-understand summaries. The application also analyzes documents to identify potential risks and highlight key pros and cons, helping users quickly understand legal content while preserving data privacy.',
    tech: 'Python, Transformers, FastAPI, Vertex-ai',
    category: 'ai/ml',
    github: 'https://github.com/YashikaKannan/Document_Life_Tracker',
    live: 'https://github.com/YashikaKannan/Document_Life_Tracker',
  },
]

export default function Projects() {
  const [ref, visible] = useInView()
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="py-16">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 ${
          visible ? 'fade-up-enter-active' : 'fade-up-enter'
        }`}
      >
        <h2 className="text-3xl font-bold mb-2 text-center">Projects</h2>
        <p className="text-gray-400 mb-6 text-center">
          A selection of projects showcasing my work and skills.
        </p>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {[
            { label: 'All', value: 'all' },
            { label: 'Frontend', value: 'frontend' },
            { label: 'AI / ML', value: 'ai/ml' },
          ].map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                activeFilter === filter.value
                  ? 'bg-indigo-500 text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p) => (
            <ProjectCard project={p} key={p.name} />
          ))}
        </div>
      </div>
    </section>
  )
}
