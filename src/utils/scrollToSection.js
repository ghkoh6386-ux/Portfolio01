export function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId)

  if (!target) return

  const rect = target.getBoundingClientRect()
  const absoluteTop = window.scrollY + rect.top
  const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight)

  const nextTop =
    sectionId === 'projects'
      ? absoluteTop - 120
      : absoluteTop - window.innerHeight / 2 + rect.height / 2

  window.scrollTo({
    top: Math.min(Math.max(nextTop, 0), maxScroll),
    behavior: 'smooth'
  })
}
