import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getProjectBySlug } from '../../data/projects'

function getDisplayLabel(label) {
  return label === 'Expertise' ? 'Skills' : label
}

function getDetailSlug(pathname) {
  const segments = pathname.split('/').filter(Boolean)
  return segments[0] === 'project' ? segments[1] : null
}

export default function PageIndicator() {
  const location = useLocation()
  const [activeLabel, setActiveLabel] = useState('')
  const [labels, setLabels] = useState([])

  const isDetailPage = location.pathname.startsWith('/project/')
  const slug = getDetailSlug(location.pathname)
  const project = slug ? getProjectBySlug(slug) : null

  const contextLabel = useMemo(() => {
    if (isDetailPage) {
      return project?.title ?? 'Project Detail'
    }

    return 'Portfolio Index'
  }, [isDetailPage, project])

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('[data-page-label]'))

    if (sections.length === 0) {
      setActiveLabel('')
      setLabels([])
      return undefined
    }

    setLabels(
      sections
        .map((section) => section.getAttribute('data-page-label') ?? '')
        .filter(Boolean)
    )

    const updateActiveLabel = () => {
      const marker = window.scrollY + window.innerHeight / 2
      let current = sections[0]

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        const sectionTop = window.scrollY + rect.top
        const nextSection = sections[index + 1]
        const nextSectionTop = nextSection
          ? window.scrollY + nextSection.getBoundingClientRect().top
          : Number.POSITIVE_INFINITY

        if (marker >= sectionTop && marker < nextSectionTop) {
          current = section
        }
      })

      setActiveLabel(current.getAttribute('data-page-label') ?? '')
    }

    updateActiveLabel()
    window.addEventListener('scroll', updateActiveLabel, { passive: true })
    window.addEventListener('resize', updateActiveLabel)

    return () => {
      window.removeEventListener('scroll', updateActiveLabel)
      window.removeEventListener('resize', updateActiveLabel)
    }
  }, [location.pathname, isDetailPage])

  if (!activeLabel) {
    return null
  }

  return (
    <div className="page-indicator" aria-live="polite">
      <span className="page-indicator__context">{contextLabel}</span>
      <div className="page-indicator__list">
        {labels.map((label, index) => {
          const isActive = label === activeLabel

          return (
            <span
              key={label}
              className={`page-indicator__item${isActive ? ' is-active' : ''}`}
            >
              <em>{String(index + 1).padStart(2, '0')}</em>
              <strong>{getDisplayLabel(label)}</strong>
            </span>
          )
        })}
      </div>
    </div>
  )
}
