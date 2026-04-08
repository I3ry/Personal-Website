const projects = [
  {
    title: 'PlusMinus Analytics',
    subtitle: 'Portfolio Project — Founder & Technical Lead',
    stats: [
      { value: '5', label: 'API Endpoints' },
      { value: '15+', label: 'Analytics Visuals' },
      { value: '3', label: 'Dashboards' },
    ],
    description:
      'A basketball analytics platform with RESTful APIs and a normalized relational schema, featuring interactive dashboards and data-driven player performance insights.',
    responsibilities: [
      'Designed 5 RESTful API endpoints and a normalized 7-entity relational schema with architecture diagrams and data flow documentation published as a public GitHub case study.',
      'Built 15+ analytics visuals and 3 interactive dashboards, applying statistical analysis and KPI frameworks to surface actionable player performance insights.',
      'Authored full PRD, competitive analysis, and go-to-market strategy anchored in data-driven market sizing and feature prioritization.',
    ],
    tags: ['REST APIs', 'Schema Design', 'Data Visualization', 'KPI Frameworks'],
    date: 'Nov 2025 – Present',
  },
  {
    title: 'Medical Integration',
    subtitle: 'HackRangers Hackathon — Backend Engineer',
    stats: [
      { value: '200+', label: 'Records Protected' },
      { value: '30+', label: 'Requests/sec' },
      { value: '82%', label: 'NLP Accuracy' },
    ],
    description:
      'A secure healthcare backend built with Java/Spring Boot featuring AES-256 encryption, microservices architecture, and NLP-powered medical data processing.',
    responsibilities: [
      'Implemented Spring Security with AES-256-bit encryption and stateful session management to protect 200+ mock health records, enforcing access controls and data integrity.',
      'Designed microservices architecture using Java/Spring Boot, isolating service boundaries and processing 30+ requests/second in real time.',
      'Built NLP-powered backend processing 200+ unstructured medical terms with 82% accuracy, demonstrating programmatic automation of data extraction workflows.',
    ],
    tags: ['Java', 'Spring Boot', 'AES-256', 'Microservices', 'NLP'],
    date: 'Nov 2025',
  },
]

function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="gradient-text-blue-purple text-4xl md:text-5xl mb-6 relative section-title-underline">
            FEATURED PROJECTS
          </h2>
          <p className="text-text-muted max-w-[700px] mx-auto text-xl font-light">
            Innovative solutions with measurable impact
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((proj) => (
            <div key={proj.title} className="bg-card-bg rounded-xl overflow-hidden card-hover">
              <div className="bg-gradient-to-r from-neon-blue to-neon-purple text-dark-bg p-7">
                <h3 className="text-2xl mb-2 font-bold">{proj.title}</h3>
                <p>{proj.subtitle}</p>
                {proj.date && <p className="text-sm mt-1 opacity-80">{proj.date}</p>}
              </div>
              <div className="p-8">
                <div className="flex justify-between mb-6 bg-[rgba(20,25,40,0.6)] p-5 rounded-lg border border-neon-blue/10">
                  {proj.stats.map((s) => (
                    <div key={s.label} className="text-center flex-1">
                      <div className="text-3xl font-bold text-neon-green font-orbitron" style={{ textShadow: '0 0 15px rgba(57,255,20,0.5)' }}>
                        {s.value}
                      </div>
                      <div className="text-base text-text-muted">{s.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-text-light text-lg mb-4">{proj.description}</p>
                <h4 className="text-neon-green font-semibold mb-3">Key Responsibilities:</h4>
                <ul className="list-arrow list-none mb-6">
                  {proj.responsibilities.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-neon-blue/10 text-neon-blue py-2 px-5 rounded-full text-sm font-medium border border-neon-blue"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
