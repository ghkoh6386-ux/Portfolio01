import useReveal from '../../hooks/useReveal'
import ProjectCard from '../projects/ProjectCard'

export default function ProjectsSection({ projects }) {
  const { ref, visible } = useReveal()
  const [first, second, third, fourth, fifth, sixth, seventh] = projects

  return (
    <section
      id="projects"
      ref={ref}
      className={`projects-section fade-section ${visible ? 'is-visible' : ''}`}
    >
      <div className="projects-section__heading">
        <h2>Selected Works</h2>
        <span>01 — 07</span>
      </div>

      <div className="projects-section__stack">
        <ProjectCard project={first} index={1} />
        <ProjectCard project={second} index={2} />
        <ProjectCard project={third} variant="overlay" index={3} />
      </div>

      <div className="projects-section__grid">
        <ProjectCard project={fourth} variant="small" index={4} />
        <ProjectCard project={fifth} variant="small" index={5} />
        <ProjectCard project={sixth} variant="small" index={6} />
        <ProjectCard project={seventh} variant="small" index={7} />
      </div>
    </section>
  )
}
