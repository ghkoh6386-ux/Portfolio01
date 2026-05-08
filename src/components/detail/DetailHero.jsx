export default function DetailHero({ project }) {
  const hero = project.hero ?? {}
  const heroClassName = `detail-hero${
    project.slug === 'santa'
      ? ' detail-hero--santa'
      : project.slug === 'movie-app'
        ? ' detail-hero--movie-app'
        : project.slug === 'pages-and-place'
          ? ' detail-hero--pages-and-place'
          : project.slug === 'figma-archive'
            ? ' detail-hero--figma-archive'
        : ''
  }`

  return (
    <section className={heroClassName} data-page-label="Hero">
      <div className="detail-hero__inner">
        <div className="detail-hero__copy">
          <span className="section-kicker">{hero.eyebrow ?? 'Featured Case Study'}</span>
          <h1>{hero.title ?? project.title}</h1>
          <p>{hero.description ?? project.shortDescription}</p>
        </div>

        <div className="detail-hero__media">
          <img src={hero.image ?? project.heroImage} alt={project.title} />
        </div>
      </div>
    </section>
  )
}
