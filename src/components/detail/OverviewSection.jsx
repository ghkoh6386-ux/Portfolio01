export default function OverviewSection({ project }) {
  const overview = project.overview ?? {}
  const techStack = overview.techStack ?? project.techStack ?? []
  const role = overview.role ?? project.role ?? []
  const roleItems = Array.isArray(role) ? role : [role]
  const showRole = project.slug === 'santa'

  return (
    <section className="detail-overview" data-page-label="Overview">
      <div className={`detail-overview__inner ${showRole ? '' : 'detail-overview__inner--compact'}`}>
        <article>
          <span>Overview</span>
          <p>{overview.description ?? project.shortDescription}</p>
        </article>
        <article>
          <span>Tech Stack</span>
          <ul>
            {techStack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        {showRole && (
          <article>
            <span>Role</span>
            <ul>
              {roleItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        )}
      </div>
    </section>
  )
}
