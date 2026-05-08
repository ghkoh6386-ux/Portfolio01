import useReveal from '../../hooks/useReveal'

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'Behance', href: 'https://www.behance.net' }
]

export default function Contact() {
  const { ref, visible } = useReveal()

  return (
    <section
      id="contact"
      ref={ref}
      data-page-label="Contact"
      className={`contact-section fade-section ${visible ? 'is-visible' : ''}`}
    >
      <div className="contact-section__inner">
        <div className="contact-section__intro">
          <span className="section-kicker">Ready to collaborate?</span>
          <h2>Let&apos;s build something with a clear point of view.</h2>
          <p>
            I&apos;m open to portfolio collaborations, UI-focused freelance work, and projects
            that need stronger structure, visual rhythm, and frontend polish.
          </p>
        </div>

        <div className="contact-section__content">
          <a href="mailto:hello@architect.com" className="contact-section__mail">
            hello@architect.com
          </a>

          <div className="contact-section__meta">
            <span>Based in Seoul</span>
            <span>UI Design / Front-end</span>
          </div>

          <div className="contact-section__links">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
