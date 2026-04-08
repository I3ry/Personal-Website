const skillCategories = [
  {
    title: 'LANGUAGES',
    skills: ['Python', 'Java', 'C++', 'JavaScript', 'SQL', 'Bash/Shell Scripting'],
  },
  {
    title: 'CLOUD & DATA',
    skills: ['Google Cloud Platform', 'AWS', 'Microsoft Azure', 'REST APIs', 'BigQuery', 'Firebase', 'MySQL', 'Schema Design'],
  },
  {
    title: 'FRAMEWORKS & SECURITY',
    skills: ['Spring Boot', 'Spring Security', 'Microservices', 'AES-256 Encryption', 'Authentication & Authorization'],
  },
  {
    title: 'PRODUCT & ANALYTICS',
    skills: ['KPI Frameworks', 'Data Visualization', 'Dashboard Design', 'Roadmapping', 'Competitive Analysis', 'Agile/Scrum'],
  },
  {
    title: 'TOOLS',
    skills: ['Git', 'GitHub', 'VSCode', 'Google Workspace', 'Microsoft Office 365', 'PowerBI'],
  },
]

function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="gradient-text-blue-purple text-4xl md:text-5xl mb-6 relative section-title-underline">
            TECHNICAL SKILLS
          </h2>
          <p className="text-text-muted max-w-[700px] mx-auto text-xl font-light">
            Expertise in cutting-edge technologies and methodologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-card-bg p-9 rounded-xl card-hover relative overflow-hidden skills-top-border"
            >
              <h3 className="text-neon-blue mb-7 pb-3 border-b border-neon-blue/20 font-orbitron tracking-wider text-2xl">
                {cat.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-[rgba(20,25,40,0.6)] p-4 rounded-lg text-center font-medium transition-all duration-300 border border-neon-blue/10 hover:bg-neon-blue/10 hover:text-neon-blue hover:-translate-y-1 hover:border-neon-blue hover:shadow-glow-blue"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
