const leadershipItems = [
  {
    org: 'Google Developer Groups (GDG): NC A&T',
    title: 'Mr. GDG',
    date: 'Jan 2026 – Present',
    location: 'Greensboro, NC',
  },
  {
    org: 'National Society of Black Engineers (NSBE)',
    title: 'Admin Zone Intern',
    date: 'Sep 2024 – Present',
    location: 'Greensboro, NC',
  },
  {
    org: 'Leaders In Training (L.I.T)',
    title: 'Mentor',
    date: 'Jul 2025 – Present',
    location: 'Greensboro, NC',
  },
  {
    org: 'Aggie M.E.N.',
    title: 'Fellowship & Programming Committee',
    date: 'Jan 2025 – Present',
    location: 'Greensboro, NC',
  },
]

function Leadership() {
  return (
    <section id="leadership" className="py-24 relative">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="gradient-text-blue-purple text-4xl md:text-5xl mb-6 relative section-title-underline">
            LEADERSHIP
          </h2>
          <p className="text-text-muted max-w-[700px] mx-auto text-xl font-light">
            Contributions to community and professional development
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {leadershipItems.map((item) => (
            <div
              key={item.title}
              className="bg-card-bg rounded-xl p-9 transition-all duration-300 border-t-4 border-neon-green backdrop-blur-md relative overflow-hidden hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(57,255,20,0.1)]"
            >
              <span className="text-neon-green font-semibold mb-3 block text-xl">{item.org}</span>
              <h3 className="text-neon-blue mb-3 text-2xl">{item.title}</h3>
              <p className="text-neon-purple font-orbitron text-sm mb-1">{item.date}</p>
              <p className="text-text-muted text-base">{item.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Leadership
