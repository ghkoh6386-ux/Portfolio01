import { Link } from 'react-router-dom'

export default function ProjectCard({ project, variant = 'feature', index }) {
  if (variant === 'small') {
    return (
      <article className={`project-card project-card--small project-card--small-${index}`}>
        <Link to={`/project/${project.slug}`} className="project-card__link">
          <div className="project-card__image project-card__image--wide">
            <img src={project.thumbnail} alt={project.title} />
          </div>
          <span className="project-card__meta">{project.category}</span>
          <h3>{project.title}</h3>
          {project.shortDescription && <p>{project.shortDescription}</p>}
          <span className="project-card__cta">View Case Study</span>
        </Link>
      </article>
    )
  }

  if (variant === 'overlay') {
    return (
      <article className="project-card project-card--overlay">
        <div className="project-card__image project-card__image--square">
          <img src={project.thumbnail} alt={project.title} />
        </div>
        <div className="project-card__overlay">
          <span className="project-card__meta">{project.category}</span>
          <h3>{project.title}</h3>
          <p>{project.shortDescription}</p>
          <Link to={`/project/${project.slug}`}>View Case Study</Link>
        </div>
      </article>
    )
  }

  return (
    <article className={`project-card project-card--feature project-card--feature-${index}`}>
      <div className="project-card__image project-card__image--feature">
        <img src={project.thumbnail} alt={project.title} />
      </div>
      <div className="project-card__content">
        <span className="project-card__meta">
          {String(index).padStart(2, '0')} / {project.category}
        </span>
        <h3>{project.title}</h3>
        <p>{project.shortDescription}</p>
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
