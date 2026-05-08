import useReveal from "../../hooks/useReveal";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/d.hyunko?igsh=bGdwbnk1MHpsaTA2&utm_source=qr",
  },
  { label: "GitHub", href: "https://github.com/ghkoh6386-ux" },
];

export default function Contact() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="contact"
      ref={ref}
      data-page-label="Contact"
      className={`contact-section fade-section ${visible ? "is-visible" : ""}`}
    >
      <div className="contact-section__inner">
        <div className="contact-section__intro">
          <span className="section-kicker">Ready to collaborate?</span>
          <h2>함께 성장하며 좋은 경험을 만들어가고 싶습니다.</h2>
          <p>
            다양한 경험과 협업을 통해 더 나은 사용자 경험과 화면을 만들어가고자
            합니다.
          </p>
        </div>

        <div className="contact-section__content">
          <a
            href="mailto:ghkoh6386@gmail.com"
            className="contact-section__mail"
          >
            ghkoh6386@gmail.com
          </a>

          <div className="contact-section__meta">
            <span>Based in Seoul</span>
            <span>UI Design / Web Publish</span>
          </div>

          <div className="contact-section__links">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
