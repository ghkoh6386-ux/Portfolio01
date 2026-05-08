import { Link, useLocation, useNavigate } from 'react-router-dom'
import { scrollToPageLabel } from '../../utils/scrollToSection'

const homeNavItems = ['Home', 'About', 'Projects', 'Expertise', 'Contact']
const detailNavItems = [
  'Hero',
  'Overview',
  'Planning',
  'Implementation',
  'Highlights',
  'Documentation',
  'Reflection'
]

export default function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'
  const isDetailPage = location.pathname.startsWith('/project/')
  const navItems = isDetailPage ? detailNavItems : homeNavItems

  function handleBrandClick(event) {
    if (isHome) {
      event.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      return
    }

    navigate('/')
  }

  function handleNavigate(label) {
    scrollToPageLabel(label)
  }

  return (
    <header className={`site-header ${isDetailPage ? 'site-header--detail' : 'site-header--home'}`}>
      <div className="site-header__inner">
        <Link to="/" className="site-header__brand" onClick={handleBrandClick}>
          Portfolio
        </Link>

        <nav className="site-header__nav" aria-label="Primary">
          {navItems.map((item) => (
            <button key={item} type="button" onClick={() => handleNavigate(item)}>
              {item}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
