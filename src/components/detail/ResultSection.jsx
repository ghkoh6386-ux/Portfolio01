export default function ResultSection({ project }) {
  return (
    <section className="detail-result">
      <div className="detail-result__inner">
        <article>
          <h4>Result</h4>
          <strong>45%</strong>
          <p>{project.result}</p>
        </article>
        <article>
          <h4>Reach</h4>
          <strong>12k+</strong>
          <p>Placeholder metrics can later be replaced with real outcomes, traffic, or engagement figures.</p>
        </article>
      </div>
    </section>
  )
}
