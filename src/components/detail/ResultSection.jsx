export default function ResultSection({ project }) {
  const result = project.result ?? {}
  const description =
    '각 사이트의 콘텐츠 구조, UI 설계, 페이지 기능을 상세하게 기록해둔 프로젝트 문서입니다.'

  return (
    <section className="detail-result" data-page-label="Documentation">
      <div className="detail-result__inner">
        <article className="detail-result__card">
          <div className="detail-result__copy">
            <h4>{result.eyebrow ?? 'Project Document'}</h4>
            <h3>{result.title ?? 'Documentation'}</h3>
            <p>{description}</p>
            {result.href && (
              <a
                className="detail-result__button"
                href={result.href}
                target="_blank"
                rel="noreferrer"
              >
                {result.buttonLabel ?? '노션 보기'}
              </a>
            )}
          </div>
        </article>
      </div>
    </section>
  )
}
