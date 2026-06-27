import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi'
import { SiGmail } from 'react-icons/si'
import emailjs from '@emailjs/browser'

const socials = [
  { icon: FiGithub,   label: 'GitHub',   href: 'https://github.com/josepheduard87-cmyk' },
  { icon: FiLinkedin, label: 'LinkedIn',  href: 'https://www.linkedin.com/in/e-j-m/' },
  { icon: SiGmail,    label: 'Gmail',     href: 'mailto:josepheduard87@gmail.com' },
  { icon: FiDownload, label: 'Resume',    href: '/resume.pdf', download: true },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.send(
      'service_a47pspj',
      'template_udrl14d',
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      'rfz17NZl0wVJrbfmM'
    ).then(() => {
      setSent(true)
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setSent(false), 4000)
    }).catch((err) => {
      console.error('EmailJS error:', err)
      alert('Something went wrong. Try emailing me directly.')
    })
  }

  return (
    <section id="contact" className="py-28 px-6">
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
            Contact
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Let's work<br />
              <span className="text-violet-400">together.</span>
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed mb-10 max-w-sm">
              I'm actively looking for internship opportunities in software development,
              web development, or IT/networking in Cebu. Drop me a message and I'll
              get back to you.
            </p>

            <div className="flex flex-col gap-4">
              {socials.map(({ icon: Icon, label, href, download }) => (
                <a
                  key={label}
                  href={href}
                  target={download ? '_self' : '_blank'}
                  rel="noreferrer"
                  download={download || undefined}
                  className="flex items-center gap-3 text-neutral-500 hover:text-white transition-colors duration-200 group w-fit"
                >
                  <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-violet-500/50 group-hover:bg-violet-500/5 transition-all duration-200">
                    <Icon size={14} />
                  </span>
                  <span className="text-xs tracking-wider uppercase font-medium">{label}</span>
                  <span className="w-0 group-hover:w-4 h-px bg-violet-500 transition-all duration-300" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder:text-neutral-600 outline-none focus:border-violet-500/60 focus:bg-violet-500/[0.03] transition-all duration-200"
              />
              <input
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder:text-neutral-600 outline-none focus:border-violet-500/60 focus:bg-violet-500/[0.03] transition-all duration-200"
              />
            </div>
            <textarea
              rows={6}
              placeholder="Tell me about the opportunity..."
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder:text-neutral-600 outline-none focus:border-violet-500/60 focus:bg-violet-500/[0.03] transition-all duration-200 resize-none"
            />

            <button
              onClick={handleSubmit}
              className={`group w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                sent
                  ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-400'
                  : 'bg-violet-500 hover:bg-violet-600 text-white'
              }`}
            >
              {sent ? (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Message sent!
                </>
              ) : (
                <>
                  Send Message
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  </svg>
                </>
              )}
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  )
}