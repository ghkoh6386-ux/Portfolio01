export default function SolutionSection({ project }) {
  return (
    <section className="detail-solution">
      <div className="detail-solution__inner">
        <div className="detail-solution__copy">
          <h2>Solution</h2>
          <p>{project.solution}</p>
        </div>
        <div className="detail-solution__media">
          <img src={project.heroImage} alt={`${project.title} solution visual`} />
        </div>
      </div>
    </section>
  )
}
