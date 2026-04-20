export default function ImplementationSection({ project }) {
  const steps = [
    {
      label: '01',
      title: 'Structure',
      text: project.implementation
    },
    {
      label: '02',
      title: 'Typography',
      text:
        'A restrained heading system and quieter supporting copy keep the page readable while preserving the editorial tone.'
    },
    {
      label: '03',
      title: 'Scalability',
      text:
        'Each block is modular so future case studies can reuse the same structure with different assets and copy.'
    }
  ]

  return (
    <section className="detail-implementation">
      <div className="detail-implementation__inner">
        {steps.map((step) => (
          <article key={step.label}>
            <span>{step.label}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
