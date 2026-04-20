import { Link, useLocation, useNavigate } from 'react-router-dom'
import { scrollToSection } from '../../utils/scrollToSection'

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' }
]

export default function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

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

  function handleNavigate(sectionId) {
    if (!isHome) {
      navigate('/', { state: { scrollTo: sectionId } })
      return
    }

    scrollToSection(sectionId)
  }

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="site-header__brand" onClick={handleBrandClick}>
          ARCHIVE
        </Link>

        <nav className="site-header__nav" aria-label="Primary">
          {navItems.map((item) => (
            <button key={item.id} type="button" onClick={() => handleNavigate(item.id)}>
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
