import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollManager() {
  const location = useLocation()
  const previousPathRef = useRef(location.pathname)

  useEffect(() => {
    const pathnameChanged = previousPathRef.current !== location.pathname
    const hasSectionTarget = Boolean(location.state?.scrollTo)

    if (pathnameChanged && !hasSectionTarget) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    previousPathRef.current = location.pathname
  }, [location.pathname, location.state])

  return null
}
