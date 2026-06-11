import React, { useState } from 'react'
import { projectsData } from '../assets/assets'

const tabs = ['All', 'Completed', 'Ongoing', 'Upcoming']

const statusStyle = {
  Completed: 'bg-white/10 text-white/50 backdrop-blur-md',
  Ongoing:   'bg-[#c8a97e]/15 text-[#c8a97e] backdrop-blur-md',
  Upcoming:  'bg-white/5 text-white/30 backdrop-blur-md',
}

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All')
 

  const projects = projectsData.map((p, i) => ({
    ...p,
    status: ['Completed', 'Ongoing', 'Upcoming'][i % 3],
  }))

  const filtered =
    activeTab === 'All'
      ? projects
      : projects.filter((p) => p.status === activeTab)

  return (
    <section
      id="projects"
      className="bg-[#0e0e0e] text-white px-6 md:px-16 lg:px-24 py-28 scroll-mt-32"
    >

      {/* Header */}
      <p className="text-[9px] tracking-[0.4em] uppercase text-[#c8a97e] mb-4">
        Our Portfolio
      </p>
      <div className="w-10 h-px bg-[#c8a97e] mb-6" />

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
        <h2 className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light uppercase leading-none">
          Projects That<br />
          <span className="italic text-[#c8a97e]">Speak Boldly</span>
        </h2>

        {/* Tabs */}
        <div className="flex gap-px border border-white/[0.08] p-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-[9px] tracking-[0.25em] uppercase px-5 py-2.5 transition-all duration-300
              ${
                activeTab === tab
                  ? 'bg-[#c8a97e] text-black'
                  : 'text-white/35 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="flex flex-col gap-px bg-white/[0.05]">

        {filtered.map((project, i) => (
          <div
            key={i}
             className="group grid grid-cols-1 md:grid-cols-2 bg-[#0e0e0e]"
          >

            {/* IMAGE */}
            <div className="relative overflow-hidden h-72 md:h-96">

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />

              {/* FIXED LINK (IMPORTANT) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/60">

                <p className="text-[9px] text-[#c8a97e] mb-2 uppercase">
                  Starting From
                </p>

                <p className="font-cormorant text-4xl mb-4">
                  {project.price}
                </p>

                <a
                  href={project.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[9px] border border-white/20 px-5 py-2 hover:border-[#c8a97e]"
                >
                  View on Map
                </a>

              </div>

              <div className={`absolute top-5 left-5 text-[8px] px-3 py-1 ${statusStyle[project.status]}`}>
                {project.status}
              </div>

            </div>

            {/* CONTENT */}
            <div className="flex flex-col justify-between px-8 md:px-10 py-10 border-l border-white/[0.05]">

              <div>

                <div className="flex justify-between mb-5">
                  <span className="text-[9px] text-[#c8a97e] uppercase">
                    {project.category}
                  </span>
                  <span className="text-[9px] text-white/20">
                    {project.year}
                  </span>
                </div>

                <h3 className="font-cormorant text-4xl mb-4 uppercase">
                  {project.title}
                </h3>

                <p className="text-[12px] text-white/40 mb-8">
                  {project.description}
                </p>

              </div>

              {/* FIXED BUTTONS */}
              <div className="flex gap-3 flex-wrap">

                <a
                  href={project.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[9px] px-5 py-3 border border-white/10 hover:border-[#c8a97e]"
                >
                  View on Map
                </a>

                <button className="text-[9px] px-5 py-3 border border-white/10 hover:border-white">
                  View Details →
                </button>

              </div>

            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Projects