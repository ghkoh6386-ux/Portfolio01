export default function OverviewSection({ project }) {
  return (
    <section className="detail-overview">
      <div className="detail-overview__inner">
        <article>
          <span>Overview</span>
          <p>{project.overview}</p>
        </article>
        <article>
          <span>Tech Stack</span>
          <ul>
            {project.techStack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article>
          <span>Role</span>
          <p>{project.role}</p>
        </article>
      </div>
    </section>
  )
}
