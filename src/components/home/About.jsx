import useReveal from '../../hooks/useReveal'

export default function About() {
  const { ref, visible } = useReveal()

  return (
    <section
      id="about"
      ref={ref}
      className={`home-intro fade-section ${visible ? 'is-visible' : ''}`}
    >
      <div className="home-intro__lead">
        <p>
          I’m interested in interfaces that feel <span>structured, calm,</span> and grounded
          in visual intent rather than visual noise.
        </p>
      </div>

      <div className="home-intro__portrait">
        <div className="home-intro__portrait-frame">
          <span>Portrait Placeholder</span>
        </div>
      </div>

      <div className="home-intro__copy">
        <p>
          My work sits between UI design, frontend implementation, and presentation. I enjoy
          taking projects that already function and giving them a clearer mood, hierarchy, and
          narrative structure.
        </p>

        <div className="home-intro__notes">
          <span>Based in Seoul</span>
          <span>React / Sass / UI Design</span>
        </div>
      </div>
    </section>
  )
}
