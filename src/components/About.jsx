import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
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
            About Me
          </span>
        </motion.div>

        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white leading-tight mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Building things that{' '}
          <span className="text-violet-400">actually work.</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12 items-start">

          {/* Profile image with glow */}
          <motion.div
            className="relative flex-shrink-0 w-56 h-72 md:w-64 md:h-70 mx-auto md:mx-0"
            initial={{ opacity: 0, x: -24, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute inset-0 -m-3 rounded-3xl bg-violet-600/30 blur-2xl pointer-events-none" />
            <div className="relative w-full h-full rounded-3xl overflow-hidden ring-2 ring-violet-500/50 ring-offset-4 ring-offset-black shadow-2xl shadow-violet-900/40">
              <img
                src="/Eduard.png"
                alt="Eduard Joseph D. Mendres"
                className="w-full h-full object-cover object-[center_25%]"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              {/* Fallback avatar */}
              <div className="absolute inset-0 items-center justify-center text-violet-400 text-4xl font-bold hidden bg-violet-500/10">
                EJM
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <div className="space-y-5 text-[15px] leading-relaxed text-neutral-400">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              I'm{' '}
              <span className="text-white font-semibold">Eduard Joseph D. Mendres</span>
              , a Computer Technology student at{' '}
              <span className="text-white font-semibold">Cebu Technological University</span>
              {' '}with hands-on experience in desktop apps, web development, and networking.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I've built a{' '}
              <span className="text-violet-400 font-medium">fully offline Raspberry Pi kiosk</span>
              {' '}integrated with an Android app for Arduino learning, a{' '}
              <span className="text-violet-400 font-medium">full-stack e-commerce system</span>
              {' '}in C# and SQLite, and designed and configured a{' '}
              <span className="text-violet-400 font-medium">15-workstation LAN network</span>
              {' '}from topology to physical deployment.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              I'm actively seeking an internship where I can contribute to{' '}
              <span className="text-white font-medium">software development or IT projects</span>
              {' '}while continuing to grow — based in{' '}
              <span className="text-white font-medium">Mandaue City, Cebu</span>.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 pt-2"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {['C#', 'Python', 'JavaScript', 'Raspberry Pi', 'LAN / TCP-IP', 'Android (Kotlin)', 'SQLite'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
}