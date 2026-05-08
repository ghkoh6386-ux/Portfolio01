import heroImage from '../assets/projects/santa/hero.jpg'
import planningImage from '../assets/projects/santa/section-planning.jpg'
import implementationImage from '../assets/projects/santa/implementation.jpg'
import highlight01Image from '../assets/projects/santa/highlight01.jpg'
import highlight02Image from '../assets/projects/santa/highlight02.jpg'
import highlight03Image from '../assets/projects/santa/highlight03.jpg'

const santa = {
  slug: 'santa',
  title: 'SANTA (Team Project)',

  hero: {
    eyebrow: 'Featured Case Study',
    title: 'SANTA (Team Project)',
    description:
      '등산 정보 탐색, 장소 발견, 커뮤니티 기록을 하나의 흐름으로 연결한 하이킹 커뮤니티 플랫폼',
    image: heroImage,
  },

  overview: {
    description:
      '등산 코스와 장소 정보, 커뮤니티 활동, 개인 기록 관리를 하나의 서비스 안에서 경험할 수 있도록 구성한 하이킹 커뮤니티 웹사이트입니다. 단순한 등산 정보 제공을 넘어서, 사용자가 장소를 찾고 기록을 남기며 다른 사람들과 경험을 공유할 수 있는 흐름으로 구현했습니다..',
    techStack: ['React', 'React Router', 'Vercel'],
    role: ['기획', 'UI/UX 설계', '웹 퍼블리싱'],
  },

  problem: {
    title: 'Planning',
    description:
      '이 산타 페이지는 등산 커뮤니티 사이트를 만들고자 기획한 프로젝트입니다. ‘산타’라는 단어를 활용해 등산(산)과 캐릭터적인 이미지가 결합된 콘셉트를 설정하고, 전체적으로 귀엽고 친근한 분위기로 디자인을 구성했습니다. 정보 콘텐츠는 산 정보, 주변 맛집, 등산 시 주의사항 등으로 구성해 실용성을 더했으며, 커뮤니티 기능으로는 등산 크루를 찾을 수 있는 페이지를 기획해 사용자 간 교류가 이루어질 수 있도록 했습니다. 또한 로그인 기능과 마이페이지를 통해 개인의 등산 기록과 포인트를 관리할 수 있도록 구성하여, 단순 정보 제공을 넘어 즐길 수 있는 요소를 더한 서비스로 구현했습니다.',
    image: planningImage,
  },

  solution: {
    title: 'Implementation',
    description:
      '산 정보, 주변 맛집, 등산 주의사항을 제공하는 정보 페이지와 등산 크루를 찾을 수 있는 커뮤니티 페이지를 구현했으며, 로그인 기능과 마이페이지를 구성해 개인 등산 기록을 확인할 수 있도록 했습니다. 포인트 기능과 기록 관리 기능은 구조 위주로 구현하여 화면에서 확인할 수 있도록 구성했습니다.',
    image: implementationImage,
    buttonLabel: '사이트 보기',
    liveUrl: 'https://santa-app-jw6k.vercel.app/',
  },

  implementation: {
    title: 'Highlights',
    items: [
      {
        number: '01',
        label: 'Information Page',
        image: highlight01Image,
        imageFit: 'contain',
        imageAlt: 'SANTA highlights integrated flow preview',
        description:
          '산 정보를 지역별로 검색할 수 있는 페이지를 구현하여서 산정보 검색의 편의성을 높이게 하였습니다.',
      },
      {
        number: '02',
        label: 'Community Page',
        image: highlight02Image,
        imageFit: 'contain',
        imageAlt: 'SANTA highlights community UI preview',
        description:
          '카드형으로 등산 커뮤니티 를 보여지게 하여서 사용자들이 등산 크루를 쉽게 찾을 수 있도록 하였습니다.',
      },
      {
        number: '03',
        label: 'Mypage',
        image: highlight03Image,
        imageFit: 'contain',
        imageAlt: 'SANTA highlights scalable system preview',
        description:
          '마이페이지에서 개인의 등산 기록과 포인트를 관리할 수 있도록 구성하여, 단순 정보 제공을 넘어 즐길 수 있는 요소를 더한 서비스로 구현했습니다.',
      },
    ],
  },

  result: {
    eyebrow: 'Project Document',
    title: 'Documentation',
    description:
      '기획 배경, 페이지 구조, 등산 정보 흐름, 커뮤니티 기능과 UI 시스템을 정리한 프로젝트 문서입니다.',
    buttonLabel: '노션 보기',
    href: 'https://www.notion.so/348398be8ce280eb8b4bca103818be63?source=copy_link',
  },

  review: {
    eyebrow: 'Reflection',
    quote:
      '이 프로젝트는 팀 단위로 진행된 만큼, 구현 과정에서 팀원 간의 의견을 맞추는 데 많은 시간을 들였습니다. 각자 생각을 적극적으로 공유하고, 서로의 의견을 수용하려고 노력하면서 자연스럽게 협업의 흐름을 만들어갈 수 있었습니다. 전체적으로 편안한 분위기 속에서 각자 맡은 역할에 책임감을 가지고 참여하는 모습이 인상적이었고, 팀 프로젝트로서 높은 만족감을 느낄 수 있었습니다. 또한 학원 수료 과정에서 React를 처음 배우고 바로 프로젝트에 적용한 경험이었기 때문에, 구조를 이해하고 구현하는 과정에서 어려움이 있었습니다. 그로 인해 일부 기능은 완성하지 못한 아쉬움도 남았지만, 끝까지 프로젝트를 완성해냈다는 점에서 큰 성취감을 느꼈습니다. 팀원들과의 소통 또한 원활하게 이루어져 전반적으로 즐겁게 진행한 프로젝트였습니다.',
    description:
      '특히 장소 정보와 커뮤니티, 개인 기록 기능을 하나의 구조 안에서 연결하는 과정이 가장 인상적이었다. 앞으로는 여기에 실제 데이터 연동과 검색, 필터, 사용자 맞춤 기능을 더해 더 완성도 높은 하이킹 플랫폼으로 발전시키고 싶다.',
    authorTitle: 'Project Reflection',
    authorDescription: 'What I learned through community service design',
  },
}

export default santa
