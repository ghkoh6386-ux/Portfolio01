function getSectionAnchorTop(target) {
  const label = target.getAttribute('data-page-label')
  const rect = target.getBoundingClientRect()
  const absoluteTop = window.scrollY + rect.top

  if (label === 'Projects') {
    return absoluteTop + Math.min(rect.height * 0.18, 220)
  }

  if (label === 'Expertise') {
    return absoluteTop + Math.min(rect.height * 0.18, 380)
  }

  return absoluteTop + rect.height / 2
}

function getSectionCenterTop(target) {
  const rect = target.getBoundingClientRect()
  const absoluteTop = window.scrollY + rect.top

  return absoluteTop + rect.height / 2
}

function getScrollTopForAnchor(anchorTop) {
  const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
  const nextTop = anchorTop - window.innerHeight / 2

  return Math.min(Math.max(nextTop, 0), maxScroll)
}

export function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId)

  if (!target) return

  window.scrollTo({
    top: getScrollTopForAnchor(getSectionAnchorTop(target)),
    behavior: 'smooth'
  })
}

export function scrollToPageLabel(label) {
  const target = document.querySelector(`[data-page-label="${label}"]`)

  if (!target) return

  if (label === 'Projects') {
    const rect = target.getBoundingClientRect()
    const absoluteTop = window.scrollY + rect.top
    const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
    const nextTop = absoluteTop - 120

    window.scrollTo({
      top: Math.min(Math.max(nextTop, 0), maxScroll),
      behavior: 'smooth'
    })
    return
  }

  window.scrollTo({
    top: getScrollTopForAnchor(getSectionCenterTop(target)),
    behavior: 'smooth'
  })
}

export function getPageLabelAnchorTop(section) {
  const label = section.getAttribute('data-page-label')
  const rect = section.getBoundingClientRect()
  const absoluteTop = window.scrollY + rect.top

  if (label === 'Expertise') {
    return absoluteTop + Math.min(rect.height * 0.34, 520)
  }

  return getSectionAnchorTop(section)
}
