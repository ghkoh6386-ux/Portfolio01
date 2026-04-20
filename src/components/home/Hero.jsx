import useReveal from '../../hooks/useReveal'

export default function Hero() {
  const { ref, visible } = useReveal()

  return (
    <section ref={ref} className={`home-hero fade-section ${visible ? 'is-visible' : ''}`}>
      <div className="home-hero__inner">
        <span className="section-kicker">Digital Portfolio / 2024</span>

        <div className="home-hero__grid">
          <div className="home-hero__headline">
            <h1>
              Calm interfaces, <br />
              clear structure, <br />
              <span className="home-hero__accent">editorial rhythm.</span>
            </h1>
          </div>

          <div className="home-hero__aside">
            <div className="home-hero__meta">
              <span>Portfolio</span>
              <span>UI / Front-end</span>
              <span>2024—2026</span>
            </div>
            <p>
              A portfolio built around composition, pacing, and project storytelling rather
              than generic landing-page patterns.
            </p>
          </div>
        </div>

        <div className="home-hero__copy">
          <p>
            I design and build visual systems that feel composed, readable, and believable,
            with enough restraint to let the work speak clearly.
          </p>

          <div className="home-hero__anchors">
            <span>Editorial UI</span>
            <span>Performance UI</span>
            <span>Motion & Content</span>
          </div>
        </div>
      </div>
    </section>
  )
}
