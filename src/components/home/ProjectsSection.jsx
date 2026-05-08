import useReveal from '../../hooks/useReveal'
import ProjectCard from '../projects/ProjectCard'

export default function ProjectsSection({ projects }) {
  const { ref, visible } = useReveal()
  const featureProjects = projects.slice(0, 2)
  const overlayProject = projects[2]
  const placeholderProject = {
    title: 'Figma Design Archive',
    category: 'UI Design',
    shortDescription: 'Figma 작업 데이터는 추후 연결 예정입니다.',
    isPlaceholder: true
  }
  const gridProjects = [...projects.slice(3), placeholderProject]

  return (
    <section
      id="projects"
      ref={ref}
      data-page-label="Projects"
      className={`projects-section fade-section ${visible ? 'is-visible' : ''}`}
    >
      <div className="projects-section__heading">
        <h2>Selected Works</h2>
        <span>{`01 -> ${String(gridProjects.length + 3).padStart(2, '0')}`}</span>
      </div>

      <div className="projects-section__stack">
        {featureProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index + 1} />
        ))}
        {overlayProject && <ProjectCard project={overlayProject} variant="overlay" index={3} />}
      </div>

      {gridProjects.length > 0 && (
        <div className="projects-section__grid">
          {gridProjects.map((project, index) => (
            <ProjectCard
              key={project.slug ?? `placeholder-${index}`}
              project={project}
              variant="small"
              index={index + 4}
            />
          ))}
        </div>
      )}
    </section>
  )
}
