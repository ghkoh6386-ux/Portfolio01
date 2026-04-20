import { Link, Navigate, useParams } from 'react-router-dom'
import DetailHero from '../components/detail/DetailHero'
import ImplementationSection from '../components/detail/ImplementationSection'
import OverviewSection from '../components/detail/OverviewSection'
import ProblemSection from '../components/detail/ProblemSection'
import ResultSection from '../components/detail/ResultSection'
import ReviewSection from '../components/detail/ReviewSection'
import SolutionSection from '../components/detail/SolutionSection'
import { getProjectBySlug, projects } from '../data/projects'

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return <Navigate to="/" replace />
  }

  const currentIndex = projects.findIndex((item) => item.slug === slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <main className="detail-page">
      <DetailHero project={project} />
      <OverviewSection project={project} />
      <ProblemSection project={project} />
      <SolutionSection project={project} />
      <ImplementationSection project={project} />
      <ResultSection project={project} />
      <ReviewSection project={project} />

      <footer className="detail-footer">
        <div>
          <div className="detail-footer__title">Editorial Architecturalism Portfolio</div>
          <div className="detail-footer__copy">2024 Editorial Architecturalism Portfolio</div>
        </div>
        <div className="detail-footer__links">
          <Link to={`/project/${nextProject.slug}`}>Next Project: {nextProject.title}</Link>
          <Link to="/">Index</Link>
          <a href="#top" onClick={(event) => {
            event.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}>
            Back to Top
          </a>
        </div>
      </footer>
    </main>
  )
}
