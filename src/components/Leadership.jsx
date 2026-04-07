const leadershipItems = [
  {
    org: 'Google Inc.',
    title: "Google Cloud Career Jumpstart Summer '25 HBCU Cohort",
    items: [
      'Selected for intensive training cohort empowering HBCU students with cloud-computing skills',
      'Mastered core competencies in Google Cloud Platform (GCP)',
      'Guided peers through cloud certification pathways, increasing completion rates',
    ],
  },
  {
    org: 'NC A&T State University',
    title: 'Aggie M.E.N – Fellowship Committee',
    items: [
      'Coordinated community-building events fostering connections across campus',
      'Facilitated mentorship opportunities enhancing retention of first-year students',
      'Advocated for mental health initiatives creating a supportive environment',
    ],
  },
  {
    org: 'NC A&T State University',
    title: 'National Society of Black Engineers (NSBE)',
    items: [
      'Active member participating in technical workshops and seminars',
      'Collaborated on community outreach projects promoting STEM awareness',
      'Contributed to networking initiatives with industry leaders',
    ],
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {leadershipItems.map((item) => (
            <div
              key={item.title}
              className="bg-card-bg rounded-xl p-9 transition-all duration-300 border-t-4 border-neon-green backdrop-blur-md relative overflow-hidden hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(57,255,20,0.1)]"
            >
              <span className="text-neon-green font-semibold mb-3 block text-xl">{item.org}</span>
              <h3 className="text-neon-blue mb-5 text-2xl">{item.title}</h3>
              <ul className="list-arrow list-none">
                {item.items.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Leadership
