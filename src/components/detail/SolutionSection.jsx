export default function SolutionSection({ project }) {
  const solution = project.solution ?? {}

  return (
    <section className="detail-solution" data-page-label="Implementation">
      <div className="detail-solution__inner">
        <div className="detail-solution__copy">
          <h2>{solution.title ?? 'Implementation'}</h2>
          <p>{solution.description ?? ''}</p>
          {solution.liveUrl && (
            <a
              className="detail-solution__button"
              href={solution.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              {solution.buttonLabel ?? '사이트 보기'}
            </a>
          )}
        </div>
        <div className="detail-solution__media">
          <img
            src={solution.image ?? project.heroImage}
            alt={`${project.title} implementation visual`}
          />
        </div>
      </div>
    </section>
  )
}
