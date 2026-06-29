export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.06] px-6 py-10">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-neutral-600 text-xs">
          © {year} Eduard Joseph D. Mendres
        </p>

      </div>
    </footer>
  )
}
