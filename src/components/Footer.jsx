export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.06] px-6 py-10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">

        <p className="text-neutral-600 text-xs text-center">
          Built with React + Vite + Tailwind CSS
        </p>

        <p className="text-neutral-600 text-xs">
          © {year} Eduard Joseph D. Mendres
        </p>

      </div>
    </footer>
  )
}
