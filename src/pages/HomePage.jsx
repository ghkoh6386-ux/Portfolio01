import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import About from '../components/home/About'
import Contact from '../components/home/Contact'
import Hero from '../components/home/Hero'
import ProjectsSection from '../components/home/ProjectsSection'
import Skills from '../components/home/Skills'
import { projects } from '../data/projects'
import { scrollToSection } from '../utils/scrollToSection'

export default function HomePage() {
  const location = useLocation()

  useEffect(() => {
    const scrollTo = location.state?.scrollTo

    if (scrollTo) {
      setTimeout(() => {
        scrollToSection(scrollTo)
      }, 50)
    }
  }, [location.state])

  return (
    <main className="home-page">
      <Hero />
      <About />
      <ProjectsSection projects={projects} />
      <Skills />
      <Contact />

      <footer className="site-footer">
        <div>2024 Editorial Architecturalism. All rights reserved.</div>
        <div>
          <a href="#projects">Archive</a>
          <a href="#skills">Expertise</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>

      <div className="frame-note frame-note--top-left">Vol. 01 Edition</div>
      <div className="frame-note frame-note--bottom-left">Portfolio</div>
      <div className="frame-note frame-note--bottom-right">Seoul / KR</div>
    </main>
  )
}
