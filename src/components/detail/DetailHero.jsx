export default function DetailHero({ project }) {
  return (
    <section className="detail-hero">
      <div className="detail-hero__inner">
        <div className="detail-hero__copy">
          <span className="section-kicker">Featured Case Study</span>
          <h1>{project.title}</h1>
          <p>{project.shortDescription}</p>
        </div>

        <div className="detail-hero__media">
          <img src={project.heroImage} alt={project.title} />
        </div>
      </div>
    </section>
  )
}
