export default function ReviewSection({ project }) {
  const review = project.review ?? {}

  return (
    <section className="detail-review" data-page-label="Reflection">
      <div className="detail-review__inner">
        <div className="detail-review__quote">"</div>
        <div className="detail-review__eyebrow">{review.eyebrow ?? 'Reflection'}</div>
        <blockquote>{review.quote ?? review.description ?? ''}</blockquote>
        <div className="detail-review__author">
          <div>
            <strong>{review.authorTitle ?? 'Project Reflection'}</strong>
            <p>{review.authorDescription ?? review.description ?? ''}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
