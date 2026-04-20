import useReveal from '../../hooks/useReveal'

const skillColumns = [
  {
    label: '01 / Strategy',
    items: ['Visual Direction', 'UX Architecture', 'Editorial Design']
  },
  {
    label: '02 / Technical',
    items: ['React / Router', 'Sass Systems', 'Motion Refinement']
  },
  {
    label: '03 / Tooling',
    items: ['Figma', 'Adobe Suite', 'Front-end Build']
  }
]

export default function Skills() {
  const { ref, visible } = useReveal()

  return (
    <section
      id="skills"
      ref={ref}
      className={`skills-section fade-section ${visible ? 'is-visible' : ''}`}
    >
      <div className="skills-section__intro">
        <h2>Expertise</h2>
        <p>Building the structural foundation for modern digital experiences.</p>
      </div>

      <div className="skills-section__grid">
        {skillColumns.map((column) => (
          <div key={column.label} className="skills-section__column">
            <span>{column.label}</span>
            <ul>
              {column.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
