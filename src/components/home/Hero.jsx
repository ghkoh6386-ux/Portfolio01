import useReveal from '../../hooks/useReveal'
import profileImage from '../../assets/projects/about/profile.jpg'

export default function Hero() {
  const { ref, visible } = useReveal()

  return (
    <section
      ref={ref}
      data-page-label="Home"
      className={`home-hero fade-section ${visible ? 'is-visible' : ''}`}
    >
      <div className="home-hero__inner">
        <span className="section-kicker">Portfolio / 2026</span>

        <div className="home-hero__grid">
          <div className="home-hero__headline">
            <h1 className="home-hero__title">
              <span className="home-hero__line home-hero__line--intro">안녕하세요.</span>
              <span className="home-hero__line">다양한 스타일의 화면을 구현하고</span>
              <span className="home-hero__line">원활한 협업을 중요하게 생각하는</span>
              <span className="home-hero__line home-hero__accent">웹 퍼블리셔입니다.</span>
            </h1>
          </div>

          <div className="home-hero__aside">
            <div className="home-hero__profile">
              <img src={profileImage} alt="프로필 이미지" />
            </div>

            <div className="home-hero__aside-copy">
              <div className="home-hero__meta">
                <span>Portfolio</span>
                <span>UI / Web Publisher</span>
                <span>2026</span>
              </div>
              <p>프로젝트마다 어울리는 화면과 흐름을 구현합니다.</p>
            </div>
          </div>
        </div>

        <div className="home-hero__copy">
          <p>
            Hello, I&apos;m a web publisher who creates interfaces across diverse styles and
            values smooth collaboration.
          </p>

          <div className="home-hero__anchors">
            <span>Editorial UI</span>
            <span>Performance UI</span>
            <span>Motion & Content</span>
          </div>
        </div>
      </div>
    </section>
  )
}
