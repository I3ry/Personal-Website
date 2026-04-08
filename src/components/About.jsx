const details = [
  {
    icon: 'fas fa-graduation-cap',
    title: 'EDUCATION',
    lines: ['B.S. Computer Science', 'NC A&T State University', 'GPA: 3.2/4.0'],
  },
  {
    icon: 'fas fa-map-marker-alt',
    title: 'LOCATION',
    lines: ['Chicago, IL'],
  },
  {
    icon: 'fas fa-envelope',
    title: 'EMAIL',
    lines: ['badancy@aggies.ncat.edu'],
  },
  {
    icon: 'fas fa-phone',
    title: 'PHONE',
    lines: ['(312) 686-9321'],
  },
]

function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="gradient-text-blue-purple text-4xl md:text-5xl mb-6 relative section-title-underline">
            ABOUT ME
          </h2>
          <p className="text-text-muted max-w-[700px] mx-auto text-xl font-light">
            Driven by innovation and committed to excellence in technology
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 flex justify-center">
            <div className="headshot headshot-sm" />
          </div>
          <div className="flex-[1.5]">
            <h3 className="text-2xl mb-6 text-neon-blue font-orbitron tracking-wider">
              COMPUTER SCIENCE STUDENT AT NC A&T STATE UNIVERSITY
            </h3>
            <p className="mb-6 text-text-light text-lg">
              I&apos;m a dedicated Computer Science student with a passion for creating impactful technology solutions.
              With a strong foundation in programming and an entrepreneurial mindset, I aim to leverage technology to
              solve real-world problems and drive innovation.
            </p>
            <p className="mb-6 text-text-light text-lg">
              My academic journey has equipped me with both technical skills and professional competencies that I apply
              to every project I undertake. I thrive in collaborative environments and am always eager to take on new
              challenges.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {details.map((d) => (
                <div
                  key={d.title}
                  className="bg-card-bg p-7 rounded-xl card-hover relative overflow-hidden detail-card-border"
                >
                  <i className={`${d.icon} text-4xl text-neon-blue mb-5 block`} style={{ textShadow: '0 0 15px rgba(0,243,255,0.7)' }} />
                  <h4 className="mb-3 text-neon-green text-xl">{d.title}</h4>
                  {d.lines.map((line) => (
                    <p key={line} className="text-text-light text-lg mb-1">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
