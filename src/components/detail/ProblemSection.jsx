export default function ProblemSection({ project }) {
  return (
    <section className="detail-narrative detail-narrative--problem">
      <div className="detail-narrative__inner">
        <div className="detail-narrative__title">
          <h2>Problem</h2>
        </div>

        <div className="detail-narrative__body">
          <div className="detail-narrative__content">
            <p>{project.problem}</p>
          </div>

          <div className="detail-narrative__image">
            <img src={project.thumbnail} alt={`${project.title} problem visual`} />
          </div>
        </div>
      </div>
    </section>
  )
}
