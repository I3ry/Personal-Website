const navLinks = [
  { href: '#about', label: 'ABOUT' },
  { href: '#skills', label: 'SKILLS' },
  { href: '#experience', label: 'EXPERIENCE' },
  { href: '#projects', label: 'PROJECTS' },
  { href: '#leadership', label: 'LEADERSHIP' },
  { href: '#contact', label: 'CONTACT' },
]

function Header() {
  const handleClick = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="bg-[rgba(10,10,20,0.9)] backdrop-blur-md py-4 sticky top-0 z-[1000] border-b border-neon-blue/20 shadow-[0_0_20px_rgba(0,243,255,0.1)]">
      <div className="max-w-[1200px] mx-auto px-5 flex flex-col md:flex-row justify-between items-center">
        <div className="gradient-text-blue-green text-3xl tracking-wider">
          BRYCE<span className="text-neon-green">DANCY</span>
        </div>
        <nav>
          <ul className="flex flex-wrap justify-center list-none mt-4 md:mt-0 gap-4 md:gap-8">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href} onClick={(e) => handleClick(e, href)} className="nav-link">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
