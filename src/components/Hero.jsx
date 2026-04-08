function Hero() {
  const handleClick = (e) => {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-24 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(0,243,255,0.05)_0%,transparent_70%)] -z-10" />
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          <div className="flex-1 z-[2] text-center lg:text-left">
            <h1 className="gradient-text-blue-green text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight tracking-wider">
              TECHNOLOGY INNOVATOR & FUTURE ENGINEER
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-text-muted max-w-[600px] mx-auto lg:mx-0">
              Hi, I&apos;m{' '}
              <span className="text-neon-green font-semibold" style={{ textShadow: '0 0 10px #39ff14' }}>
                BRYCE DANCY
              </span>
              , a passionate Computer Science student at NC A&T State University shaping the future through technology.
            </p>
            <a href="#contact" onClick={handleClick} className="cta-button">
              CONNECT WITH ME
            </a>
          </div>
          <div className="flex-1 flex justify-center z-[2]">
            <div className="headshot" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
