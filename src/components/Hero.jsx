import { motion } from 'framer-motion'

// Adjust this to control the photo's height (any Tailwind height value or arbitrary px/rem works)
const PHOTO_HEIGHT = 'h-72 lg:h-[520px]'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 pt-24 pb-16 overflow-hidden">

      {/* Background grid decoration */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          opacity: 0.07,
          maskImage: 'linear-gradient(to bottom, black 30%, transparent 90%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 90%)',
        }}
      />

      {/* Violet orb glow */}
      <div className="absolute right-1/4 top-1/3 w-72 h-72 rounded-full bg-violet-600/20 blur-[96px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

        <div className="flex-1 w-full">

          {/* Availability badge */}
          <motion.div
            className="flex items-center gap-2 mb-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs text-neutral-400 tracking-wide">
              Available for internship · Cebu, PH
            </span>
          </motion.div>

          {/* Role label */}
          <motion.p
            className="text-violet-400 text-xs font-semibold tracking-[0.3em] uppercase mb-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            Computer Technology Student — Cebu Technological University - Main Campus
          </motion.p>

          {/* Main heading */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-[80px] font-bold text-white leading-[1.05] tracking-tight mb-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            I'm{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-white">Eduard.</span>
              <span
                className="absolute bottom-1 left-0 w-full h-3 bg-violet-500/30 rounded-sm -z-0"
                style={{ transform: 'skewX(-3deg)' }}
              />
            </span>
            <br />
            <span className="text-white">Aspiring Software Developer</span>
            <br />
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-neutral-400 text-base md:text-lg max-w-lg leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            From desktop apps in C# to offline Raspberry Pi kiosks and LAN networks —
            I build practical solutions that work in the real world.
          </motion.p>

          {/* CTA row */}
          <motion.div
            className="flex flex-wrap gap-4 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            <a
              href="#projects"
              className="bg-violet-500 hover:bg-violet-600 text-white px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-200"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-white/15 hover:border-violet-500/60 hover:bg-violet-500/5 text-white px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-200"
            >
              Contact Me
            </a>

            <div className="flex items-center gap-4 ml-1">
              <a href="https://github.com/josepheduard87-cmyk" target="_blank" rel="noreferrer"
                className="text-neutral-500 hover:text-white transition-colors text-xs tracking-wider uppercase font-medium">
                GitHub
              </a>
              <span className="w-px h-3 bg-white/10" />
              <a href="https://www.linkedin.com/in/e-j-m/" target="_blank" rel="noreferrer"
                className="text-neutral-500 hover:text-white transition-colors text-xs tracking-wider uppercase font-medium">
                LinkedIn
              </a>
            </div>
          </motion.div>

        </div>

        {/* Headshot */}
        <motion.div
          className={`relative flex-shrink-0 w-full max-w-xs sm:max-w-sm lg:w-80 ${PHOTO_HEIGHT}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          {/* Glow behind photo */}
          <div className="absolute inset-0 -m-4 rounded-3xl bg-violet-600/30 blur-3xl pointer-events-none" />

          <div className="relative w-full h-full rounded-3xl overflow-hidden ring-2 ring-violet-500/50 ring-offset-4 ring-offset-black shadow-2xl shadow-violet-900/40">
            <img
              src="/Eduard.png"
              alt="Eduard Joseph D. Mendres"
              className="w-full h-full object-cover object-[center_25%]"
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}