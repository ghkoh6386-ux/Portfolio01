import useReveal from "../../hooks/useReveal";

const skillColumns = [
  {
    label: "01 / Front-end",
    items: ["React", "React Router", "Tailwind CSS"],
  },
  {
    label: "02 / Styling",
    items: ["SCSS / Sass", "Responsive UI", "UI Publishing"],
  },
  {
    label: "03 / Tools",
    items: ["Figma", "Photoshop", "After Effects"],
  },
  {
    label: "04 / Backend",
    items: ["Supabase", "Authentication", "CRUD Flow"],
  },
];

export default function Skills() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="skills"
      ref={ref}
      data-page-label="Expertise"
      className={`skills-section fade-section ${visible ? "is-visible" : ""}`}
    >
      <div className="skills-section__intro">
        <h2>Skills</h2>
        <p>프로젝트 구현에 필요한 다양한 기술들을 활용하고 있습니다.</p>
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
  );
}
