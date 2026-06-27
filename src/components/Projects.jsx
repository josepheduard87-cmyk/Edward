import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">

        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-8 h-px bg-violet-500" />
          <span className="text-violet-400 text-xs font-semibold tracking-[0.25em] uppercase">
            Projects
          </span>
        </motion.div>

        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-16 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Things I've built<span className="text-violet-400">.</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="group relative bg-[#0d0d0d] p-8 flex flex-col justify-between min-h-64 hover:bg-white/[0.02] transition-colors duration-300"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* Hover violet left border */}
              <div className="absolute left-0 top-0 h-full w-px bg-violet-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

              {/* Top row */}
              <div className="flex items-start justify-between mb-6">
                <span className="text-[10px] font-mono text-neutral-600 tracking-widest">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer"
                      className="text-neutral-400 hover:text-white transition-colors" aria-label="GitHub">
                      <FiGithub size={15} />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer"
                      className="text-neutral-400 hover:text-violet-400 transition-colors" aria-label="Live Demo">
                      <FiExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-violet-100 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag}
                    className="text-[11px] text-violet-400/80 px-2.5 py-1 rounded-full border border-violet-500/20 bg-violet-500/5">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
