export default function ProblemSection({ project }) {
  const problem = project.problem ?? {}

  return (
    <section className="detail-narrative detail-narrative--problem" data-page-label="Planning">
      <div className="detail-narrative__inner">
        <div className="detail-narrative__body">
          <div className="detail-narrative__copy">
            <div className="detail-narrative__title">
              <h2>{problem.title ?? 'Planning'}</h2>
            </div>
            <div className="detail-narrative__content">
              <p>{problem.description ?? ''}</p>
            </div>
          </div>
          <div className="detail-narrative__image">
            <img src={problem.image ?? project.thumbnail} alt={`${project.title} planning visual`} />
          </div>
        </div>
      </div>
    </section>
  )
}
