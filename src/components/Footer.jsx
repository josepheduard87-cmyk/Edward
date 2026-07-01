import { motion } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.footer
      className="border-t border-white/[0.06] px-6 py-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">

        <p className="text-neutral-600 text-xs">
          © {year} Eduard Joseph D. Mendres
        </p>

        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="group flex items-center gap-2 text-neutral-600 hover:text-violet-400 text-xs tracking-wider uppercase font-medium transition-colors duration-200"
        >
          Back to top
          <span className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-violet-500/50 group-hover:bg-violet-500/5 transition-all duration-200">
            <FiArrowUp size={12} />
          </span>
        </button>

      </div>
    </motion.footer>
  )
}