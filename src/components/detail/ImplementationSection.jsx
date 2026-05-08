export default function ImplementationSection({ project }) {
  const implementation = project.implementation ?? {}
  const items =
    implementation.items ??
    (implementation.description
      ? [
          {
            number: '01',
            label: implementation.title ?? 'Implementation',
            description: implementation.description
          }
        ]
      : [])

  if (items.length === 0) {
    return null
  }

  return (
    <section
      className={`detail-implementation${
        project.slug === 'babymonster'
          ? ' detail-implementation--babymonster'
          : project.slug === 'santa'
            ? ' detail-implementation--santa'
            : project.slug === 'figma-archive'
              ? ' detail-implementation--figma-archive'
            : ''
      }`}
      data-page-label="Highlights"
    >
      <div className="detail-implementation__inner">
        {items.map((item, index) => (
          <article key={`${item.number ?? index}-${item.label ?? index}`} className="detail-implementation__item">
            <div
              className={`detail-implementation__media${item.imageFit === 'contain' ? ' detail-implementation__media--contain' : ''}`}
              aria-label={`${item.label ?? `Highlight ${index + 1}`} image slot`}
            >
              {item.image ? (
                <img src={item.image} alt={item.imageAlt ?? `${item.label ?? `Highlight ${index + 1}`} preview`} />
              ) : (
                <div className="detail-implementation__placeholder">
                  <strong>{item.number ?? String(index + 1).padStart(2, '0')}</strong>
                  <span>{`Highlight ${index + 1}`}</span>
                </div>
              )}
            </div>
            <span>{item.number ?? String(index + 1).padStart(2, '0')}</span>
            <h3>{item.label}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
