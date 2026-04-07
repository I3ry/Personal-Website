const projects = [
  {
    title: 'Nonprofit Website & AI Implementation',
    subtitle: 'TECH CORPS Student WEB CORPS',
    stats: [
      { value: '50%', label: 'Engagement Increase' },
      { value: '30%', label: 'Donor Growth' },
    ],
    description:
      'Designed and developed a fully functional, user-friendly website and AI for a local nonprofit, significantly improving their online presence and donor engagement.',
    responsibilities: [
      'Managed end-to-end project lifecycle from planning to implementation',
      'Coordinated timelines, budgets, and client feedback',
      'Implemented professional branding and responsive design',
    ],
    tags: ['Web Development', 'AI Integration', 'Project Management'],
  },
  {
    title: 'Social Media Campaign Strategy',
    subtitle: 'Benford Protection Group',
    stats: [
      { value: '50+', label: 'Positive Reviews' },
      { value: '4', label: 'Platforms' },
    ],
    description:
      'Developed and executed a comprehensive social media strategy across multiple platforms to enhance brand visibility and customer engagement.',
    responsibilities: [
      'Created engaging weekly content using AI tools and design platforms',
      'Managed LinkedIn presence with branded content',
      'Developed promotional materials including graphics and videos',
      'Implemented review generation strategy',
    ],
    tags: ['Social Media', 'Content Creation', 'Digital Marketing', 'Canva'],
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
