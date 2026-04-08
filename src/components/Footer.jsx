const footerLinks = ['About', 'Skills', 'Experience', 'Projects', 'Leadership', 'Contact']

function Footer() {
  const handleClick = (e, section) => {
    e.preventDefault()
    document.querySelector(`#${section.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[rgba(5,5,12,0.9)] pt-16 pb-8 text-center border-t border-neon-blue/10">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="max-w-[600px] mx-auto mb-10">
          <div className="gradient-text-blue-green text-4xl tracking-wider mb-6 inline-block">
            BRYCE<span className="text-neon-green">DANCY</span>
          </div>
          <p className="opacity-70 mb-7 text-lg">
            Computer Science Student | Technology Innovator | Cloud Builder
          </p>
          <div className="flex justify-center gap-7 mb-10">
            {footerLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => handleClick(e, link)}
                className="text-text-light no-underline transition-all duration-300 text-lg hover:text-neon-blue"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-base opacity-60">
          <p>&copy; {new Date().getFullYear()} Bryce Dancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
