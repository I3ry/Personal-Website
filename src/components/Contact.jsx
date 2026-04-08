import { useState } from 'react'

const contactDetails = [
  { icon: 'fas fa-map-marker-alt', title: 'Location', value: 'Chicago, IL' },
  { icon: 'fas fa-envelope', title: 'Email', value: 'badancy@aggies.ncat.edu' },
  { icon: 'fas fa-phone', title: 'Phone', value: '(312) 686-9321' },
]

const socialLinks = [
  { icon: 'fab fa-linkedin-in', title: 'LinkedIn', href: 'https://www.linkedin.com/in/bryce-dancy-746420281/' },
  { icon: 'fab fa-github', title: 'GitHub', href: 'https://github.com/I3ry' },
  { icon: 'fab fa-instagram', title: 'Instagram', href: 'https://www.instagram.com/bryceedancy' },
]

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="gradient-text-blue-purple text-4xl md:text-5xl mb-6 relative section-title-underline">
            CONTACT ME
          </h2>
          <p className="text-text-muted max-w-[700px] mx-auto text-xl font-light">
            Let&apos;s connect and explore opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-card-bg p-10 rounded-xl border border-neon-blue/10 backdrop-blur-md">
            <h3 className="text-3xl mb-7 relative pb-4 text-neon-blue font-orbitron contact-title-underline">
              GET IN TOUCH
            </h3>
            <div className="mb-8">
              {contactDetails.map((d) => (
                <div key={d.title} className="flex items-center mb-6">
                  <div className="contact-icon">
                    <i className={d.icon} />
                  </div>
                  <div>
                    <h4 className="text-neon-green mb-1 text-xl">{d.title}</h4>
                    <p className="text-text-light">{d.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-5 mt-8">
              {socialLinks.map((s) => (
                <a key={s.title} href={s.href} title={s.title} target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card-bg p-10 rounded-xl border border-neon-blue/10 backdrop-blur-md">
            <h3 className="text-3xl mb-7 text-neon-blue font-orbitron">SEND A MESSAGE</h3>
            <form onSubmit={handleSubmit}>
              {[
                { name: 'name', label: 'Name', type: 'text', placeholder: 'Your Name' },
                { name: 'email', label: 'Email', type: 'email', placeholder: 'Your Email' },
                { name: 'subject', label: 'Subject', type: 'text', placeholder: 'Subject' },
              ].map((field) => (
                <div key={field.name} className="mb-7">
                  <label htmlFor={field.name} className="block mb-3 font-medium text-neon-green">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              ))}
              <div className="mb-7">
                <label htmlFor="message" className="block mb-3 font-medium text-neon-green">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <button type="submit" className="submit-btn">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
