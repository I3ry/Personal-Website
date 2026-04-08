import { useEffect, useRef } from 'react'

const experiences = [
  {
    title: "Scholar's Initiative",
    company: 'CodeHouse - Atlanta, GA',
    date: 'July 2024 - Present',
    items: [
      'Selected as 1 of 22 nationally recognized scholars for rigorous Summer Bridge Program',
      'Developed foundational and intermediate programming skills in JavaScript, C++, Python',
      'Engaged in professional development workshops enhancing leadership and communication',
      'Gained entrepreneurship insights including business ideation and market analysis',
    ],
  },
  {
    title: 'Marketing & Communications Intern',
    company: 'Benford Protection Group - Chicago, IL',
    date: 'May 2025 - August 2025',
    items: [
      'Produced engaging weekly content across social media using ChatGPT, Claude, and Canva',
      'Managed LinkedIn presence with branded posts and newsletters',
      'Developed promotional materials including graphics and short videos',
      'Generated and tracked 50+ positive Google reviews',
    ],
  },
  {
    title: 'Student Help Desk Technician',
    company: 'NC A&T State University - Greenboro, NC',
    date: 'February 2025 - May 2025',
    items: [
      'Performed password and device resets for seamless user access',
      'Executed computer imaging and setup for reliable IT environments',
      'Diagnosed and resolved printer issues and managed logistics',
      'Collaborated on ITS projects to enhance service quality',
    ],
  },
  {
    title: 'Contractor: Global Trade & Settlements',
    company: 'Northern Trust - Chicago, IL',
    date: 'November 2023 – July 2024',
    items: [
      'Processed trade execution and reconciled securities transactions',
      'Collaborated across departments to resolve transaction discrepancies',
      'Maintained detailed transaction records using advanced tracking tools',
      'Facilitated communication between trading desks and clients',
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
