import { useState, useEffect } from 'react'

const links = ['About', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    links.forEach((link) => {
      const el = document.getElementById(link.toLowerCase())
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 md:px-12
          ${scrolled
            ? 'py-3 bg-[#0a0a0a]/90 backdrop-blur-md'
            : 'py-5 bg-transparent'
          }`}
      >
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-white font-bold text-sm tracking-wide">
              Eduard Joseph D. Mendres<span className="text-violet-400"></span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className={`text-xs font-medium tracking-wider uppercase transition-colors duration-200 relative group
                    ${active === link.toLowerCase() ? 'text-white' : 'text-neutral-500 hover:text-neutral-200'}`}
                >
                  {link}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-violet-500 transition-all duration-300
                      ${active === link.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 border border-white/10 hover:border-violet-500/50 hover:bg-violet-500/5 text-white text-xs font-semibold tracking-wider uppercase px-5 py-2.5 rounded-full transition-all duration-200"
          >
            Hire Me
          </a>

          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-lg flex flex-col justify-center items-center gap-8 transition-all duration-300 md:hidden
          ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {links.map((link, i) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className="text-3xl font-bold text-neutral-400 hover:text-white transition-colors duration-200"
            style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
          >
            {link}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="mt-4 border border-violet-500/40 text-violet-400 px-8 py-3 rounded-full text-sm font-semibold"
        >
          Hire Me
        </a>
      </div>
    </>
  )
}
