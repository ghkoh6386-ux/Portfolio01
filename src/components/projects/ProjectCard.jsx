import { Link } from 'react-router-dom'

export default function ProjectCard({ project, variant = 'feature', index }) {
  const imageSrc = project.heroImage ?? project.thumbnail
  const description = project.shortDescription ?? project.overview?.description ?? ''
  const isPlaceholder = Boolean(project.isPlaceholder)
  const cardClassName = `project-card project-card--small project-card--small-${index}${
    isPlaceholder ? ' project-card--placeholder' : ''
  }`

  if (variant === 'small') {
    if (isPlaceholder) {
      return (
        <article className={cardClassName}>
          <div className="project-card__link project-card__link--static">
            <div className="project-card__image project-card__image--wide project-card__image--placeholder">
              <span>Figma</span>
            </div>
            <span className="project-card__meta">{project.category}</span>
            <h3>{project.title}</h3>
            {description && <p>{description}</p>}
            <span className="project-card__cta">Coming Soon</span>
          </div>
        </article>
      )
    }

    return (
      <article className={cardClassName}>
        <Link to={`/project/${project.slug}`} className="project-card__link">
          <div className="project-card__image project-card__image--wide">
            <img src={imageSrc} alt={project.title} />
          </div>
          <span className="project-card__meta">{project.category}</span>
          <h3>{project.title}</h3>
          {description && <p>{description}</p>}
          <span className="project-card__cta">View Case Study</span>
        </Link>
      </article>
    )
  }

  if (variant === 'overlay') {
    return (
      <article className="project-card project-card--overlay">
        <div className="project-card__image project-card__image--square">
          <img src={imageSrc} alt={project.title} />
        </div>
        <div className="project-card__overlay">
          <span className="project-card__meta">{project.category}</span>
          <h3>{project.title}</h3>
          <p>{description}</p>
          <Link to={`/project/${project.slug}`}>View Case Study</Link>
        </div>
      </article>
    )
  }

  return (
    <article className={`project-card project-card--feature project-card--feature-${index}`}>
      <div className="project-card__image project-card__image--feature">
        <img src={imageSrc} alt={project.title} />
      </div>
      <div className="project-card__content">
        <span className="project-card__meta">
          {String(index).padStart(2, '0')} / {project.category}
        </span>
        <h3>{project.title}</h3>
        <p>{description}</p>
        {project.techStack?.length > 0 && (
          <div className="project-card__tags">
            {project.techStack.slice(0, 2).map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        )}
        <Link to={`/project/${project.slug}`}>View Case Study</Link>
      </div>
    </article>
  )
}
