export default function Footer() {
  return (
    <footer className="bg-brand-blue flex flex-col">
      <div className="flex justify-between items-center">
        {/* NPI Logo */}
        <div></div>
        {/* Hours of Operation */}
        <div></div>
        {/* Contact Info */}
        <div></div>
      </div>
      <p className="text-white text-center">
        &copy; {new Date().getFullYear()} Neural Pathway Institute. Formerly Performance & Healing Chiropractic.
      </p>
    </footer>
  )
}