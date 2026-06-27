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

        <motion.div
          className="flex flex-col md:flex-row gap-12 items-start"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Profile image with glow */}
          <div className="relative flex-shrink-0 self-center md:self-start">
            <div className="absolute inset-0 rounded-2xl bg-violet-600/30 blur-2xl scale-105" />
            <img
              src="/profile.jpg"
              alt="Eduard Joseph D. Mendres"
              className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl object-cover border border-white/10"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            {/* Fallback avatar */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl border border-white/10 bg-violet-500/10 items-center justify-center text-violet-400 text-4xl font-bold hidden">
              EJM
            </div>
          </div>

          {/* Text */}
          <div className="space-y-5 text-[15px] leading-relaxed text-neutral-400">
            <p>
              I'm{' '}
              <span className="text-white font-semibold">Eduard Joseph D. Mendres</span>
              , a Computer Technology student at{' '}
              <span className="text-white font-semibold">Cebu Technological University</span>
              {' '}with hands-on experience in desktop apps, web development, and networking.
            </p>
            <p>
              I've built a{' '}
              <span className="text-violet-400 font-medium">fully offline Raspberry Pi kiosk</span>
              {' '}integrated with an Android app for Arduino learning, a{' '}
              <span className="text-violet-400 font-medium">full-stack e-commerce system</span>
              {' '}in C# and SQLite, and designed and configured a{' '}
              <span className="text-violet-400 font-medium">15-workstation LAN network</span>
              {' '}from topology to physical deployment.
            </p>
            <p>
              I'm actively seeking an internship where I can contribute to{' '}
              <span className="text-white font-medium">software development or IT projects</span>
              {' '}while continuing to grow — based in{' '}
              <span className="text-white font-medium">Mandaue City, Cebu</span>.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {['C# / Python', 'JavaScript', 'Raspberry Pi', 'LAN / TCP-IP', 'Android (Kotlin)', 'SQLite'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}