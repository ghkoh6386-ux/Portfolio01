import useReveal from '../../hooks/useReveal'
import profileImage from '../../assets/projects/about/profile.jpg'

export default function About() {
  const { ref, visible } = useReveal()

  return (
    <section
      id="about"
      ref={ref}
      data-page-label="About"
      className={`home-intro fade-section ${visible ? 'is-visible' : ''}`}
    >
      <div className="home-intro__inner">
        <div className="home-intro__intro">
          <span className="section-kicker">About / Profile</span>
          <p className="home-intro__statement">
            사람들과의 소통을 중요하게 생각하며,
            <br />
            다양한 시도를 즐깁니다.
          </p>
        </div>

        <div className="home-intro__panel">
          <div className="home-intro__media">
            <div className="home-intro__portrait-frame">
              <img src={profileImage} alt="프로필 이미지" />
            </div>
          </div>

          <div className="home-intro__content">
            <p>
              디자인 의도를 화면 위에 자연스럽게 구현하는 과정에 흥미를 느낍니다.
              구조를 정리하고, 흐름을 다듬고, 함께 일하는 사람들과 매끄럽게 호흡하는
              작업을 중요하게 생각합니다.
            </p>

            <div className="home-intro__notes">
              <span>Based in Seoul</span>
              <span>Web Publishing</span>
              <span>React / Sass / UI Markup</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
