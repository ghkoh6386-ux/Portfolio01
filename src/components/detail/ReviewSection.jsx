export default function ReviewSection({ project }) {
  return (
    <section className="detail-review">
      <div className="detail-review__inner">
        <div className="detail-review__quote">“</div>
        <blockquote>{project.review}</blockquote>
        <div className="detail-review__author">
          <div className="detail-review__avatar">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
              alt="Profile"
            />
          </div>
          <div>
            <strong>Portfolio Reflection</strong>
            <p>Design & Frontend Review Note</p>
          </div>
        </div>
      </div>
    </section>
  )
}
