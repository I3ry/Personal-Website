import { useEffect, useRef } from 'react'

const experiences = [
  {
    title: 'Student Builder Campus Leader',
    company: 'Amazon Web Services (AWS) - Wasserman Next Gen - Greensboro, NC',
    date: 'Mar 2026 – Present',
    items: [
      'Owned full go-to-market strategy for AWS adoption at NC A&T, building a 6-week semester playbook across tabling, mini-pitches, class announcements, and social content to drive 500 Builder ID signups.',
      'Tracked and reported weekly program metrics across 6 KPI categories via CreatorIQ and JotForm, optimizing outreach channel allocation based on conversion data.',
      'Authored AWS Builder Center articles on cloud deployment topics and delivered live technical demos covering cloud services and AWS community resources to student organizations.',
    ],
  },
  {
    title: 'Student Help Desk Technician',
    company: 'NC A&T Client Technology Services - Greensboro, NC',
    date: 'Feb 2025 – Present',
    items: [
      'Triaged and resolved 80% of Tier 1-2 technical issues for 300+ endpoint devices, applying systematic root-cause analysis with a 30-minute average resolution time.',
      'Automated OS imaging and deployment workflows for 5+ devices weekly using scripted tooling, reducing manual setup time by 25%.',
      'Diagnosed 15+ weekly network and printer connectivity failures, applying structured troubleshooting to reduce device downtime by 45%.',
    ],
  },
  {
    title: 'Google Cloud Career Jumpstart',
    company: 'Google Inc. - Chicago, IL',
    date: 'May – Aug 2025',
    items: [
      'Built and deployed 5 cloud-native applications on GCP (Cloud Run, MySQL, BigQuery) under enterprise simulation loads, applying cloud security and performance best practices.',
      'Analyzed 10+ performance metrics across 15+ application features, identifying optimizations that improved system response time by 85%.',
      'Led peer certification study groups for 10+ participants, driving a 60-percentage-point increase in cohort completion rate.',
    ],
  },
  {
    title: 'Contractor – Securities Processing',
    company: 'Northern Trust - Chicago, IL',
    date: 'Nov 2023 – Jul 2024',
    items: [
      'Processed and reconciled 200+ daily securities trades at 87% accuracy with zero compliance violations in a high-availability financial data environment.',
      'Resolved 250+ weekly trade discrepancies by analyzing transaction data across systems, reducing settlement delays by 70%.',
      'Authored settlement reports analyzing 100+ weekly transactions, surfacing patterns that drove a 5% reduction in processing errors.',
    ],
  },
  {
    title: 'Project Intern',
    company: 'Tech Corps Student WEB Corps - Chicago, IL',
    date: 'Jun – Aug 2022',
    items: [
      'Built a full-stack web application (HTML/CSS/JavaScript) supporting 20+ users with responsive design across desktop and mobile devices.',
      'Delivered project 2 weeks ahead of schedule using agile methodology with iterative client feedback across 10+ review cycles.',
      'Increased community engagement 50% and donor contributions 30% within 6 months by aligning technical output with stakeholder requirements.',
    ],
  },
]

function Experience() {
  const itemsRef = useRef([])

  useEffect(() => {
    const animate = () => {
      itemsRef.current.forEach((el) => {
        if (!el) return
        const pos = el.getBoundingClientRect().top
        if (pos < window.innerHeight / 1.3) {
          el.style.opacity = 1
          el.style.transform = 'translateX(0)'
        }
      })
    }

    window.addEventListener('scroll', animate)
    animate()
    return () => window.removeEventListener('scroll', animate)
  }, [])

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="gradient-text-blue-purple text-4xl md:text-5xl mb-6 relative section-title-underline">
            PROFESSIONAL EXPERIENCE
          </h2>
          <p className="text-text-muted max-w-[700px] mx-auto text-xl font-light">
            My career journey and professional accomplishments
          </p>
        </div>

        <div className="relative max-w-[900px] mx-auto timeline-line">
          {experiences.map((exp, i) => {
            const isEven = i % 2 === 1
            return (
              <div
                key={exp.title}
                ref={(el) => (itemsRef.current[i] = el)}
                className={`mb-14 relative w-full lg:w-1/2 ${
                  isEven ? 'lg:left-1/2 pl-0 lg:pl-10' : 'lg:left-0 pr-0 lg:pr-10'
                } pl-[70px] lg:pl-${isEven ? '10' : '0'}`}
                style={{
                  opacity: 0,
                  transform: `translateX(${isEven ? '50px' : '-50px'})`,
                  transition: 'opacity 0.7s ease, transform 0.7s ease',
                }}
              >
                {/* Timeline marker */}
                <div
                  className={`absolute top-5 w-6 h-6 bg-dark-bg border-4 border-neon-blue rounded-full shadow-glow-blue ${
                    isEven
                      ? 'left-4 lg:-left-[13px]'
                      : 'left-4 lg:-right-[13px] lg:left-auto'
                  }`}
                />
                <div
                  className={`bg-card-bg p-9 rounded-xl card-hover relative timeline-arrow ${
                    isEven ? 'timeline-arrow-left' : ''
                  }`}
                >
                  <h3 className="text-neon-blue mb-2 text-xl">{exp.title}</h3>
                  <span className="text-neon-green font-semibold mb-2 block text-lg">{exp.company}</span>
                  <span className="text-neon-purple text-base mb-5 font-orbitron block">{exp.date}</span>
                  <ul className="list-arrow list-none">
                    {exp.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience
