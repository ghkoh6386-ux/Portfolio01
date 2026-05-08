import useReveal from "../../hooks/useReveal";

export default function Hero() {
  const { ref, visible } = useReveal();

  return (
    <section
      ref={ref}
      data-page-label="Home"
      className={`home-hero fade-section ${visible ? "is-visible" : ""}`}
    >
      <div className="home-hero__inner">
        <span className="section-kicker">Portfolio / 2026</span>

        <div className="home-hero__grid">
          <div className="home-hero__headline">
            <h1 className="home-hero__title">
              <span className="home-hero__line home-hero__line--intro">
                안녕하세요.
              </span>
              <span className="home-hero__line">
                다양한 스타일의 화면을 구현하고
              </span>
              <span className="home-hero__line">
                원활한 협업을 중요하게 생각하는
              </span>
              <span className="home-hero__line home-hero__accent">
                웹 퍼블리셔입니다.
              </span>
            </h1>
          </div>

          <div className="home-hero__aside">
            <div className="home-hero__meta">
              <span>Portfolio</span>
              <span>UI / Front-end</span>
              <span>2026</span>
            </div>
            <p>
              다양한 컨셉과 사용자 경험을 바탕으로 프로젝트마다 다른 분위기의
              화면을 구현합니다.
            </p>
          </div>
        </div>

        <div className="home-hero__copy">
          <p>
            Hello, I’m a web publisher who creates interfaces across diverse
            styles and values smooth collaboration.
          </p>

          <div className="home-hero__anchors">
            <span>Editorial UI</span>
            <span>Performance UI</span>
            <span>Motion & Content</span>
          </div>
        </div>
      </div>
    </section>
  );
}
