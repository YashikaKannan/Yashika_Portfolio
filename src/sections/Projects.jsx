import React, { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import useInView from '../hooks/useInView'

import legalai from '../assets/projects/legalai.png'
import medatlas from '../assets/projects/medatlas.png'
import stocktrend from '../assets/projects/stocktrend.png'
import doc from '../assets/projects/doc.png'
import echotwin from '../assets/projects/echoTwin.png'
import herwatch from '../assets/projects/herWatch.png'
import votewise from '../assets/projects/votewise.png'

const projects = [
  {
    name: 'VoteWise AI',
    image: votewise,
    description:
      'VoteWise AI is an intelligent election companion that guides users through the complete voting process using a structured journey, decision-based logic, and AI-powered explanations. It combines a rule-based decision engine with Google Gemini to provide personalized guidance for first-time voters, NRIs, and users who have changed constituencies. The system also includes simulation-based learning, readiness tracking, and multilingual support.',
    tech: 'FastAPI, React, TypeScript, Gemini API, Google Cloud Run, Firestore, Tailwind CSS',
    category: 'ai/ml',
    github: 'https://github.com/YashikaKannan/VoteWise-AI',
    live: 'https://votewise-ai-pro.vercel.app',
  },
    name: 'EchoTwin',
    image: echotwin,
    description:
      'EchoTwin is an IoT-enabled AI system for predictive maintenance that monitors machine health using real-time acoustic signals. Microphones connected via embedded hardware capture sound data near critical components like bearings. The system processes these signals using machine learning and anomaly detection to identify early signs of wear and failure, reducing downtime and maintenance costs in industrial environments.',
    tech: ['IoT', 'Python', 'Machine Learning', 'Signal Processing', 'FastAPI', 'React', 'Arduino', 'INMP441 Mic'],
    category: 'ai/ml',
    github: 'https://github.com/YashikaKannan/EchoTwin',
    live: '',
  },
  {
    name: 'MedAtlas',
    image: medatlas,
    description:
      'AI-powered provider directory validation system that verifies, enriches, and audits healthcare provider data using a multi-agent pipeline with confidence scoring and discrepancy detection.',
    tech: ['React', 'Python', 'FastAPI', 'SQLite'],
    category: 'all',
    github: 'https://github.com/YashikaKannan/MedAtlas',
    live: 'https://github.com/YashikaKannan/MedAtlas',
  },
  {
    name: 'Document Life Tracker',
    image: doc,
    description:
      'Document Life Tracker is a smart system that helps users securely store and manage important documents by tracking their expiry dates. It automatically sends timely email reminders before deadlines, ensuring users never miss renewals and avoid penalties or disruptions.',
    tech: ['React', 'Python', 'FastAPI', 'MySQL', 'SMTP'],
    category: 'fullstack',
    github: 'https://github.com/YashikaKannan/Document_Life_Tracker',
    live: 'https://document-life-tracker.vercel.app/',
  },
  {
    name: 'Stock Trend Predictor',
    image: stocktrend,
    description:
      'Stock Trend Predictor is a full-stack platform for analyzing and forecasting stock trends. It allows users to compare stocks, visualize price movements, and analyze indicators like Moving Average and RSI, while using an LSTM model to predict near-term prices with real-time data support.',
    tech:
      ['React', 'Python', 'FastAPI', 'TensorFlow/Keras (LSTM)', 'Scikit-learn', 'Pandas', 'NumPy', 'Recharts', 'Time-Series Analysis', 'yFinance API', 'Twelve Data API', 'Docker'],
    category: 'ai/ml',
    github: 'https://github.com/YashikaKannan/Stock_Trend_Predictor_',
    live: 'https://stock-trend-predictor-flame.vercel.app',
  },
  {
    name: 'Legal Document Demsifier',
    image: legalai,
    description:
      'A generative AI system that simplifies complex legal documents into clear, easy-to-understand summaries. The application also analyzes documents to identify potential risks and highlight key pros and cons, helping users quickly understand legal content while preserving data privacy.',
    tech: ['Python', 'Transformers', 'FastAPI', 'Vertex-ai'],
    category: 'ai/ml',
    github: 'https://github.com/YashikaKannan/Document_Life_Tracker',
    live: 'https://github.com/YashikaKannan/Document_Life_Tracker',
  },
  {
  name: 'HerWatch',
  image: herwatch,
  description:
    'HerWatch is a real-time women safety platform designed to provide instant SOS assistance during emergencies. With a single tap, users can trigger alerts that share live location with trusted contacts and enable continuous tracking. The system focuses on rapid response, accessibility, and reliable communication to enhance personal safety.',
  tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Geolocation API', 'Real-time Tracking'],
  category: 'fullstack',
  github: 'https://github.com/YashikaKannan/HerWatch',
  live: '',
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
            { label: 'FullStack', value: 'fullstack' },
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
