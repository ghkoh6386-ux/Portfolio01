import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { scrollToPageLabel } from '../../utils/scrollToSection'

const homeNavItems = [
  { label: 'Home', displayLabel: 'Home' },
  { label: 'About', displayLabel: 'About' },
  { label: 'Projects', displayLabel: 'Projects' },
  { label: 'Expertise', displayLabel: 'Skills' },
  { label: 'Contact', displayLabel: 'Contact' }
]
const detailNavItems = [
  'Hero',
  'Overview',
  'Planning',
  'Implementation',
  'Highlights',
  'Documentation',
  'Reflection'
]

function isMobileViewport() {
  return typeof window !== 'undefined' && window.innerWidth <= 768
}

export default function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isHome = location.pathname === '/'
  const isDetailPage = location.pathname.startsWith('/project/')
  const navItems = isDetailPage ? detailNavItems : homeNavItems

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    function handleResize() {
      if (!isMobileViewport()) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  function handleBrandClick() {
    if (isHome) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      return
    }

    navigate('/')
  }

  function handleMenuToggle() {
    if (!isMobileViewport()) {
      return
    }

    setIsMenuOpen((prev) => !prev)
  }

  function handleNavigate(label) {
    scrollToPageLabel(label)
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`site-header ${isDetailPage ? 'site-header--detail' : 'site-header--home'}${
        isMenuOpen ? ' is-open' : ''
      }`}
    >
      <div className="site-header__inner">
        <div className="site-header__brand-row">
          <button type="button" className="site-header__brand-text" onClick={handleBrandClick}>
            Portfolio
          </button>

          <button
            type="button"
            className="site-header__logo-button"
            onClick={handleMenuToggle}
            aria-expanded={isMenuOpen}
            aria-controls="site-header-nav"
            aria-label="Open portfolio menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <nav
          id="site-header-nav"
          className={`site-header__nav${isMenuOpen ? ' is-open' : ''}`}
          aria-label="Primary"
        >
          {isDetailPage
            ? navItems.map((item) => (
                <button key={item} type="button" onClick={() => handleNavigate(item)}>
                  {item}
                </button>
              ))
            : navItems.map((item) => (
                <button key={item.label} type="button" onClick={() => handleNavigate(item.label)}>
                  {item.displayLabel}
                </button>
              ))}
        </nav>
      </div>
    </header>
  )
}
