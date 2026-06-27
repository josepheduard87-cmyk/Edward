import { motion } from 'framer-motion'

const skillGroups = [
  {
    category: 'Programming Languages',
    skills: ['C#', 'Python', 'SQL', 'JavaScript', 'Kotlin'],
  },
  {
    category: 'Web Technologies',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Tailwind CSS'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['WinForms', 'SQLite', 'Android Studio', 'Visual Studio', 'VS Code', 'Figma'],
  },
  {
    category: 'Hardware & Embedded',
    skills: ['Raspberry Pi', 'Arduino', 'ESP32', 'Wiring Diagrams', 'Embedded Systems'],
  },
  {
    category: 'Networking',
    skills: ['LAN Configuration', 'TCP/IP', 'Router & Switch Admin', 'Cisco Packet Tracer', 'Local Network Deployment'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-8 h-px bg-violet-500" />
          <span className="text-violet-400 text-xs font-semibold tracking-[0.25em] uppercase">
            Skills & Tech
          </span>
        </motion.div>

        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-16 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Tools I work with<span className="text-violet-400">.</span>
        </motion.h2>

        <div className="divide-y divide-white/[0.06]">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-12 py-8 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* Left label */}
              <div className="flex-shrink-0 w-48">
                <span className="text-[10px] text-neutral-700 font-mono tracking-widest uppercase block mb-1.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-white text-sm font-semibold leading-snug group-hover:text-violet-300 transition-colors duration-300">
                  {group.category}
                </h3>
              </div>

              {/* Right: skills */}
              <div className="flex flex-wrap gap-2 flex-1">
                {group.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.06 + j * 0.04 }}
                    className="text-xs text-neutral-300 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] hover:border-violet-500/50 hover:text-violet-300 hover:bg-violet-500/5 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stat row */}
        <motion.div
          className="grid grid-cols-3 gap-4 mt-16 pt-10 border-t border-white/[0.06]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {[
            { number: '3+', label: 'Projects shipped' },
            { number: '5', label: 'Tech categories' },
            { number: '2027', label: 'Expected graduation' },
          ].map(({ number, label }) => (
            <div key={label} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-white mb-1">{number}</p>
              <p className="text-xs text-neutral-600 uppercase tracking-widest">{label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}