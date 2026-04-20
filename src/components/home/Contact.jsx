import useReveal from '../../hooks/useReveal'

export default function Contact() {
  const { ref, visible } = useReveal()

  return (
    <section
      id="contact"
      ref={ref}
      className={`contact-section fade-section ${visible ? 'is-visible' : ''}`}
    >
      <span className="section-kicker">Ready to collaborate?</span>
      <a href="mailto:hello@architect.com" className="contact-section__mail">
        hello@architect.com
      </a>
      <div className="contact-section__links">
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://www.behance.net" target="_blank" rel="noreferrer">
          Behance
        </a>
      </div>
    </section>
  )
}
