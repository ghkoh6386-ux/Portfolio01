import { projects as babymonsterProjects } from './babymonster'
import informationProtect from './informationProtect'
import magazine from './magazine'
import movieApp from './movie-app'
import pagesAndPlace from './pages-and-place'
import santa from './santa'

const babymonster = babymonsterProjects[0]

function normalizeProject(source, meta) {
  const problem = source.problem ?? source.planning ?? {}
  const solution = source.solution ?? source.implementation ?? {}
  const implementation =
    source.implementation?.items
      ? source.implementation
      : source.highlights
        ? { title: 'Highlights', items: source.highlights }
        : source.implementation ?? {}
  const result = source.result ?? source.documentation ?? {}
  const review = source.review ?? source.reflection ?? {}

  return {
    slug: source.slug,
    title: source.title,
    category: meta.category,
    shortDescription: source.hero?.description ?? source.overview?.description ?? '',
    thumbnail: source.hero?.image ?? problem.image ?? solution.image ?? '',
    heroImage: source.hero?.image ?? solution.image ?? problem.image ?? '',
    techStack: source.overview?.techStack ?? [],
    role: source.overview?.role ?? [],
    hero: source.hero ?? {},
    overview: source.overview ?? {},
    problem,
    solution,
    implementation,
    result,
    review
  }
}

export const projects = [
  normalizeProject(magazine, { category: 'Editorial UI' }),
  normalizeProject(babymonster, { category: 'Performance UI' }),
  normalizeProject(santa, { category: 'Community UI' }),
  normalizeProject(movieApp, { category: 'Movie Archive' }),
  normalizeProject(pagesAndPlace, { category: 'Travel Archive' }),
  normalizeProject(informationProtect, { category: 'Educational Content' })
]

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug)
}
